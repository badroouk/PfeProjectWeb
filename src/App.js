import './App.css';
import Monitoring from './components/Monitoring.js';
import {Routes, Route,} from 'react-router-dom';
import Home from './home.js';

function App() {
  return (
    <Routes>
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/" element={<Home />} />
        </Routes>
  );
}

export default App;