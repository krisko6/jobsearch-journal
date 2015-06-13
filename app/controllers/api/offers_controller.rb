class Api::OffersController < ApplicationController
  def create
    data = offer_params
    @offer = Offer.new(data);

    if @offer.save
      render json: @offer
    else
      render json: @offer.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @offer = Offer.find(params[:id]);
    @offer.destroy
    render json: {}
  end

  def index
    @offers = current_user.offers
    render :index
  end

  def offer_params
    params.require(:offer).permit(:application_id, :due_date, :salary, :bonus,
                                        :vacation, :notes)
  end
end
