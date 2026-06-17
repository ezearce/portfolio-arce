'use client';

import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import projectsData from '../../public/data/projects.json';
import styles from '@/styles/ProjectsCarousel.module.css';
import Image from 'next/image';
import Link from 'next/link';
import useInView from '@/hooks/useInView';

export default function ProjectsCarousel() {
  const [headRef, headVisible] = useInView();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 7000, stopOnInteraction: true })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedIndex);
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    const onInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    };
    emblaApi.on('init', onInit);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('init', onInit);
      emblaApi.off('reInit', onInit);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="projects" className={styles.projects}>
      <div
        ref={headRef}
        className={`${styles.head} reveal ${headVisible ? 'show' : ''}`}
      >
        <span className={styles.eyebrow}>~ proyectos ~</span>
        <h2 className={styles.title}>
          Cosas que <em>construí</em> con código.
        </h2>
        <p className={styles.subtitle}>
          Una selección de proyectos en los que trabajé — desde apps móviles
          que conectan personas hasta plataformas con miles de productos.
        </p>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {projectsData.map((project, idx) => (
              <div key={project.id} className={styles.emblaSlide}>
                <article className={styles.card}>
                  <div className={styles.imageSection}>
                    {project.link && project.link !== '#' ? (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.imageLink}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={360}
                          height={280}
                          quality={85}
                          className={styles.projectImage}
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={360}
                        height={280}
                        quality={85}
                        className={styles.projectImage}
                      />
                    )}
                  </div>

                  <div className={styles.contentSection}>
                    <div>
                      <span className={styles.projectIndex}>
                        nº {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDescription}>
                        {project.description}
                      </p>
                    </div>

                    <div className={styles.projectActions}>
                      {project.link && project.link !== '#' && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.actionButton}
                        >
                          Ver proyecto
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7M7 7h10v10" />
                          </svg>
                        </Link>
                      )}

                      {(project.repoFrontend || project.repoBackend) && (
                        <div className={styles.repoLinks}>
                          {project.repoFrontend && (
                            <Link
                              href={project.repoFrontend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.repoLink}
                            >
                              GitHub front
                            </Link>
                          )}
                          {project.repoBackend && (
                            <Link
                              href={project.repoBackend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.repoLink}
                            >
                              GitHub back
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button
            className={`${styles.navButton} ${!canScrollPrev ? styles.disabled : ''}`}
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Proyecto anterior"
          >
            ←
          </button>
          <div className={styles.dots}>
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === selectedIndex ? styles.active : ''}`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Ir al proyecto ${index + 1}`}
              />
            ))}
          </div>
          <button
            className={`${styles.navButton} ${!canScrollNext ? styles.disabled : ''}`}
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Proyecto siguiente"
          >
            →
          </button>
        </div>
      </div>

      <div className={styles.bottomCta}>
        <p className={styles.ctaText}>¿Querés ver más? Tengo el repo lleno.</p>
        <Link
          href="https://github.com/ezearce"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubButton}
        >
          Más en GitHub
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
