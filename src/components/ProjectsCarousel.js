'use client';

import { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import projectsData from '../../public/data/projects.json';
import styles from '@/styles/ProjectsCarousel.module.css';
import Image from 'next/image';
import Link from 'next/link';
import useInView from '@/hooks/useInView';

export default function ProjectsCarousel() {
  const [refTitle, isTitleVisible] = useInView();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
    },
    [Autoplay({ delay: 6000, stopOnInteraction: true })]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedIndex());
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

  const onPrevButtonClick = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const onNextButtonClick = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const onDotClick = (index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div
        ref={refTitle}
        className={`${styles.headerWrapper} ${
          isTitleVisible ? styles.fadeIn : ''
        }`}
      >
        <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
        <p className={styles.subtitle}>
          Explora algunos de mis proyectos más relevantes
        </p>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {projectsData.map((project) => (
              <div key={project.id} className={styles.emblaSlide}>
                <div className={styles.slideContent}>
                  {/* IMAGEN - Left */}
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
                          width={350}
                          height={280}
                          quality={85}
                          className={styles.projectImage}
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={350}
                        height={280}
                        quality={85}
                        className={styles.projectImage}
                      />
                    )}
                  </div>

                  {/* CONTENIDO - Right */}
                  <div className={styles.contentSection}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>

                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>

                    <div className={styles.projectActions}>
                      {project.link && project.link !== '#' && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.actionButton}
                        >
                          Ver proyecto
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
                              GitHub Frontend
                            </Link>
                          )}

                          {project.repoBackend && (
                            <Link
                              href={project.repoBackend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.repoLink}
                            >
                              GitHub Backend
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controles */}
        <div className={styles.controls}>
          <button
            className={`${styles.navButton} ${!canScrollPrev ? styles.disabled : ''}`}
            onClick={onPrevButtonClick}
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
                onClick={() => onDotClick(index)}
                aria-label={`Ir al proyecto ${index + 1}`}
              />
            ))}
          </div>

          <button
            className={`${styles.navButton} ${!canScrollNext ? styles.disabled : ''}`}
            onClick={onNextButtonClick}
            disabled={!canScrollNext}
            aria-label="Proyecto siguiente"
          >
            →
          </button>
        </div>
      </div>

      <div className={styles.bottomCta}>
        <p className={styles.ctaText}>
          ¿Interesado en colaborar? Tengo más proyectos disponibles.
        </p>
        <Link
          href="https://github.com/ezearce"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubButton}
        >
          Ver más en GitHub
        </Link>
      </div>
    </section>
  );
}
