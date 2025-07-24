import styles from "@/styles/Contact.module.css";
import Image from "next/image";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import useInView from "@/hooks/useInView";

export default function Contact() {
  const [refTitle, isTitleVisible] = useInView();
  const [refDescription, isDescVisible] = useInView();

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.backgroundWrapper}>
        <Image 
          src="/assets/IMG_9222.jpeg" 
          alt="Mi Foto" 
          fill 
          quality={80}
          className={styles.backgroundImage}
        />
      </div>

      <h2
        ref={refTitle}
        className={`${styles.title} ${isTitleVisible ? styles.fadeIn : ""}`}
      >
        Contacto
      </h2>
      
      <p
        ref={refDescription}
        className={`${styles.description} ${isDescVisible ? styles.fadeIn : ""}`}
      >
        Si querés ponerte en contacto conmigo, podés hacerlo a través de mis redes o enviarme un correo.
      </p>
      
      <div className={styles.contactContainer}>
        {[ 
          {
            id: 1,
            icon: <SiGmail />,
            content: "ezequielagustinarce1@gmail.com",
            link: "mailto:ezequielagustinarce1@gmail.com", 
          },
          {
            id: 2,
            icon: <SiLinkedin />,
            content: "linkedin.com/in/ezequielarce",
            link: "https://www.linkedin.com/in/ezequiel-arce-4457371b7/",
          },
          {
            id: 3,
            icon: <SiGithub />,
            content: "github.com/ezearce",
            link: "https://github.com/ezearce",
          },
        ].map(({ id, icon, content, link }) => {
          const [ref, isVisible] = useInView();
          return (
            <div
              key={id}
              ref={ref}
              className={`${styles.card} ${isVisible ? styles.fadeIn : ""}`}
            >
              <h3 className={styles.subtitle}>{icon}</h3>
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {content}
                </a>
              ) : (
                <p className={styles.link}>{content}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
