import * as ApiUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const RECEIVE_POKEMON_ERROR = 'RECEIVE_POKEMON_ERROR';

export const receiveAllPokemon = pokemons => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemons
  };
};

export const receivePokemon = pokemon => {
  return {
    type: RECEIVE_POKEMON,
    pokemon
  };
};

export const receiveCreatedPokemon = poke => {
  return {
    type: CREATE_POKEMON,
    poke
  };
};

export const receivePokemonError = err => {
  return {
    type: RECEIVE_POKEMON_ERROR,
    err: err.responseJSON
  };
};

export const fetchAllPokemon = () => {
  return dispatch => {
    return ApiUtil.fetchAllPokemon().then(
      pokemons => dispatch(receiveAllPokemon(pokemons)),
      err => dispatch(receivePokemonError(err))
    );
  };
};

export const fetchSinglePokemon = (poke) => {
  return dispatch => {
    return ApiUtil.fetchPokemon(poke).then(
      poke => dispatch(receivePokemon(poke)),
      err => dispatch(receivePokemonError(err))
    );
  };
};

export const createPokemon = (poke) => {
  return dispatch => {
    return ApiUtil.createPokemon(poke).then(
      poke => {
        dispatch(receiveCreatedPokemon(poke));
        return poke;
      },
      err => dispatch(receivePokemonError(err))
    );
  };
};
