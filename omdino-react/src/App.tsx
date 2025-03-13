import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './resources/dest/css/main.css';
import { HomePage } from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer';
import { MainMenu } from './components/MainMenu';
import { Header } from './components/Header';
import { WomenPage } from './pages/WomenPage';
import { MenPage } from './pages/MenPage';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ConactUs';
import { DetailPage } from './pages/DetailPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <MainMenu />      
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path="/women-page" element={<WomenPage />} />
          <Route path="/men-page" element={<MenPage />} />
          <Route path="/detail-page" element={<DetailPage />} />
        </Routes>
      <DetailPage />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
