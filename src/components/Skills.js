import styles from '@/styles/Skills.module.css';
import {
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaTools,
  FaReact,
  FaServer,
} from 'react-icons/fa';
import { MdCloud, MdGroupWork } from 'react-icons/md';
import useInView from '@/hooks/useInView';

const SKILLS = [
  {
    id: 1,
    name: 'Frontend Web',
    position: 'mediocampista creativo',
    stack: ['React', 'Next.js', 'Vue'],
    icon: <FaReact />,
    rare: true,
  },
  {
    id: 2,
    name: 'Backend Web',
    position: 'volante central',
    stack: ['Laravel', 'Spring', 'Node'],
    icon: <FaServer />,
  },
  {
    id: 3,
    name: 'Mobile Apps',
    position: 'extremo veloz',
    stack: ['React Native', 'Flutter', 'Kotlin'],
    icon: <FaMobileAlt />,
  },
  {
    id: 4,
    name: 'Bases de Datos',
    position: 'defensor central',
    stack: ['PostgreSQL', 'MySQL', 'MongoDB'],
    icon: <FaDatabase />,
    rare: true,
  },
  {
    id: 5,
    name: 'Desktop Apps',
    position: 'lateral todoterreno',
    stack: ['Java', 'OOP', 'patrones'],
    icon: <FaCode />,
  },
  {
    id: 6,
    name: 'DevOps & Deploy',
    position: 'arquero confiable',
    stack: ['Vercel', 'Supabase', 'Hostinger'],
    icon: <MdCloud />,
  },
  {
    id: 7,
    name: 'Git & GitHub',
    position: 'capitán de equipo',
    stack: ['Git', 'PRs', 'flow'],
    icon: <FaTools />,
  },
  {
    id: 8,
    name: 'Agile / Scrum',
    position: 'DT del proyecto',
    stack: ['Jira', 'Trello', 'Scrum'],
    icon: <MdGroupWork />,
    rare: true,
  },
];

function Sticker({ skill, idx }) {
  const [ref, visible] = useInView({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`${styles.sticker} ${skill.rare ? styles.rare : ''} ${
        visible ? styles.show : ''
      }`}
      style={{ transitionDelay: `${(idx % 4) * 0.08}s` }}
    >
      <div className={styles.topRow}>
        <span className={styles.position}>{skill.position}</span>
        <span className={styles.number}>
          {String(idx + 1).padStart(2, '0')}
        </span>
      </div>

      <div className={styles.iconWrapper}>{skill.icon}</div>

      <div className={styles.bottom}>
        <h3 className={styles.skillName}>{skill.name}</h3>
        <div className={styles.skillStack}>
          {skill.stack.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [headRef, headVisible] = useInView();

  return (
    <section id="skills" className={styles.skills}>
      <div
        ref={headRef}
        className={`${styles.head} reveal ${headVisible ? 'show' : ''}`}
      >
        <span className={styles.eyebrow}>~ skills ~</span>
        <h2 className={styles.title}>
          Mi <em>once ideal</em> de tecnologías.
        </h2>
        <p className={styles.subtitle}>
          Las figuritas difíciles de pegar. Estas las tengo todas.
        </p>
      </div>

      <div className={styles.album}>
        {SKILLS.map((skill, idx) => (
          <Sticker key={skill.id} skill={skill} idx={idx} />
        ))}
      </div>

      <p className={styles.albumFooter}>
        ¿Faltó alguna? Si tu stack es <strong>medio raro</strong>, mandame un
        mensaje y vemos.
      </p>
    </section>
  );
}
