import styles from "@/styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>

        {/* IZQUIERDA - Avatar */}
        <div className={styles.left}>
          <div className={styles.profileImageWrapper}>
            <Image
              src="/assets/ezequiel.JPG"
              alt="Ezequiel Arce - Full Stack Developer"
              width={240}
              height={240}
              priority
              quality={95}
              className={`${styles.avatar} ${styles.fade}`}
            />
          </div>
        </div>

        {/* DERECHA - Contenido */}
        <div className={styles.right}>
          <h1 className={`${styles.title} ${styles.fadeDelay1}`}>
            Hola, soy <span>Ezequiel Arce</span>
          </h1>

          <h2 className={`${styles.subtitle} ${styles.fadeDelay2}`}>
            <span className={styles.line}>Ingeniero en Sistemas de Información</span>
            <span className={styles.line}>Full Stack Developer</span>
          </h2>

          <p className={`${styles.description} ${styles.fadeDelay2}`}>
            Especializado en construir aplicaciones web modernas, escalables y de alto rendimiento. Transformo ideas en soluciones digitales elegantes.
          </p>

          <div className={`${styles.actions} ${styles.fadeDelay3}`}>
            <a href="#projects" className={styles.primary}>
              Ver proyectos
            </a>
            <a href="#contact" className={styles.secondary}>
              Contactarme
            </a>
          </div>

          <div className={`${styles.cv} ${styles.fadeDelay4}`}>
            <a
              href="/CV_Ezequiel_Arce.pdf"
              download
              className={styles.cvButton}
            >
              Descargar CV
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
