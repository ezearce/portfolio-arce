import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <nav>
            <Link href="#home">Inicio</Link>
            <Link href="#about">Sobre mí</Link>
            <Link href="#projects">Proyectos</Link>
            <Link href="#contact">Contacto</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
