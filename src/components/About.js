import styles from "@/styles/About.module.css";
import useInView from "@/hooks/useInView";

export default function About() {
  const [ref, isVisible] = useInView();

  return (
    <section id="about" className={`${styles.about} sectionBg`}>
      <div
        ref={ref}
        className={`${styles.container} ${
          isVisible ? styles.show : ""
        }`}
      >
        <h2 className={styles.title}>Sobre mí</h2>

        <p className={styles.text}>
          Soy <strong>Ingeniero en Sistemas de Información</strong> y
          desarrollador <strong>Full Stack</strong>, con experiencia en el
          desarrollo de aplicaciones web y móviles.
        </p>

        <p className={styles.text}>
          Me especializo en crear soluciones escalables, mantenibles y
          centradas en el usuario, aplicando buenas prácticas y tecnologías modernas.
        </p>

        <p className={styles.text}>
          Disfruto trabajar en equipo, resolver problemas reales y aprender
          constantemente para seguir creciendo profesionalmente.
        </p>
      </div>
    </section>
  );
}
