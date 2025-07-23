'use client';
import '../app/globals.css';        // para navbar y smooth-scroll
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
