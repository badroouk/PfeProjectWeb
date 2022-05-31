import React from 'react';
import { BsClock, BsClockHistory } from "react-icons/bs";

function Monitoring(){
    return (
        <>
        <div className="home">
            <button type="button" className="btn realtime" >Real-time <BsClock /></button>
            <button type="button" className="btn backup">Back-up <BsClockHistory/> </button>
            <button type="button" className="btn actual">Actual Conditions</button>
        </div></>
    );
}

export default Monitoring;