import React from 'react';
import CurrentWeather from './Components/CurrentWeather';
import { useEffect, useState } from 'react';
import { gsap, Power3 } from 'gsap';
import './App.scss';

function App() {
  const API_KEY = 'd7e8027877484293a6a40033211803';
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Los Angeles');
  const [counter, setCounter] = useState(0);
  const [i, setI] = useState(0);

  useEffect(() => {
    getRecipe();
  }, [query]);

  useEffect(() => {
    return () => {
      let weatheranimate = gsap.timeline();
      weatheranimate.to('.current-weather', {
        ease: Power3.easeInOut,
        opacity: 0,
        duration: 0.5,
      });
      weatheranimate.to('.current-weather', {
        ease: Power3.easeInOut,
        opacity: 1,
        duration: 0.5,
        delay: 0.8,
      });
    };
  }, [counter]);

  useEffect(() => {
    return () => {
      let tl = gsap.timeline();
      tl.to('.upper-content-header', { opacity: 0, y: -100, delay: 0.5 });
      tl.to('.search-bar', { ease: Power3.easeInOut, y: '-45vh', duration: 1 });
      tl.to('.current-weather', {
        ease: Power3.easeInOut,
        opacity: 1,
        duration: 0.5,
      });
    };
  }, [hasSubmitted]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=3&aqi=yes&alerts=no`
    );
    const data = await response.json();
    setWeather(data);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setSearch('');
    setHasSubmitted(true);
    setI(i + 1);
    if (i > 0) setCounter(counter + 1);
    setTimeout(() => setQuery(search), 290);
  };

  return (
    <div className="App">
      <div className="upper-content">
        <h1 className="upper-content-header">Weather App</h1>
      </div>
      <form className="search-bar" onSubmit={getSearch}>
        <input
          type="text"
          name=""
          value={search}
          onChange={updateSearch}
          className="search-bar-input"
          placeholder="Enter a city..."
        />
        <button className="search-bar-submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      {hasSubmitted && <CurrentWeather data={weather} />}
    </div>
  );
}

export default App;
