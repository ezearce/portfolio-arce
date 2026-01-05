import Head from 'next/head';
import Navbar from '@/components/Navbar.js';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <>
      <CustomCursor />

      <Head>
        <title>Ezequiel Arce | Portfolio</title>
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>

  );
}