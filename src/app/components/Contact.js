'use client';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.title}>Contacto</h2>
      <form className={styles.form}>
        <input type="text" name="nombre" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu correo" required />
        <textarea name="mensaje" rows="5" placeholder="Tu mensaje" required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
