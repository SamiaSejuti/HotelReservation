import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/home/Home';
import AboutUs from './pages/AboutUs';
import PageNotFound from './pages/PageNotFound';
import BookingPage from './pages/BookingPage';
import ServicesPage from './pages/ServicesPage';
import RoomPage from './pages/RoomPage';
import ContactPage from './pages/ContactPage';
import TestimonialPage from './pages/TestimonialPage';
import TeamPage from './pages/TeamPage';

import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css"


export default function App() {
  return (
    <>
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<PageNotFound/>}/>
          <Route path="/booking" element={<BookingPage/>}/>
          <Route path="/team" element={<TeamPage/>}/>
          <Route path="/testimonial" element={<TestimonialPage/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/rooms" element={<RoomPage/>}/>
          <Route path="/services" element={<ServicesPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
    </>
  )
}
