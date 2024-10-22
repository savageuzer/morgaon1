import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './fontawesome'; 
// import Mypaintings from './component/Mypaintings'

function App() {
  return (
    <div>
      <Router>
        <Header />
        {/* <Mypaintings /> */}
        {/* <nav>
          <ul className="List-1">
            <li className="List-1"><Link to="/">Home</Link></li>
            <li className="List-1"><Link to="/about">About</Link></li>
            <li className="List-1"><Link to="/address">address</Link></li>
            <li className="List-1"><Link to="contact">Contact</Link></li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="Services" element={<Services/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App