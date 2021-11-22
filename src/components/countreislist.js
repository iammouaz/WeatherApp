import React from 'react';
import { useSelector } from 'react-redux';
import Country from './singleCountry';

const Countries = () => {
  const CountriesState = useSelector((state) => state.allContries.countries);
  return (
    <div>
      {CountriesState.map((country) => (
        <Country
          name={country.name}
          key={country.name}
          img={country.img}
          continent={country.continent}
        />
      ))}
    </div>

  );
};

export default Countries;
