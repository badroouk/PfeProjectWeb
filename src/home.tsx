import React from 'react';
import { useNavigate} from 'react-router-dom';

import './App.js'
import '../src/home.css'


function Home  ()  {

    const navigate = useNavigate();

    return(
        <>
        <div className="home">
           
            <button type="button" className="btn admin" >Administration</button>
            <button type="button" className="btn monitoring" onClick={() => {navigate('/monitoring');}}>Monitoring</button>
            <button type="button" className="btn statistics">Statistics</button>
        </div>
        </>
    );

}

export default Home;