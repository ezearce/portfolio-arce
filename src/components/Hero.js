import styles from "@/styles/Hero.module.css";
import heroData from "../../public/data/hero.json";
import Image from "next/image";

export default function Hero() {
  const professions = heroData.about.profession;
  const text = heroData.about.name;

  return (
    <section id="hero" className={styles.hero}>
      <Image 
        src="/assets/banner-home.jpg" 
        alt="Mi Foto" 
        fill                     
        style={{
          objectFit: "cover",
          objectPosition: "top",
          filter: "blur(2px)",
          opacity: 0.5,
          pointerEvents: "none",
          position: "absolute",
        }}
        quality={80}
        priority
      />
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.profileImageWrapper}>
            <Image
              src="/assets/ezequiel.JPG"
              alt="Foto de perfil"
              width={180}
              height={180}
              className={styles.profileImage}
            />
          </div>
        </div>

        <div className={styles.right}>
          <h2 className={styles.subtitle}>
            Bienvenido a mi portfolio,
          </h2>
          <h1 className={styles.title}>
            Soy {text}
          </h1>
          <ul className={styles.professionList}>
            {professions.map((profession, index) => (
              <li key={index}>{profession}</li>
            ))}
          </ul>
          <br />
          <br />
          <br />
          <div className={styles.actions}>
            <a href="#projects" className={styles.ctaButton}>Ver mis proyectos</a>
          </div>
          <div className={styles.downloadSection}>
            <a href="/CV_Ezequiel_Arce.pdf" download className={styles.ctaSecondary}>Descargar CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}
