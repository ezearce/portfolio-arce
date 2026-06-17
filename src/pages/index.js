import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ezequiel Arce — Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio de Ezequiel Arce. Ingeniero en Sistemas y Full-Stack Developer en Buenos Aires."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SmoothScroll />
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
