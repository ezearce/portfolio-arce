import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Se considera activa cuando el 60% está visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="navbar">
      <nav className={menuOpen ? 'nav-open' : ''}>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li>
            <a href="#" className={activeSection === 'hero' ? 'selected' : ''}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" className={activeSection === 'about' ? 'selected' : ''}>
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#projects" className={activeSection === 'projects' ? 'selected' : ''}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#skills" className={activeSection === 'skills' ? 'selected' : ''}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#contact" className={activeSection === 'contact' ? 'selected' : ''}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
