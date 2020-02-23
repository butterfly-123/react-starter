import cardsReducer from './cardsRedux';
import {combineReducers, createStore} from 'redux';
import initialStoreData from '../data/dataStore';
import columnsReducer from './columnsRedux';
import searchReducer from './searchStringRedux';

// define initial state and shallow-merge initial data
const initialState = {
  app: initialStoreData.app,
  lists: initialStoreData.lists,
  columns: initialStoreData.columns,
  cards: initialStoreData.cards,
  searchString: 'ter',
};

// define reducers
const reducers = {
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers
const storeReducer = combineReducers(reducers);

console.log('initialState', initialState);

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
