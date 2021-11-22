const GET_DATA = 'WeatherApp/api/GET_DATA';
const API = 'https://goweather.herokuapp.com/weather/';

export const initState = [];

export const countries = ['Syria', 'Bangladesh', 'afghanistan', 'india', 'indonesia', 'iraq', 'jordan', 'lebanon', 'philippines', 'saudi-arabia'];

const getCountryByName = async (id) => {
  const response = await fetch(`${API}${id}`);
  return response.json();
};

export const GetData = () => async (dispatch) => {
  const data = await Promise.all(countries.map(getCountryByName));
  dispatch({
    type: GET_DATA,
    payload: data,
  });
};

const APIReducder = (state = initState, action) => {
  switch (action.type) {
    case GET_DATA:
      return [
        action.payload,
      ];
    default:
      return state;
  }
};

export default APIReducder;
