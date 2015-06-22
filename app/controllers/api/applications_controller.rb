class Api::ApplicationsController < ApplicationController
  def create
    data = application_params
    data[:user_id] = current_user.id
    @application = Application.new(data);

    if @application.save
  
      render json: @application
    else
      render json: @application.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @application = Application.find(params[:id])
    if @application.update_attributes(application_params)

      render json: @application
    else
      render json: @application.errors.full_messages,
             status: :unprocessable_entity
    end
  end

  def new # TA: delete is not using
  end

  def destroy
    @application = current_user.applications.find(params[:id])
    @application.destroy
    render json: {}
  end

  def show
    @application = Application.find(params[:id])
    render json: @application, include: :interviews
  end

  def index
    @applications = current_user.applications
    render json: @applications
  end

  private
  def application_params
    params.require(:application).permit(:company, :position,
                                        :status, :url,
                                        :notes)
  end
end
