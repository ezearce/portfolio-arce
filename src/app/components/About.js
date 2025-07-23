'use client';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>Sobre mí</h2>
      <div className={styles.content}>
        <img src="/images/banner.jpg" alt="Mi foto" className={styles.avatar} />
        <p className={styles.subtitle}>Soy Ezequiel Arce, Ing. en Sistemas de la UNS…</p>
      </div>
    </section>
  );
}
