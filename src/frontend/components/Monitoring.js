import React from 'react';
import { BsClock, BsClockHistory } from "react-icons/bs";
import Header from './Header.js';
import {Routes, Route, useNavigate} from 'react-router-dom';
import RealTime from './realTime.js';
import Backuppicker from './Backup/Backuppicker.js';

function Monitoring(){
    const navigate = useNavigate();
    return (
        <>
        <Header/>
        <div className="home">
            <button type="button" className="btn actual">Actual Conditions</button>
            <button type="button" className="btn realtime" onClick={() => {navigate('/realtime');}}>Real-time <BsClock /></button>
            <button type="button" className="btn backup" onClick={() => {navigate('/backup');}}>Back-up <BsClockHistory/> </button>
        </div>
        <Routes>
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/realtime" element={<RealTime />} />
          <Route path="/backup" element={<Backuppicker/>}/>
        </Routes>
        </>
    );
}

export default Monitoring;