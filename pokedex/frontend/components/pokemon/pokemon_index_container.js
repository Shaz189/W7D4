import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import { fetchAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => {
  return {
    pokemon: selectAllPokemon(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPokemon: dispatch(fetchAllPokemon())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
