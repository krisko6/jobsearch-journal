class Interview < ActiveRecord::Base
  validates :application_id, :datetime, :duration, :address, presence: true
  validate :does_not_conflict_with_other_interviews
  belongs_to :application
  has_one(:user,
    through: :application,
    source: :user
  )

  def conflicting_interviews
   endTime = datetime + (duration).minutes
    interviews = user.interviews
    interviews.where("datetime < ? AND (datetime + (duration || ' minute')::interval) > ?", endTime, datetime);
  end

  def does_not_conflict_with_other_interviews
    unless conflicting_interviews.empty?
      errors[:base] <<
        "The interview overlaps with other interviews. Reschedule."
    end
  end
end
