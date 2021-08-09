import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = props => {
  return (
    <div className="card">
      <h3>Weather</h3>
      <p>Monday, July 19</p>
      <img src="https://forecast.weather.gov/newimages/large/skc.png" alt="weather icon" />
      <p>Temperature: 75 F</p>
      <p>Feels Like: 80 F</p>
      <p>Humidity: 37%</p>
      <p>Condition: Partly Sunny</p>
      <p>Last Update: July 20 5:53 PM</p>
      <a href="#">See 5-day Forecast</a>
    </div>
  )
}

export default CurrentWeather;