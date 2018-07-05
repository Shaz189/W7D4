import * as ApiUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";

export const receiveAllPokemon = (pokemons) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemons
  };
};

export const receivePokemon = (pokemon) => {
  debugger
  return {
    type: RECEIVE_POKEMON,
    pokemon
  };
};

export const fetchAllPokemon = () => {
  return dispatch => {
    return ApiUtil.fetchAllPokemon().then(
      pokemons => dispatch(receiveAllPokemon(pokemons))
    );
  };
};

export const fetchSinglePokemon = (poke) => {
  return dispatch => {
    return ApiUtil.fetchPokemon(poke).then(
      poke => dispatch(receivePokemon(poke))
    );
  };
};
