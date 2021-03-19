import React from 'react';
import './Dashboard.css';

function Dashboard({
  date,
  condition,
  maxTemp,
  minTemp,
  averageTemp,
  precip,
  wind,
}) {
  return (
    <div className="dashboard-component-wrapper">
      <div className="dashboard-component-upper">
        <h1>{date}</h1>
      </div>
      <div className="dashboard-component-middle">
        <img src={condition} alt="NONE"></img>
        <h3>Today: {averageTemp}&deg;C</h3>
      </div>
      <div className="dashboard-component-lower">
        <p>High: {maxTemp}&deg;C</p>
        <p>Low: {minTemp}&deg;C</p>
        <p>Precip: {precip} mm</p>
        <p>Wind: {wind} kph</p>
      </div>
    </div>
  );
}

export default Dashboard;
