/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import Header from './components/header';
import Countries from './components/home/countreislist';
import Weather from './components/weatherpage/getWeather';

function App() {
  const CountriesState = useSelector((state) => state.allContries.countries);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Countries />} />
        {CountriesState.map((e) => (
          <Route
            key={e.id}
            path={`/${e.name}`}
            element={<Weather data={e.name} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
