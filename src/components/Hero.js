import { useState, useEffect } from "react";
import styles from "@/styles/Hero.module.css";
import heroData from "../../public/data/hero.json";
import Image from "next/image";

export default function Hero() {
  const professions = heroData.about.profession;
  const text = heroData.about.name;

  // Estado para controlar la aparición del texto
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 500); // Retraso para suavizar la animación
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <Image 
        src="/assets/banner-home.jpg" 
        alt="Mi Foto" 
        fill                     // reemplaza layout="fill"
        style={{
          objectFit: "cover",
          objectPosition: "top",
          filter: "blur(2px)",
          opacity: 0.5,
          pointerEvents: "none"   // <- aquí la clave
        }}
        quality={80}
        priority
      />
      <div className={styles.content}>
        <h2 className={`${styles.subtitle} ${showText ? styles.fadeIn : ""}`}>
          Bienvenido a mi portfolio,
        </h2>
        <h1 className={`${styles.title} ${showText ? styles.fadeIn : ""}`}>
          Soy {text}
        </h1>
        <ul className={styles.professionList}>
          {professions.map((profession, index) => (
            <li
              key={index}
              className={showText ? styles.fadeIn : ""}
              style={{ animationDelay: `${index * 0.4}s` }} // Aparece de a poco
            >
              {profession}
            </li>
          ))}
        </ul>
        <br/>
        <br/>
        <br/>
        <div className={styles.actions}>
          <a href="#projects" className={styles.ctaButton}>Ver mis proyectos</a>
        </div>
        <div className={styles.downloadSection}>
          <a href="/CV_Ezequiel_Arce.pdf" download className={styles.ctaSecondary}>Descargar CV</a>
        </div>
      </div>
    </section>
  );
}
