import styles from "@/styles/Skills.module.css";
import Image from "next/image";
import { FaCode, FaDatabase, FaMobileAlt, FaTools } from "react-icons/fa";
import { MdWeb, MdCloud, MdDesktopMac, MdGroupWork } from "react-icons/md";
import useInView from "@/hooks/useInView";

export default function Skills() {
  const skills = [
    {
      id: 1,
      name: "Desarrollo Web Backend",
      description: "+3 años de experiencia en proyectos profesionales, personales, académicos y freelance. Tecnologías principales: PHP (incluye Laravel), Node.js, Java.",
      icon: <FaCode />,
    },
    {
      id: 2,
      name: "Desarrollo Web Frontend",
      description: "+3 años de experiencia en proyectos profesionales, personales y académicos. Tecnologías principales: React.js, Next.js.",
      icon: <MdWeb />,
    },
    {
      id: 3,
      name: "Desarrollo de Apps Móviles",
      description: "+2 años de experiencia en proyectos profesionales, personales y académicos con Kotlin, Flutter y React Native.",
      icon: <FaMobileAlt />,
    },
    {
      id: 4,
      name: "Bases de Datos",
      description: "SQL, PostgreSQL y MySQL en el ámbito profesional y personal.",
      icon: <FaDatabase />,
    },
    {
      id: 5,
      name: "Apps de Escritorio",
      description: "Aplicaciones en Java aplicando OOP, patrones de diseño y buenas prácticas.",
      icon: <MdDesktopMac />,
    },
    {
      id: 6,
      name: "Control de Versiones",
      description: "Git y GitHub para proyectos colaborativos.",
      icon: <FaTools />,
    },
    {
      id: 7,
      name: "Deploy & Hosting",
      description: "Deploy en Hostinger, Vercel y otras plataformas productivas.",
      icon: <MdCloud />,
    },
    {
      id: 8,
      name: "Metodologías Ágiles",
      description: "Scrum aplicado en proyectos con herramientas como Trello y Jira.",
      icon: <MdGroupWork />,
    },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <Image
        src="/assets/skills.jpg"
        alt="Fondo habilidades"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        quality={80}
        className={styles.backgroundImage}
      />
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>Habilidades</h2>
        <div className={styles.skillsContainer}>
          {skills.map((skill) => {
            const [ref, isVisible] = useInView();
            return (
              <div
                key={skill.id}
                ref={ref}
                className={`${styles.card} ${isVisible ? styles.fadeIn : ""}`}
              >
                <div className={styles.icon}>{skill.icon}</div>
                <h3 className={styles.title}>{skill.name}</h3>
                <p className={styles.text}>{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
