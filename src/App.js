import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Packages from './components/Packages';
import Subscribe from './components/Subscrib';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Packages />
      <Team />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
