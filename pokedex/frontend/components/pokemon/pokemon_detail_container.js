import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { fetchSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.pokemonId;
  const poke = state.entities.pokemon[id];
  return {
    poke,
    items: Object.values(state.entities.items)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSinglePokemon: (poke) => dispatch(fetchSinglePokemon(poke))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
