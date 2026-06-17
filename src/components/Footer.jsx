import styles from '@/styles/Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <h3 className={styles.brand}>
          Eze Arce<em>.</em>
        </h3>

        <p className={styles.message}>
          Hecho con <strong>mate</strong>, código y un poquito de cariño desde
          Buenos Aires.
        </p>

        <div className={styles.row}>
          <a href="#hero">Inicio</a>
          <a href="#projects">Proyectos</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contacto</a>
          <a
            href="https://github.com/ezearce"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ezequiel-arce-4457371b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className={styles.divider} />

        <p className={styles.copyright}>
          © {year} Ezequiel Arce. Construido con{' '}
          <span className={styles.heart} aria-hidden>
            🧉
          </span>{' '}
          en Argentina.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
