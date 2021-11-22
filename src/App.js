import React from 'react';
import './App.css';
import Header from './components/header';
import Countries from './components/home/countreislist';
import Weather from './components/weatherpage/getWeather';

function App() {
  return (
    <div>
      <Header />
      <Countries />
      <Weather />
    </div>
  );
}

export default App;
