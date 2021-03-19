import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="upper-content">
        <h1>Weather App</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          name=""
          id=""
          className="search-bar-input"
          placeholder="Enter a city..."
        />
        <button className="search-bar-submit">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
