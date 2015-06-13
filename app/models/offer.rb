class Offer < ActiveRecord::Base
  validates :application_id, :due_date, presence: true
  belongs_to :application
  has_one(:user,
    through: :application,
    source: :user
  )
end
