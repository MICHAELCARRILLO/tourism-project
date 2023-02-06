import React from 'react';
import Navbar from './Components/Navbar';

import {BrowserRouter as Router} from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';


import './App.css';
function App() {
  return (
     <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
      </Routes>
      </Router>
     </>
  );
}

export default App;
