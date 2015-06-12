class Api::InterviewsController < ApplicationController
  def create
    data = interview_params
    d = Date.parse(data[:date])
    t = Time.parse(data[:time])
    data[:datetime] = DateTime.new(d.year, d.month, d.day, t.hour, t.min, t.sec, t.zone)
    data.delete(:date)
    data.delete(:time)
    @interview = Interview.new(data);

    if @interview.save
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
    @interviews = current_user.interviews
    render :index
  end

  def interview_params
    params.require(:interview).permit(:application_id, :date, :time,
                                        :address, :duration)
  end
end
