import React from 'react';
import { connect } from 'react-redux';
import { createPokemon } from '../../actions/pokemon_actions';
import { withRouter } from 'react-router-dom';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      attack: 0,
      defense: 0,
      poke_type: '',
      moves: [],
      image_url: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update (type) {
    return (e) => {
      const val = type === 'moves' ? e.target.value.split(', ') : e.target.value;
      this.setState({ [type]: val });
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.createPokemon(this.state).then((newPokemon) => {
      this.props.history.push(`pokemon/${newPokemon.id}`);
    });
  }

  render () {
    let errors = [];
    if (this.props.errors) {
      errors = this.props.errors.map((er, i) => <li key={i}>{er}</li>);
    }
    return (

      <form onSubmit={this.handleSubmit}>
        <ul>
          {errors}
        </ul>
        <label>Name
          <input
            onChange={this.update('name')}
            value={this.state.name}></input>
        </label>
        <label>Attack
          <input
            type='number'
            onChange={this.update('attack')}
            value={this.state.attack}></input>
        </label>
        <label>Defense
          <input
            type='number'
            onChange={this.update('defense')}
            value={this.state.defense}></input>
        </label>
        <label>Type
          <input
            onChange={this.update('poke_type')}
            value={this.state.poke_type}></input>
        </label>
        <label>Moves
          <input
            onChange={this.update('moves')}
            value={this.state.moves}></input>
        </label>
        <label>Image
          <input
            onChange={this.update('image_url')}
            value={this.state.image_url}></input>
        </label>

        <button>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.ui.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPokemon: (poke) => dispatch(createPokemon(poke))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PokemonForm));
