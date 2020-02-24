// selectors
export const getSearchString = ({searchString}) => searchString;

export const countAllCards = ({cards, searchString}) =>
  cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const ADD_SEARCH = createActionName('ADD_SEARCH');

// action creators
export const createAction_changeSearchString = payload => ({ payload, type: ADD_SEARCH });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case ADD_SEARCH:
      return action.payload;
    default:
      return statePart;
  }
}