class Api::InterviewsController < ApplicationController
  def create
    data = interview_params
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
    render json: @interviews
  end

  def interview_params
    params.require(:interview).permit(:application_id, :datetime,
                                        :address, :duration)
  end
end
