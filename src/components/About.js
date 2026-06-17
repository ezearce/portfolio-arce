import styles from '@/styles/About.module.css';
import useInView from '@/hooks/useInView';

const STICKERS = [
  { icon: '🧉', title: '5+ años', sub: 'cebando código' },
  { icon: '🚀', title: '20+ proyectos', sub: 'puestos en producción' },
  { icon: '⚽', title: 'Hincha', sub: 'de River y la Scaloneta' },
  { icon: '🛠️', title: 'Full-stack', sub: 'front · back · móvil' },
  { icon: '📍', title: 'Buenos Aires', sub: 'Argentina, GMT-3' },
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
            Construyo software con <em>la misma dedicación</em>
            <br /> que cebo el primer mate del día.
          </h2>
        </div>

        <div className={styles.grid}>
          <div
            ref={textRef}
            className={`${styles.text} reveal ${textVisible ? 'show' : ''}`}
          >
            <p>
              Soy <strong>Ezequiel</strong>, Ingeniero en Sistemas y Full-Stack
              Developer. Hace 5+ años laburo todos los días con código —
              construyo aplicaciones web y móviles que llegan a producción y
              que la gente usa de verdad.
            </p>
            <p>
              Trabajo principalmente en stacks <strong>React / Next.js</strong>{' '}
              en el frontend y <strong>Laravel / Node / Spring</strong> en el
              back. Diseño bases de datos, APIs REST documentadas y
              arquitecturas que escalan sin romperse cuando entra el primer
              cliente importante.
            </p>
            <p>
              Me gusta el código limpio, los proyectos con propósito y los
              equipos donde se puede discutir una decisión técnica con un mate
              en la mano. Disfruto cuando un detalle bien pensado mejora la
              experiencia del que usa lo que construí.
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
