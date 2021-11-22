/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import CountriesReducer from './countries';

const reducer = combineReducers({
  allContries: CountriesReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
export default store;
