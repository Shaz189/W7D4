import React from 'react';
import { Link, Route } from 'react-router-dom';
import ItemDetail from './item_detail';
import EditFormContaner from './edit_form_container';

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

    const editUrl=`/pokemon/${poke.id}/edit`;

    return (
      <div className="pokemon-details">
        <h1>{poke.name}</h1>
        <ul>
          {itemArr}
        </ul>
        <Route
          path='/pokemon/:pokemonId/items/:itemId'
          component={ItemDetail} />
        <Link to={editUrl}>Edit</Link>
        <Route
          path='/pokemon/:pokemonId/edit'
          component={EditFormContaner} />
      </div>
    );
  }
}

export default PokemonDetail;
// maybe export with explicit wrapping of route
