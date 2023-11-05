import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import About from './Components/pages/about/About';
import Home from './Components/pages/home/Home';
import Contact from './Components/pages/contact/Contact';
import Navbar from './Components/Navbar';
import Projects from './Components/pages/projects/Project';
import Services from './Components/pages/services/Services';
import Feeds from './Components/pages/feeds/Feeds';

// import Testimonials from './Components/pages/testimonials/Testimonials'; 

import Login from './Components/pages/login/Login';
import Loc from './Components/pages/loc'
import Createproject from './Components/pages/projects/createproject';
import Createservice from './Components/pages/services/createservice';
// import CreateTestimonial from './Components/pages/testimonials/createTestimonial';

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App(){
 
  const [user, setUser] = useState(null);
  
  return (
      <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login setUser = {setUser}/>}/>
        <Route path="/feeds" element={<Feeds/>}/>
        <Route path="/loca" element={<Loc/>}/>
        <Route path="/projects" element={<Projects/>}/>
      
        <Route path="/createproject" element={<Createproject/>}/>
        <Route path="/createservice" element={<Createservice/>}/>
        {/* <Route path="/createTestimonials" element={<CreateTestimonial/>}/> */}
 
        <Route path="/services" element={<Services/>}/>
        {/* <Route path="/signup" element={<Signup />}/> */}
      </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
