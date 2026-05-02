import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppMockup from './components/AppMockup';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <AppMockup />
      </main>
    </div>
  );
}

export default App;
