import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './Components/pages/about/About';
import Home from './Components/pages/home/Home';
import Contact from './Components/pages/contact/Contact';
import Navbar from './Components/Navbar';
import Projects from './Components/pages/projects/Project';
import Services from './Components/pages/services/Services';
import Feeds from "./Components/pages/feeds/Feeds"
// import Signup from './Components/Signup';
// import Login from './Components/pages/login';
import Login from './Components/pages/login/Login';
import Loc from './Components/pages/loc'

import {BrowserRouter, Routes, Route} from "react-router-dom";
function App(){
  

  
  return (
      <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/feeds" element={<Feeds/>}/>
        <Route path="/loca" element={<Loc/>}/>
        <Route path="/projects" element={<Projects/>}/>
      
 
        <Route path="/services" element={<Services/>}/>
        {/* <Route path="/signup" element={<Signup />}/> */}
      </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
