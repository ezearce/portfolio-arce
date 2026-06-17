import styles from '@/styles/Contact.module.css';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import useInView from '@/hooks/useInView';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [headRef, headVisible] = useInView();
  const [postcardRef, postcardVisible] = useInView({ threshold: 0.15 });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const formRef = useRef();

  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => setStatus(null), 4500);
    return () => clearTimeout(timer);
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        'service_c599kaq',
        'template_6gcaffp',
        formRef.current,
        '-T-9FFiNA-uvjQsi_'
      )
      .then(() => {
        setStatus('success');
        formRef.current.reset();
      })
      .catch(() => setStatus('error'))
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className={styles.contact}>
      <div
        ref={headRef}
        className={`${styles.head} reveal ${headVisible ? 'show' : ''}`}
      >
        <span className={styles.eyebrow}>~ contacto ~</span>
        <h2 className={styles.title}>
          Hablemos de tu <em>próximo proyecto</em>.
        </h2>
        <p className={styles.subtitle}>
          ¿Tenés una propuesta, una idea o una vacante que pueda interesarme?
          Escribime y te respondo en menos de 24hs.
        </p>
      </div>

      <div
        ref={postcardRef}
        className={`${styles.postcard} reveal ${
          postcardVisible ? 'show' : ''
        }`}
      >
        {/* Frente — atardecer (concepto: pausa para conversar al final del día) */}
        <div className={styles.frontSide}>
          <div className={styles.stamp}>
            <span className={styles.stampEmoji}>☀</span>
            <span className={styles.stampLabel}>
              Postal
              <br />
              2026
            </span>
          </div>

          <div className={styles.cityScene}>
            <div>
              <span className={styles.cityLabel}>al final del día</span>
              <h3 className={styles.cityName}>
                Una <em>pausa</em>
                <br />
                para hablar.
              </h3>
            </div>
          </div>

          <div className={styles.postmark}>
            Portfolio
            <br />
            · 2026 ·
          </div>
        </div>

        {/* Dorso — form */}
        <div className={styles.backSide}>
          <div className={styles.recipient}>
            <span className={styles.recipientLabel}>Para:</span>
            <span className={styles.recipientName}>Ezequiel Arce</span>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
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
              placeholder="Contame sobre el proyecto…"
              rows={4}
              required
            />

            <button type="submit" disabled={loading} className={styles.button}>
              {loading ? 'Enviando…' : 'Enviar mensaje'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>

            {status === 'success' && (
              <p className={`${styles.status} ${styles.success}`}>
                Mensaje enviado. Te respondo en breve.
              </p>
            )}
            {status === 'error' && (
              <p className={`${styles.status} ${styles.error}`}>
                No se pudo enviar. Probá de nuevo o escribime directo.
              </p>
            )}
          </form>

          <div className={styles.sender}>
            <span>Respuesta en menos de 24hs</span>
            <em>~ Ezequiel</em>
          </div>
        </div>
      </div>

      {/* Tarjetas de redes */}
      <div className={styles.cards}>
        <a
          href="https://www.linkedin.com/in/ezequiel-arce-4457371b7/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          <span className={styles.cardIcon}>
            <SiLinkedin />
          </span>
          <span className={styles.cardText}>
            <span className={styles.cardTitle}>LinkedIn</span>
            <span className={styles.cardSub}>linkedin.com/in/ezequielarce</span>
          </span>
        </a>
        <a
          href="https://github.com/ezearce"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          <span className={styles.cardIcon}>
            <SiGithub />
          </span>
          <span className={styles.cardText}>
            <span className={styles.cardTitle}>GitHub</span>
            <span className={styles.cardSub}>github.com/ezearce</span>
          </span>
        </a>
      </div>
    </section>
  );
}
