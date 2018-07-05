// import { RECEIVE_ITEMS, RECEIVE_ITEM } from '../actions/item_actions';
import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_POKEMON:
      return action.pokemon.items || {};

    default:
     return state;

  }
};
