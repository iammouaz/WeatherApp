import { createStore, combineReducers } from 'redux';
import CountriesReducer from './countries/countries';

const reducer = combineReducers({
  allContries: CountriesReducer,
});

const store = createStore(
  reducer,
);

export default store;
