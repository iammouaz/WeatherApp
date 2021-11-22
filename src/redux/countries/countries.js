import initState from './countriesList';

const GET_COUNTRY = 'WeatherApp/countries/GET_COUNTRY';

const CountriesReducer = (state = initState, { type }) => {
  switch (type) {
    case GET_COUNTRY:
      return state;
    default:
      return state;
  }
};

export default CountriesReducer;
