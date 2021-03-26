import React from 'react';
import { useState } from 'react';
import './CurrentWeather.scss';
import './Forecast.scss';

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
  const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
  };
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
      <div className="current-weather-conditions">
        <div className="current-weather-conditions-temperature">
          <h1>
            {units
              ? data?.current?.temp_f + '\xB0F'
              : data?.current?.temp_c + '\xB0C'}
          </h1>
        </div>
        <div className="current-weather-conditions-icon">
          <img src={data?.current?.condition?.icon} alt="None" />
          <h2>{data?.current?.condition?.text}</h2>
        </div>
        <div className="current-weather-conditions-measure">
          <h3>
            Wind:{' '}
            {units
              ? data?.current?.wind_mph + ' mph'
              : data?.current?.wind_kph + ' kph'}
          </h3>
          <h3>Humidity: {data?.current?.humidity}%</h3>
          <h3>
            Feels Like:{' '}
            {units
              ? data?.current?.feelslike_f + '\xB0F'
              : data?.current?.feelslike_c + '\xB0C'}
          </h3>
        </div>
        <div className="current-weather-conditions-measure">
          <h3>
            Visibility:{' '}
            {units
              ? data?.current?.vis_miles + ' mi'
              : data?.current?.vis_km + ' km'}
          </h3>
          <h3>
            Pressure:{' '}
            {units
              ? data?.current?.pressure_in + ' in'
              : (data?.current?.pressure_mb * 0.1).toFixed(1) + ' kPa'}
          </h3>
          <h3>Air Quality: {data?.current?.air_quality['us-epa-index']}</h3>
        </div>
      </div>
      <div className="forecast-weather">
        {data?.forecast?.forecastday.map((forecast) => {
          const forecastdate = new Date(forecast?.date);
          const forecastdayNames = [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
          ];
          return (
            <div className="forecast-wrapper">
              <h1>{forecastdayNames[forecastdate.getDay()]}</h1>
              <img src={forecast?.day?.condition?.icon} alt="None" />
              <div className="forecast-high-low">
                {units
                  ? forecast?.day?.maxtemp_f + '\xB0F'
                  : forecast?.day?.maxtemp_c + '\xB0C'}{' '}
                |{' '}
                {units
                  ? forecast?.day?.mintemp_f + '\xB0F'
                  : forecast?.day?.mintemp_c + '\xB0C'}
              </div>
              <h2>
                {convertTime12to24(forecast?.astro?.sunrise)}{' '}
                <i class="fas fa-sun"></i>
              </h2>
              <h2>
                {convertTime12to24(forecast?.astro?.sunset)}{' '}
                <i class="fas fa-moon"></i>
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CurrentWeather;