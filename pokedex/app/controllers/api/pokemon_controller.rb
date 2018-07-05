class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
    render :index
  end

  def show
    @poke = Pokemon.find(params[:id])
    @items = @poke.items
  end
end
