import React from 'react'
import Header from './Header.js';
import './realTime.css';
import Temperature from './RealTimePages/Temperature.js';
import Humidity from './RealTimePages/Humidity.js';
import Luminosity from './RealTimePages/Luminosity.js';
import Precipitation from './RealTimePages/Precipitation.js';
import Ultraviolet from './RealTimePages/Ultraviolet.js';
import Pollution from './RealTimePages/Pollution.js';
import {Routes, Route, useNavigate} from 'react-router-dom';

function RealTime() {
    const navigate = useNavigate();
  return (
    <>
        <Header />
        <div className="buttonMenu">
            <button type="button" className="btn temp" onClick={() => {navigate('/realtime/temperature');}}>Temperature</button>
            <button type="button" className="btn humid" onClick={() => {navigate('/realtime/humidity');}}>Humidity </button>
            <button type="button" className="btn lumin" onClick={() => {navigate('/realtime/luminosity');}}>Luminosity</button>
            <button type="button" className="btn precip" onClick={() => {navigate('/realtime/precipitation');}}>Precipitation</button>
            <button type="button" className="btn ultra" onClick={() => {navigate('/realtime/ultraviolet');}}>Ultraviolet</button>
            <button type="button" className="btn poll" onClick={() => {navigate('/realtime/pollution');}}>Pollution</button>
        </div>
        <Routes>
            <Route path="/realtime/temperature" element={<Temperature/>} />
            <Route path="/realtime/humidity" element={<Humidity/>} />
            <Route path="/realtime/luminosity" element={<Luminosity/>} />
            <Route path="/realtime/precipitation" element={<Precipitation/>} />
            <Route path="/realtime/ultraviolet" element={<Ultraviolet/>} />
            <Route path="/realtime/pollution" element={<Pollution/>} />
        </Routes>
    </>
  );
}

export default RealTime;