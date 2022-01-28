import React from 'react';
import './App.css'

// Components
import HomePage from './pages/HomePage'
import Settings from './pages/Settings';

// React Router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/settings' element={<Settings />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
