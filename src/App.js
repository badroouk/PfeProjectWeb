import './App.css';
import Monitoring from './frontend/components/Monitoring.js';
import {Routes, Route,} from 'react-router-dom';
import Home from './frontend/components/home.js';
import RealTime from './frontend/components/realTime.js';
import Temperature from './frontend/components/RealTimePages/Temperature.js';
import Humidity from './frontend/components/RealTimePages/Humidity.js';
import Luminosity from './frontend/components/RealTimePages/Luminosity.js';
import Precipitation from './frontend/components/RealTimePages/Precipitation.js';
import Ultraviolet from './frontend/components/RealTimePages/Ultraviolet.js';
import Pollution from './frontend/components/RealTimePages/Pollution.js';
import Backuppicker from './frontend/components/Backup/Backuppicker.js';

function App() {
  return (
    <Routes>
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/" element={<Home />} />
          <Route path="/realtime" element={<RealTime />} />
          <Route path="/realtime/temperature" element={<Temperature/>} />
          <Route path="/realtime/humidity" element={<Humidity/>} />
          <Route path="/realtime/luminosity" element={<Luminosity/>} />
          <Route path="/realtime/precipitation" element={<Precipitation/>} />
          <Route path="/realtime/ultraviolet" element={<Ultraviolet/>} />
          <Route path="/realtime/pollution" element={<Pollution/>} />
          <Route path="/backup" element={<Backuppicker/>}/>
        </Routes>
  );
}

export default App;