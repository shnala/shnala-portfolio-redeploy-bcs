import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../styles/All.css'
import '../styles/Navbar.css';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav className="nav">
          <h1>Shawn A. Analla</h1>
            <ul className="nav-links">
              <li><Link to ="/about" onClick={() => handlePageChange('About')} className={currentPage === 'About' || '/' ? 'nav-link active' : 'nav-link'}>About Me</Link></li>
              <li><Link to ="/work" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link></li>
              <li><Link to ="/contactus" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link></li>
              <li><Link to ="/resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

