import styles from "@/styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <Image
        src="/assets/home.jpg"
        alt="Background"
        fill
        priority
        className={styles.bg}
      />

      <div className={styles.content}>
        <Image
          src="/assets/ezequiel.JPG"
          alt="Ezequiel Arce"
          width={160}
          height={160}
          className={styles.avatar}
        />

        <h1 className={styles.title}>
          Hola, soy <span>Ezequiel Arce</span>
        </h1>

        <h2 className={styles.subtitle}>
          <span className={styles.line}>Ingeniero en Sistemas de Información</span>
          <span className={styles.line}>Full Stack Developer</span>
        </h2>

        {/* acciones principales */}
        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>
            Ver proyectos
          </a>
          <a href="#contact" className={styles.secondary}>
            Contactarme
          </a>
        </div>

        {/* acción secundaria */}
        <div className={styles.cv}>
          <a
            href="/CV_Ezequiel_Arce.pdf"
            download
            className={styles.cvButton}
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
