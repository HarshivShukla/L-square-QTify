import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';

function App() {
  const searchData = (query) => {
    console.log('Search query:', query);
  };

  return (
    <Router>
      <div className="App">
        <Navbar searchData={searchData} />
        <Hero />
        <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" />
        <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" />
      </div>
    </Router>
  );
}

export default App;
