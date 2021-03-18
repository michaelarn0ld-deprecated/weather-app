import React, { useState, useEffect } from 'react';

function App() {
  const [city, setCity] = useState('None');
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('London');

  useEffect(() => {
    getWeather();
  }, [query]);

  const getWeather = async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=<YOUR KEY HERE>&q=${query}`
    );
    const data = await response.json();
    setCity(data.location.name);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
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
    </div>
  );
}

export default App;
