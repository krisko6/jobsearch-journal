class Interview < ActiveRecord::Base
  validates :application_id, :datetime, :duration, :address, presence: true

  belongs_to :application
  has_one(:user,
    through: :application,
    source: :user
  )
end
