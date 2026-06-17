import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Hero.module.css';

const PHOTOS = [
  {
    src: '/assets/ezequiel.JPG',
    alt: 'Ezequiel Arce',
    caption: '~ yo',
    rotate: -7,
    pos: { top: '0', left: '0', zIndex: 3 },
  },
  {
    src: '/images/work.jpeg',
    alt: 'work',
    caption: 'work',
    rotate: 5,
    pos: { top: '55px', right: '0', zIndex: 2 },
  },
  {
    src: '/images/river.jpeg',
    alt: 'hobbie',
    caption: 'hobbie',
    rotate: -3,
    pos: { bottom: '0', left: '70px', zIndex: 1 },
  },
];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgShape} aria-hidden />
      <div className={styles.bgShape2} aria-hidden />

      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>portfolio · 2026</span>

          <h1 className={styles.title}>
            Ezequiel Arce<span className={styles.accent}>.</span>
            <br />
            Ingeniería de
            <br />
            <span className={styles.accent}>software.</span>
          </h1>

          <div className={styles.subtitle}>
            <span>Ingeniero en Sistemas · Full-Stack Developer</span>
          </div>

          <p className={styles.description}>
            Ingeniero en Sistemas con más de <strong>5 años de experiencia</strong>{' '}
            desarrollando aplicaciones web y móviles para entornos productivos.
            Combino frontend moderno, backend robusto y bases de datos pensadas
            para escalar — desde el modelado hasta el deploy.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primary}>
              Ver proyectos
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className={styles.secondary}>
              Conversemos
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
          <div className={styles.photoStack}>
            {PHOTOS.map((photo, i) => (
              <motion.div
                key={photo.src}
                className={styles.polaroid}
                style={photo.pos}
                initial={{ rotate: photo.rotate, opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
                drag
                dragConstraints={{ left: -60, right: 60, top: -40, bottom: 40 }}
                dragElastic={0.35}
                dragTransition={{ bounceStiffness: 320, bounceDamping: 22 }}
              >
                <div className={styles.polaroidPhoto}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="240px"
                    quality={88}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <span className={styles.caption}>{photo.caption}</span>
              </motion.div>
            ))}
          </div>
          <span className={styles.sceneHint}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l3-3 3 3M9 8h6M9 16l3 3 3-3M9 19h6" />
            </svg>
            arrastrá las fotos
          </span>
        </div>
      </div>
    </section>
  );
}
