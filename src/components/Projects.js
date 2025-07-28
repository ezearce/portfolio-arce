import projectsData from '../../public/data/projects.json';
import styles from "@/styles/Projects.module.css";
import Image from "next/image";
import Link from "next/link";
import useInView from "@/hooks/useInView"; 

export default function Projects() {
  const [refTitle, isTitleVisible] = useInView();

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.backgroundImage}></div>

      <div
        ref={refTitle}
        className={`${styles.headerWrapper} ${isTitleVisible ? styles.fadeIn : ""}`}
      >
        <hr className={styles.sectionDivider} />
        <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
      </div>

      <div className={styles.projectsContainer}>
        {projectsData.map((project) => {
          const [ref, isVisible] = useInView();

          return (
            <div
              key={project.id}
              ref={ref}
              className={`${styles.card} ${isVisible ? styles.fadeIn : ""}`}
            >
              <div className={styles.cardContent}>
                <div className={styles.textContainer}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.text}>
                    {project.description}
                  </p>
                </div>

                <div className={styles.imageContainer}>
                  {project.link && project.link !== "#" ? (
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        width={200} 
                        height={150} 
                        className={styles.projectImage} 
                      />
                    </Link>
                  ) : (
                    <div className={styles.projectImageWrapper}>
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        width={200} 
                        height={150} 
                        className={styles.projectImage} 
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
