import React from 'react';
import { useSelector } from 'react-redux';
import Country from './singleCountry';

const Countries = () => {
  const CountriesState = useSelector((state) => state.allContries.countries);
  return ((
    <div className="flex cards" style={{ backgroundImage: 'url(icons/background.jpg)', backgroundSize: 'cover' }}>
      {CountriesState.map((country) => (
        <Country
          name={country.name}
          key={country.name}
          img={country.icon}
          continent={country.continent}
        />
      ))}
    </div>

  ));
};

export default Countries;
