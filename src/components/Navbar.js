
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><a href="/Nikos_Verlenden_Resume (1).pdf" download style={{ color: '#f0ddd5', textDecoration: 'none' }}>Resume</a></li>
        <li><a href="mailto:nverlenden@gmail.com">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
