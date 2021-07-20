import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div>
      <input placeholder="Enter your ZIP code"></input>
      <button>Search</button>
    </div>
  )
}

export default SearchBar;