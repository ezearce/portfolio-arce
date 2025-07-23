'use client';
import styles from '../styles/Projects.module.css';

const proyectos = [
  { title: 'Proyecto A', description: 'Breve descripción', image: '/images/proyecto-a.jpg', link: '#' },
  // …
];

export default function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.grid}>
        {proyectos.map((p, i) => (
          <a href={p.link} key={i} className={styles.card}>
            <div
              className={styles.thumb}
              style={{ backgroundImage: `url('${p.image}')` }}
            />
            <h3 className={styles.subtitle}>{p.title}</h3>
            <p className={styles.description}>{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
