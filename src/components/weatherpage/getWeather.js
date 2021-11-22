import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetData } from '../../redux/api/countriesData';

const Weather = () => {
  const dispatch = useDispatch();
  const CountryState = useSelector((state) => state.APIDATA);
  useEffect(() => {
    if (CountryState.length === 0) {
      dispatch(GetData());
    }
  }, []);
  console.log(CountryState);
  return (
    <div>
      test
    </div>
  );
};

export default Weather;
