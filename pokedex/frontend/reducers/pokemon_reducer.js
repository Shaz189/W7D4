import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON, CREATE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemons;

    case RECEIVE_POKEMON:
    case CREATE_POKEMON:
      newState[action.pokemon.id] = action.pokemon;
      return newState;

    default:
      return state;
  }
};
