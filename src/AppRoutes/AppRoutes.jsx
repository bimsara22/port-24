
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Aboutme from '../Components/AboutMe/Aboutme';
import Footer from '../Components/Footer/Footer';
import Contactus from '../Components/ContactUs/Contactus';
import Experience from '../Components/Experience/Experience';
import Skills from '../Components/Skills/Skill';
import EducationCard from '../Components/Education/EducationCard';
import Gallery from '../Components/Gallery/Gallery';
import Header from '../Components/Header/Header';
import Projects from '../Components/Projects/Projects';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
            <Route path="/header" element={<Header/>} />
                <Route path="/about" element={<Aboutme />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/contact" element={<Contactus/>} />
                <Route path="/experience" element={<Experience/>} />
                <Route path="/skills" element={<Skills/>} />
                <Route path="/education" element={<EducationCard/>} />
                <Route path="/gallery" element={<Gallery/>} />
             
            </Routes>
        </Router>
    );
};

export default AppRoutes;
