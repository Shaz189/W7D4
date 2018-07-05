import { RECEIVE_POKEMON_ERROR } from '../actions/pokemon_actions';
import { merge } from 'lodash';

export default (state = [], action) => {

  Object.freeze(state);
  const newState = state.slice();

  switch (action.type) {
    case RECEIVE_POKEMON_ERROR:
      action.err.forEach(error => newState.push(error));
      return newState;

    default:
    return state;
  }
};
