import React from 'react';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import './CurrentConditions.css';

const CurrentConditions = props => {
  return (
    <div className="conditions">
      <CurrentWeather />
      <div className="card"></div>
      <div className="card"></div>
    </div>
  )
}

export default CurrentConditions;