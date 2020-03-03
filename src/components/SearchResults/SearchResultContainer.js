import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux.js';

console.log('getCardsForColumn', getCardsForColumn, createActionAddCard);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);