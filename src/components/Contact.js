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
          Mandame una <em>postal</em>.
        </h2>
        <p className={styles.subtitle}>
          ¿Tenés un proyecto? ¿Una propuesta? ¿Querés cebar un mate virtual?
          Escribime y te respondo en menos de 24hs.
        </p>
      </div>

      <div
        ref={postcardRef}
        className={`${styles.postcard} reveal ${
          postcardVisible ? 'show' : ''
        }`}
      >
        {/* Frente — vista de Buenos Aires */}
        <div className={styles.frontSide}>
          <div className={styles.stamp}>
            <span className={styles.stampEmoji}>🧉</span>
            <span className={styles.stampLabel}>
              Correo
              <br />
              Argentino
            </span>
          </div>

          <div className={styles.cityScene}>
            <div>
              <span className={styles.cityLabel}>desde</span>
              <h3 className={styles.cityName}>
                Buenos <em>Aires</em>
              </h3>
            </div>
          </div>

          {/* Skyline simple */}
          <div className={styles.skyline} aria-hidden>
            <svg viewBox="0 0 300 60" fill="currentColor">
              <rect x="0" y="40" width="20" height="20" />
              <rect x="22" y="30" width="16" height="30" />
              <rect x="40" y="35" width="22" height="25" />
              <rect x="64" y="20" width="14" height="40" />
              <rect x="80" y="28" width="20" height="32" />
              <rect x="102" y="38" width="14" height="22" />
              <rect x="118" y="15" width="18" height="45" />
              <polygon points="127,10 132,15 122,15" />
              <rect x="138" y="32" width="22" height="28" />
              <rect x="162" y="25" width="16" height="35" />
              <rect x="180" y="40" width="18" height="20" />
              <rect x="200" y="28" width="22" height="32" />
              <rect x="224" y="22" width="14" height="38" />
              <rect x="240" y="35" width="20" height="25" />
              <rect x="262" y="30" width="18" height="30" />
              <rect x="282" y="38" width="18" height="22" />
              <rect x="0" y="58" width="300" height="2" />
            </svg>
          </div>

          <div className={styles.postmark}>
            Buenos Aires
            <br />
            Argentina
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
              placeholder="Contame en qué andás…"
              rows={4}
              required
            />

            <button type="submit" disabled={loading} className={styles.button}>
              {loading ? 'Enviando…' : 'Enviar postal'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>

            {status === 'success' && (
              <p className={`${styles.status} ${styles.success}`}>
                ¡Postal enviada! Te respondo en breve.
              </p>
            )}
            {status === 'error' && (
              <p className={`${styles.status} ${styles.error}`}>
                No se pudo enviar. Probá de nuevo o escribime directo.
              </p>
            )}
          </form>

          <div className={styles.sender}>
            <span>De: el que esté del otro lado</span>
            <em>~ Eze</em>
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
