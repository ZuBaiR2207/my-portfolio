import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const myName = "Zubair Md Talha";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar title={myName.slice(0, 6).concat("'s Portfolio")} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
