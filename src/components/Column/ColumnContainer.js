import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux.js';

console.log('getCardsForColumn', getCardsForColumn, createActionAddCard);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    addCard: title => dispatch(createActionAddCard({columnId: props, title})),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Column);