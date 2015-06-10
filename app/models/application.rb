class Application < ActiveRecord::Base
  validates :company, :user_id, :position, :status, presence: true

  belongs_to :user
end
