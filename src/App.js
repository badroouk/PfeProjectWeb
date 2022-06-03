import './App.css';
import Nav from '../src/components/Nav.tsx';
import Login from '../src/pages/Login.tsx';
import Home from '../src/home.tsx'
import Register from '../src/pages/Register.tsx';
import Monitoring from './components/Monitoring.js';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import React,{useEffect,useState} from "react"
function App() {
  const [name, setName] = useState('');

  useEffect(() => {
      (
          async () => {
              const response = await fetch('http://localhost:8000/api/user', {
                  headers: {'Content-Type': 'application/json'},
                  credentials: 'include',
              });

              const content = await response.json();

              setName(content.email);
          }
      )();
  });
  return (
    <BrowserRouter>
    <Nav name={name} setName={setName} />
    <div className="App">
      <main className="form-signin">
      <Routes>
        <Route  path="/" element={<Home  />} />
        <Route  path="/register" element={<Register />} />
        <Route  path="/login" element={<Login setName={setName} />} />
        <Route path="/monitoring" element={<Monitoring />} />
      </Routes>
      </main>
    </div>
  </BrowserRouter>
  );
 
}

export default App;