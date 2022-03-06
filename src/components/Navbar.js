import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../styles/All.css'
import '../styles/Navbar.css';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav className="nav">
          <h1>Shawn A. Analla</h1>
            <ul className="nav-links">
              <li><a href="/shnala-portfolio-redeploy-bcs/about" onClick={() => handlePageChange('About')} className={currentPage === 'About' || '/' ? 'nav-link active' : 'nav-link'}>About Me</a></li>
              <li><a href="/shnala-portfolio-redeploy-bcs/work" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a></li>
              <li><a href="/shnala-portfolio-redeploy-bcs/contactus" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a></li>
              <li><a href="/shnala-portfolio-redeploy-bcs/resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

