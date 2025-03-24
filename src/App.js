import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Footer from './components/Footer';
import About from './pages/About.js';
import Skills from './pages/Skills.js';
import ProjectDetails from './pages/ProjectDetails.js';
import Projects from './pages/Projects.js';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/:title" element={<ProjectDetails/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
