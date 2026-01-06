import styles from "@/styles/Skills.module.css";
import Image from "next/image";
import { FaCode, FaDatabase, FaMobileAlt, FaTools } from "react-icons/fa";
import { MdWeb, MdCloud, MdDesktopMac, MdGroupWork } from "react-icons/md";
import useInView from "@/hooks/useInView";

export default function Skills() {

  const coreSkills = [
    {
      id: 1,
      name: "Backend Web",
      description:
        "Desarrollo de APIs REST y lógica de negocio en entornos productivos. PHP (Laravel), Java (Spring Boot), Node.js.",
      icon: <FaCode />,
    },
    {
      id: 2,
      name: "Frontend Web",
      description:
        "Aplicaciones web modernas, responsive y mantenibles. React.js, Next.js, Vue.js.",
      icon: <MdWeb />,
    },
    {
      id: 3,
      name: "Mobile Apps",
      description:
        "Desarrollo de aplicaciones móviles multiplataforma y nativas. React Native, Flutter, Kotlin.",
      icon: <FaMobileAlt />,
    },
    {
      id: 4,
      name: "Bases de Datos",
      description:
        "Modelado, consultas y optimización en SQL. PostgreSQL, MySQL.",
      icon: <FaDatabase />,
    },
    {
      id: 5,
      name: "Desktop Apps",
      description:
        "Aplicaciones de escritorio en Java aplicando OOP y patrones de diseño.",
      icon: <MdDesktopMac />,
    },
  ];

  const toolsSkills = [
    {
      id: 6,
      name: "Control de Versiones",
      description:
        "Trabajo colaborativo con Git y GitHub en equipos de desarrollo.",
      icon: <FaTools />,
    },
    {
      id: 7,
      name: "Deploy & Hosting",
      description:
        "Deploy de aplicaciones en producción. Vercel, Hostinger, Supabase.",
      icon: <MdCloud />,
    },
    {
      id: 8,
      name: "Metodologías Ágiles",
      description:
        "Trabajo bajo Scrum utilizando herramientas como Jira y Trello.",
      icon: <MdGroupWork />,
    },
  ];

  const renderSkills = (skillsArray) =>
    skillsArray.map((skill) => {
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
    });

  return (
    <section id="skills" className={`${styles.skills} sectionBg`}>
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

        <p className={styles.subtitle}>
          Tecnologías y herramientas que utilizo en proyectos reales.
        </p>

        {/* CORE SKILLS */}
        <h3 className={styles.groupTitle}>Skills Principales</h3>
        <div className={styles.groupWrapper}>
          <div className={styles.skillsContainer}>
            {coreSkills.map((skill) => {
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

        {/* TOOLS & PRACTICES */}
        <h3 className={styles.groupTitle}>Herramientas y Metodologías</h3>
        <div className={styles.skillsContainer}>
          {renderSkills(toolsSkills)}
        </div>
      </div>
    </section>
  );
}
