import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Examinations from './components/Examinations/Examinations';
import InfoCards from './components/InfoCards/InfoCards';
import Stats from './components/Stats/Stats';
import FAQ from './components/FAQ/FAQ';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <Examinations />
        <InfoCards />
        <Stats />
        <FAQ />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
