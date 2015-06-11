json.extract! @application, :id, :user_id, :key, :company, :position, :status, :url, :notes, :created_at, :updated_at

json.interviews @application.interviews do |interview|
  json.extract! interview, :application_id, :datetime, :duration, :address, :created_at, :updated_at

end
