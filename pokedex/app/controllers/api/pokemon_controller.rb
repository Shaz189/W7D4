class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
    render :index
  end

  def show
    @poke = Pokemon.find(params[:id])
    @items = @poke.items
  end

  def create
    poke = Pokemon.new(poke_params)
    if poke.save
      render json: poke
    else
      render json: poke.errors.full_messages, status: 404
    end
  end

  private

  def poke_params
    params.require(:poke).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end
end
