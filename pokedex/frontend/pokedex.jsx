import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { HashRouter, Route } from 'react-router-dom';

import Root from './components/root';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});

// TEST
import { receiveAllPokemon, fetchAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';

window.getState = store.getState;
window.dispatch = store.dispatch;
window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.selectAllPokemon = selectAllPokemon;
