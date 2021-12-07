import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './recipe';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
// import GetDetails from './GetDetails';
import Favorites from './Favorites';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      
        <Routes>
          {/* <Route path="/more-details" element={<GetDetails />} /> */}
          <Route path="/favorites" element={<Favorites />} />
          {/* <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
        
    </div>
    
    </Router>
  );
}

export default App;