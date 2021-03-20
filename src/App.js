import React from 'react';
import { useEffect, useState } from 'react';
import { gsap, Power3 } from 'gsap';
import './App.scss';

function App() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    console.log('loaded');
  }, [query]);

  useEffect(() => {
    return () => {
      let tl = gsap.timeline();
      tl.to('.upper-content-header', { opacity: 0, y: -100, delay: 0.5 });
      tl.to('.search-bar', { ease: Power3.easeInOut, y: -300, duration: 1 });
    };
  }, [hasSubmitted]);

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
    setHasSubmitted(true);
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
    </div>
  );
}

export default App;
