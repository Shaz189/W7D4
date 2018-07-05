import React from 'react';
import { Link, Route } from 'react-router-dom';
import ItemDetail from './item_detail';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSinglePokemon(this.props.poke);
  }

  render () {
    const poke = this.props.poke || {};
    const items = this.props.items;

    const itemArr = items.map(item => {
      const itemUrl = `/pokemon/${poke.id}/items/${item.id}`;
      return (
        <Link to={itemUrl}>
          <li key={item.id}>{item.name}</li>
        </Link>
      );
    });

    return (
      <div className="pokemon-details">
        <h1>{poke.name}</h1>
        <ul>
          {itemArr}
        </ul>
        <Route
          path='/pokemon/:pokemonId/items/:itemId'
          component={ItemDetail} />
      </div>
    );
  }
}

export default PokemonDetail;
// maybe export with explicit wrapping of route
