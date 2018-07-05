import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import CreateFormContainer from './create_form_container';
import { Link, Route } from 'react-router-dom';


class PokemonIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon;
    const pokemonItems = pokemon.map(poke => {
      return (
        <PokemonIndexItem key={poke.id} pokemon={poke} />
      );
    });

    return (
      <section className="pokedex">
        <Link to='/pokemon/new'>Create New Pokemon</Link>
        <ul>
          {pokemonItems}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;
