import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import Navbar from './components/Navbar';
import Calculator from './pages/Calculator';
import BioinformaticsPredictor from './pages/BioinformaticsPredictor';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/projects" element={<BioinformaticsPredictor />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;