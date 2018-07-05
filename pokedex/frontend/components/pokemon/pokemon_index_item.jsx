import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const poke = this.props.pokemon;
    const pokeLink = `/pokemon/${poke.id}`;
    return (
      <li>
        <Link to={pokeLink}>
          {poke.name}
          <img src={poke.image_url} />
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
