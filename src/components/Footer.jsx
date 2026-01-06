import React from 'react';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.names}>
          Hecho por: <a href="https://www.linkedin.com/in/ezequiel-arce-4457371b7/"><span className={styles.name}>Ezequiel Arce</span></a>
        </p>
        <p className={styles.copyRight}>Bahía Blanca - Buenos Aires - Argentina</p>
        <p className={styles.copyRight}>
          &copy; 2025 Ezequiel Arce. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
