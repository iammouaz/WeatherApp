import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CountriesReducer from './countries/countries';
import APIReducder from './api/countriesData';

const reducer = combineReducers({
  allContries: CountriesReducer,
  APIDATA: APIReducder,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
