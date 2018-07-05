import React from 'react';
import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import updatePokemon from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const poke = state.entities.pokemon[id];
  return {
    poke
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePokemon: (poke) => dispatch(updatePokemon(poke))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm);
