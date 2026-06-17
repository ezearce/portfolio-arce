import styles from '@/styles/About.module.css';
import useInView from '@/hooks/useInView';

const STICKERS = [
  { icon: '⚡', title: '5+ años', sub: 'desarrollando software' },
  { icon: '🚀', title: '20+ proyectos', sub: 'en producción' },
  { icon: '⚽', title: 'Hincha', sub: 'de River y la Selección' },
  { icon: '🛠️', title: 'Full-stack', sub: 'front · back · móvil' },
  { icon: '🌎', title: 'Remoto', sub: 'cualquier zona horaria' },
];

export default function About() {
  const [textRef, textVisible] = useInView();
  const [stickersRef, stickersVisible] = useInView({ threshold: 0.15 });

  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.eyebrow}>~ sobre mí ~</span>
          <h2 className={styles.title}>
            Diseño y construyo <em>productos digitales</em>
            <br /> que la gente usa todos los días.
          </h2>
        </div>

        <div className={styles.grid}>
          <div
            ref={textRef}
            className={`${styles.text} reveal ${textVisible ? 'show' : ''}`}
          >
            <p>
              Soy <strong>Ezequiel</strong>, Ingeniero en Sistemas de
              Información y Full-Stack Developer. Hace más de 5 años trabajo
              en el desarrollo de aplicaciones web y móviles que llegan a
              producción y que generan valor real.
            </p>
            <p>
              Mi stack principal es <strong>React / Next.js</strong> en el
              frontend y <strong>Laravel / Node / Spring</strong> en el back.
              Diseño bases de datos, APIs REST documentadas y arquitecturas
              pensadas para escalar y mantenerse en el tiempo.
            </p>
            <p>
              Me enfoco en el código limpio, en aplicar buenas prácticas y en
              entender el problema antes de tirar la primera línea. Disfruto
              trabajar en equipo, participar en decisiones técnicas y crecer
              en proyectos desafiantes.
            </p>

            <blockquote className={styles.quote}>
              “Si vale la pena hacerlo, vale la pena hacerlo bien.”
            </blockquote>
          </div>

          <div ref={stickersRef} className={styles.stickers}>
            {STICKERS.map((s, i) => (
              <div
                key={s.title}
                className={`${styles.sticker} ${styles[`s${i + 1}`]} ${
                  stickersVisible ? styles.show : ''
                }`}
              >
                <span className={styles.stickerIcon} aria-hidden>
                  {s.icon}
                </span>
                <span className={styles.stickerLabel}>
                  <span className={styles.stickerTitle}>{s.title}</span>
                  <span className={styles.stickerSub}>{s.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
