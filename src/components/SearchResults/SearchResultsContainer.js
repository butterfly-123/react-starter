import { connect } from 'react-redux';
import SearchResults from './SearchResults.js';
import { getCardsForSearch } from '../../redux/cardsRedux.js';
import { createActionChangeSearchString } from '../../redux/searchStringRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.searchString),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createActionChangeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);