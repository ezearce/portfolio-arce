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
            <strong> Full Stack Developer</strong>, con experiencia real en 
            el desarrollo de aplicaciones web y móviles en entornos productivos.
          </p>

          <p className={styles.text}>
            Trabajo principalmente en el desarrollo de aplicaciones web y móviles, 
            combinando <strong>frontend moderno</strong> con 
            <strong> backends robustos y APIs REST seguras</strong>, 
            diseñando bases de datos escalables y arquitecturas mantenibles.
          </p>

          <p className={styles.text}>
            Me enfoco en escribir código limpio, aplicar buenas prácticas y construir productos 
            que aporten valor real al usuario y al negocio.
          </p>

          <p className={styles.text}>
            Disfruto trabajar en equipo bajo metodologías ágiles, 
            participar en decisiones técnicas y seguir creciendo 
            como profesional en proyectos desafiantes.
          </p>
      </div>
    </section>
  );
}
