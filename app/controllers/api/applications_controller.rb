class Api::ApplicationsController < ApplicationController
  def create
  end

  def new
  end

  def destroy
  end

  def show
    
  end

  def index
    @applications = current_user.applications
    render json: @applications
  end
end
