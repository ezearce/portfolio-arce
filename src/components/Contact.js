import styles from "@/styles/Contact.module.css";
import Image from "next/image";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import useInView from "@/hooks/useInView";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [refTitle, isTitleVisible] = useInView();
  const [refDescription, isDescVisible] = useInView();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); 
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_c599kaq",
        "template_6gcaffp",
        formRef.current,
        "-T-9FFiNA-uvjQsi_"
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className={`${styles.contact} sectionBg`}>
      <div className={styles.backgroundWrapper}>
        <Image 
          src="/assets/contact.jpeg" 
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
      
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className={styles.form}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Tu nombre"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Tu email"
          required
        />

        <textarea
          name="message"
          placeholder="Tu mensaje"
          rows={5}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar mensaje"}
        </button>

        {status === "success" && (
          <p className={styles.success}>Mensaje enviado correctamente.</p>
        )}

        {status === "error" && (
          <p className={styles.error}>Error al enviar el mensaje.</p>
        )}

      </form>

      <div className={styles.contactContainer}>
        {[
          {
            id: 1,
            icon: <SiLinkedin />,
            content: "linkedin.com/in/ezequielarce",
            link: "https://www.linkedin.com/in/ezequiel-arce-4457371b7/",
          },
          {
            id: 2,
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
