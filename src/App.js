import React, { useState } from "react";
// import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link, renderMatches } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import './styles/All.css'

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>

      <Router basename={"/shnala-portfolio-redeploy-bcs"}>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <Banner />
        <Routes>
          <Route index element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      </Router>

    </main>
  );
}

export default App;

// render(
//   <Router>
//     <Routes>
//       <Route index element={<About />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/work" element={<Portfolio />} />
//     </Routes>
//   </Router>
// )