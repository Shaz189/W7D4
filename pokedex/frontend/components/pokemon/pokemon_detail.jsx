import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchSinglePokemon(this.props.poke);
  }

  render () {
    const poke = this.props.poke;
    const items = this.props.items;
    const itemArr = items.map(item => <li key={item.id}>{item.name}</li>);

    return (
      <div>
        <h1>{poke.name}</h1>
        <ul>
          {itemArr}
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
