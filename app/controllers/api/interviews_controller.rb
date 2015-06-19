class Api::InterviewsController < ApplicationController
  def create
    data = interview_params
    begin
      d = Date.parse(data[:date])
      t = Time.parse(data[:time])
      data[:datetime] = DateTime.new(d.year, d.month, d.day, t.hour, t.min, t.sec, t.zone)
    rescue Exception
      render json: "Invalid input for date/time. Try again.", status: :unprocessable_entity
      return
    end
    data.delete(:date)
    data.delete(:time)
    @interview = Interview.new(data);

    if @interview.save
      JobMailer.interview_email(current_user,@interview).deliver;
      render json: @interview
    else
      render json: @interview.errors.full_messages, status: :unprocessable_entity
    end

  end

  def destroy
    @interview = Interview.find(params[:id]);
    @interview.destroy
    render json: {}
  end

  def index
    @interviews = current_user.interviews.order('datetime')
    render :index
  end

  def interview_params
    params.require(:interview).permit(:application_id, :date, :style, :time,
                                        :address, :duration)
  end
end
