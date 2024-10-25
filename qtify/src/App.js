import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'; // Import the Hero component

function App() {
  const searchData = (query) => {
    console.log('Search query:', query);
  };

  return (
    <Router>
      <div className="App">
        <Navbar searchData={searchData} />
        <Hero /> {/* Include the Hero component below the Navbar */}
        {/* Other components or content can go here */}
      </div>
    </Router>
  );
}

export default App;
