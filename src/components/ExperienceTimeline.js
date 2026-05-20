import styles from '@/styles/Timeline.module.css';
import experienceData from '../../public/data/experience.json';
import useInView from '@/hooks/useInView';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function ExperienceTimeline() {
  const [ref, isVisible] = useInView();

  const workExperience = experienceData.filter(item => item.type === 'work');
  const education = experienceData.filter(item => item.type === 'education');

  return (
    <section id="experience" className={styles.timeline}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.header} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.title}>Mi Trayectoria</h2>
          <p className={styles.subtitle}>
            Experiencia profesional y formación académica
          </p>
        </div>

        {/* Work Experience */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <FaBriefcase className={styles.sectionIcon} />
            Experiencia Profesional
          </h3>

          <div className={styles.timelineContainer}>
            {workExperience.map((item, index) => (
              <div key={item.id} className={styles.timelineItem}>
                <div className={styles.marker}></div>
                <div className={styles.content}>
                  <div className={styles.year}>{item.year}</div>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.company}>{item.company}</p>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <FaGraduationCap className={styles.sectionIcon} />
            Educación
          </h3>

          <div className={styles.timelineContainer}>
            {education.map((item, index) => (
              <div key={item.id} className={styles.timelineItem}>
                <div className={styles.marker}></div>
                <div className={styles.content}>
                  <div className={styles.year}>{item.year}</div>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.company}>{item.company}</p>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
