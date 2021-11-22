const GET_COUNTRY = 'WeatherApp/countries/GET_COUNTRY';

const initState = {
  countries: [
    {
      name: 'Syria',
      icon: 'icons/syria.png',
      continent: 'Asia',
    },
  ],
};

const CountriesReducer = (state = initState, { type }) => {
  switch (type) {
    case GET_COUNTRY:
      return state;
    default:
      return state;
  }
};

export default CountriesReducer;
