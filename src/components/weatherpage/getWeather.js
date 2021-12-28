/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import OutlinedCard from './card';

const Weather = (props) => {
  const { data } = props;
  const [state, setState] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get(`https://api.weatherapi.com/v1/current.json?key=3acda049206e4486800163650212411&q=${data}&aqi=yes`)
      .then((res) => {
        const Data = res.data;
        setState({ Data });
        setIsLoading(false);
        const BackStatus = Data.current.condition.text;
      }, 'jsonp');
  }, []);
  const waether = state.Data;

  const GetbackGround = (status) => {
    while (status === 'Sunny') {
      return 'url(icons/sun-back.jpg)';
    }
    while (status === 'Clear') {
      return 'url(icons/sun-back.jpg)';
    }
    while (status === 'Partly cloudy') {
      return 'url(icons/cloud-back.jpg)';
    }
    while (status === 'Mist') {
      return 'url(icons/cloud-back.jpg)';
    }
    while (status === 'Patchy light drizzle') {
      return 'url(icons/rain-back.jpg)';
    }
    while (status === 'Overcast') {
      return 'url(icons/cloud-back.jpg)';
    }
    while (status === 'Light rain') {
      return 'url(icons/rain-back.jpg)';
    }
    while (status === 'Moderate rain') {
      return 'url(icons/rain-back.jpg)';
    }
    while (status === 'Patchy rain possible') {
      return 'url(icons/cloud-back.jpg)';
    }
    while (status === 'Light snow') {
      return 'url(icons/snow-back.jpg)';
    }
    return 'url(icons/sun-back.jpg)';
  };
  return (
    <>
      { !isLoading && (
        <div style={{ backgroundImage: GetbackGround(waether.current.condition.text), height: '100vh', backgroundSize: 'cover' }}>
          <OutlinedCard
            name={data}
            country={waether.location.country}
            region={waether.location.region}
            tz_id={waether.location.tz_id}
            localtime={waether.location.localtime}
            temp_c={waether.current.temp_c}
            temp_f={waether.current.temp_f}
            wind_mph={waether.current.wind_mph}
            wind_kph={waether.current.wind_kph}
            pressure_mb={waether.current.pressure_mb}
            humidity={waether.current.humidity}
            feelslike_c={waether.current.feelslike_c}
            feelslike_f={waether.current.feelslike_f}
            co={waether.current.air_quality.co}
            no2={waether.current.air_quality.no2}
            o3={waether.current.air_quality.o3}
            text={waether.current.condition.text}
            key={waether.description}
          />
        </div>
      )}
    </>
  );
};

Weather.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Weather;
