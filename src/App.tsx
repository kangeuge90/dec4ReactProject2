import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './recipe';
import { BrowserRouter as Router, Route, Routes, Navigate, useSearchParams } from 'react-router-dom';
import Header from './Header';
// import GetDetails from './GetDetails';
import Favorites from './Favorites';

function App() {



  return (
    <Router>
    <div className="App">
      <Header />
      
        <Routes>
          <Route path='/' element={<Recipe />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        
    </div>
    
    </Router>
  );
}

export default App;