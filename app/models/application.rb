class Application < ActiveRecord::Base
  validates :company, :user_id, :position, :status, presence: true

  belongs_to :user
  has_many(:interviews,
    class_name: Interview,
    foreign_key: :application_id,
    primary_key: :id,
    dependent: :destroy
  )
  has_many(:offers,
    class_name: Offer,
    foreign_key: :application_id,
    primary_key: :id,
    dependent: :destroy
  )
end
