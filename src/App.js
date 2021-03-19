import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Seattle');
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    getWeather();
  }, [query]);

  const getWeather = async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=<API KEY GOES HERE>&q=${query}&days=3&aqi=yes&alerts=no`
    );
    const data = await response.json();
    setCity(data.location.name);
    setForecast(data.forecast.forecastday);
    console.log(forecast);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div>
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h1>{city}</h1>
      <div className="dashboard">
        {forecast.map((day) => (
          <Dashboard
            key={day.date_epoch}
            date={day.date}
            condition={day.day.condition.icon}
            averageTemp={day.day.avgtemp_c}
            maxTemp={day.day.maxtemp_c}
            minTemp={day.day.mintemp_c}
            wind={day.day.maxwind_kph}
            precip={day.day.totalprecip_mm}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
