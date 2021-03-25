import React from 'react';
import { useState } from 'react';
import './CurrentWeather.scss';

function CurrentWeather({ data }) {
  const [units, setUnits] = useState(false);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const date = new Date(data?.location?.localtime);

  return (
    <div className="current-weather">
      <div className="current-weather-header">
        <div className="current-weather-header-location">
          <h2>
            {data?.location?.name}, {data?.location?.region},{' '}
            {data?.location?.country}
          </h2>
          <h2>
            {monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()}{' '}
            | {dayNames[date.getDay()]}{' '}
            {data?.location?.localtime.slice(
              data?.location?.localtime.length - 5
            )}
          </h2>
        </div>
        <div className="current-weather-header-units">
          <h1
            onClick={() => setUnits(false)}
            className={
              units
                ? 'current-weather-header-degrees'
                : 'current-weather-header-degrees active'
            }
          >
            &deg;C
          </h1>
          <h2 className="unit-seperator">|</h2>
          <h1
            onClick={() => setUnits(true)}
            className={
              units
                ? 'current-weather-header-degrees active'
                : 'current-weather-header-degrees'
            }
          >
            &deg;F
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
