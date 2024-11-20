
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Aboutme from '../Components/AboutMe/Aboutme';
import Footer from '../Components/Footer/Footer';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/about" element={<Aboutme />} />
                <Route path="/footer" element={<Footer />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
