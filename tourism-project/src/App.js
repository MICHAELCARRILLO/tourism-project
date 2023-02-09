import React from 'react';
import Navbar from './Components/Navbar';

import {BrowserRouter as Router} from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';

function App() {
  return (
     <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Router>
     </>
  );
}

export default App;
