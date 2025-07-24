import useInView from "@/hooks/useInView"; 
import styles from "@/styles/About.module.css";
import Image from "next/image";
import aboutData from "../../public/data/about.json";

export default function About() {
  const [ref, isVisible] = useInView();
  const description = aboutData.profile.description;
  const hobbies = aboutData.profile.hobbies;
  const experiencia = aboutData.profile.experiencia;

  return (
    <section id="about" className={styles.about} ref={ref}>
      <Image
        src="/assets/IMG_8423.jpg"
        alt="Mi Foto"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        quality={80}
      />
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div className={styles.textBlock}>
            <h3 className={styles.title}>Perfil</h3>
            <p className={`${styles.text} ${isVisible ? styles.fadeIn : ""}`}>
              {description}
            </p>
          </div>
          <div className={styles.textBlock}>
            <h3 className={styles.title}>Hobbies</h3>
            <p className={`${styles.text} ${isVisible ? styles.fadeIn : ""}`}>
              {hobbies}
            </p>
          </div>
          <div className={styles.textBlock}>
            <h3 className={styles.title}>Experiencia Laboral</h3>
            <p className={`${styles.text} ${isVisible ? styles.fadeIn : ""}`}>
              {experiencia}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
