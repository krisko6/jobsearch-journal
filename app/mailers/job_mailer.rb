class JobMailer < ApplicationMailer
  default :from => 'admin@jobjournal.com'

  def interview_email(user,interview)
    @interview = interview
    mail(
      to: user.email,
      subject: 'Interview Reminder!'
    )
  end

end
