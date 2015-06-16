class User < ActiveRecord::Base


  validates :session_token, presence: true
  validates :email, uniqueness: true, presence: true
  validates :password, length: { minimum:6, allow_nil: true }

  before_validation :ensure_session_token
  attr_reader :password

  has_many(
    :applications,
    class_name: Application,
    foreign_key: :user_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :interviews,
    through: :applications,
    source: :interviews,
  )

  has_many(
    :offers,
    through: :applications,
    source: :offers
  )

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def pending_interviews
       interviews = self.interviews
       interviews.where("datetime > ?", DateTime.now)
  end

  def next_interview
    pending_interviews.order('datetime DESC').first
  end


  def self.find_by_credentials(email,password)
    user = User.find_by_email(email)
    if(user && user.is_password?(password))
      return user
    end
    return nil
  end
end
