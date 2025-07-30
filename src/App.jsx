import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Approach from './components/Approach';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      {/* <Services />
      <Approach />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
