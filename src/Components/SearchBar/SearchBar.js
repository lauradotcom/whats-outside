import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

const API_KEY = process.env.REACT_APP_API_KEY;

const SearchBar = props => {
  
  const [zipCode, setZipCode] = useState('');
  let city, weather, temp, humidity, feelsLike;

  // query the Open Weather Map API with the entered ZIP code on submit
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${API_KEY}`).then((resp) => {
      props.onSubmit(resp.data);
      setZipCode('');
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={zipCode}
          onChange={(event) => setZipCode(event.target.value)}
          type="text" 
          placeholder="Enter your ZIP code"></input>
        <button type="submit">Search</button>
      </div>
    </form>
  )
}

export default SearchBar;