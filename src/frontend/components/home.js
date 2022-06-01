import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Monitoring from './Monitoring.js';
import '../../App.js'
import './home.css';
import Header from './Header.js';


function Home(){

    const navigate = useNavigate();

    return(
        <>
        <Header />
        <div className="home">
            <button type="button" className="btn admin" >Administration</button>
            <button type="button" className="btn monitoring" onClick={() => {navigate('/monitoring');}}>Monitoring</button>
            <button type="button" className="btn statistics">Statistics</button>
        </div>
        <Routes>
          <Route path="/monitoring" element={<Monitoring />} />
        </Routes>
        </>
    );

}

export default Home;