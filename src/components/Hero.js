import dynamic from 'next/dynamic';
import styles from '@/styles/Hero.module.css';

const MateScene = dynamic(() => import('./MateScene'), {
  ssr: false,
  loading: () => <div className={styles.sceneFallback}>Preparando el mate…</div>,
});

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgShape} aria-hidden />
      <div className={styles.bgShape2} aria-hidden />

      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>Bienvenidos al mate</span>

          <h1 className={styles.title}>
            Eze Arce<span className={styles.accent}>.</span>
            <br />
            Construyo cosas
            <br />
            <span className={styles.accent}>en internet.</span>
          </h1>

          <div className={styles.subtitle}>
            <span className={styles.pill}>
              <span className={styles.dot} />
              Disponible para proyectos
            </span>
            <span>Ing. en Sistemas · Full-Stack Dev · Buenos Aires</span>
          </div>

          <p className={styles.description}>
            Diseño y construyo <strong>aplicaciones web y móviles</strong> que
            la gente realmente usa. Me gusta el código prolijo, los proyectos
            con propósito y los mates largos mientras pienso una arquitectura.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primary}>
              Ver proyectos
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className={styles.secondary}>
              Cebame un mate
            </a>
          </div>

          <a href="/CV_Ezequiel_Arce.pdf" download className={styles.cv}>
            Descargar CV
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
        </div>

        <div className={styles.right}>
          <MateScene />
          <span className={styles.sceneHint}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12c0-4 3-7 9-7s9 3 9 7-3 7-9 7-9-3-9-7z" />
              <path d="M9 12h6" />
            </svg>
            arrastrá para mover la escena
          </span>
        </div>
      </div>
    </section>
  );
}
