import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

const myName = "Zubair Md Talha";
const listofBooks = ['The Psychology of Money', 'Atomic Habits', 'Deep Work', 'Rich Dad Poor Dad'];

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar title={myName.slice(0, 6).concat("'s Portfolio")} />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
export default App;
