import React from 'react'
import Header from '../Header.js';
import './Backuppicker.css';

const Backuppicker = () => {
  return (
    <>
        <Header/>
        <div className="selectDiv">
        <select class="selectMenu">
            <option value="temperature">Temperature</option>
            <option value="humidity">Humidity</option>
            <option value="luminosity">Luminosity</option>
            <option value="ultraviolet">Ultraviolet</option>
            <option value="precipitation">Precipitation</option>
            <option value="carbonmonoxide">Pollution</option>
        </select>
        </div><button className="select">Search</button>
    </>
  )
}

export default Backuppicker