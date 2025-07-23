'use client';
import styles from '../styles/Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay} />
      <div
        className={styles.background}
        style={{ backgroundImage: `url('/images/banner.jpg')` }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>¡Hola, soy Ezequiel!</h1>
        <p className={styles.subtitle}>
          Recién graduado en Ingeniería en Sistemas de Información…
        </p>
        <Link href="#projects" className={styles.btn}>
          Ver proyectos
        </Link>
      </div>
    </section>
  );
}
