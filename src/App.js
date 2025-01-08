import React from 'react';
import './App.css';
import Navbar from "./Componants/Navbar";
import About from './Componants/About';
import Home from './Componants/Home';
import Projects from './Componants/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Componants/Login';
import Footer from './Componants/Footer';


function App() {
  return (
    <Router>
    <div className="App">
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
