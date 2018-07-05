import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CreateFormContainer from './pokemon/create_form_container';

import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Switch>
          <Route
            path='/pokemon/new'
            component={CreateFormContainer} />
          <Route
            path="/pokemon/:pokemonId"
            component={PokemonDetailContainer} />
        </Switch>

        <Route path="/" component={PokemonIndexContainer} />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
