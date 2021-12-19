/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import WeatherData from './WeatherDetails';

const Weather = (props) => {
  const { data } = props;
  const [state, setState] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get(`https://goweather.herokuapp.com/weather/${data}`)
      .then((res) => {
        const Data = res.data;
        setState({ Data });
        setIsLoading(false);
      });
  }, []);
  const waether = state.Data;
  return (
    <>
      { !isLoading && (
      <WeatherData
        name={data}
        description={waether.description}
        key={waether.description}
        temperature={waether.temperature}
        wind={waether.wind}
      />
      )}
    </>
  );
};

Weather.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Weather;
