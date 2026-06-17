import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/Cursor.module.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;
    let rafId;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      if (!visible) setVisible(true);
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animate);
    };

    const handleOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
        setActive(true);
      }
    };

    const handleOut = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
        setActive(false);
      }
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    document.documentElement.addEventListener('mouseleave', handleLeave);
    document.documentElement.addEventListener('mouseenter', handleEnter);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
      document.documentElement.removeEventListener('mouseenter', handleEnter);
      cancelAnimationFrame(rafId);
    };
  }, [visible]);

  return (
    <>
      <div
        ref={dotRef}
        className={`${styles.dot} ${visible ? styles.visible : ''} ${
          active ? styles.active : ''
        }`}
        aria-hidden
      />
      <div
        ref={cursorRef}
        className={`${styles.cursor} ${visible ? styles.visible : ''} ${
          active ? styles.active : ''
        }`}
        aria-hidden
      >
        {/* Mate SVG */}
        <svg className={styles.mate} viewBox="0 0 64 64" fill="none">
          {/* Bombilla */}
          <line
            x1="44"
            y1="6"
            x2="34"
            y2="32"
            stroke="#c9bca6"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="44" cy="6" r="2.5" fill="#c9954d" />
          {/* Calabaza */}
          <path
            d="M16 36 C 16 28, 22 24, 32 24 C 42 24, 48 28, 48 36 C 48 50, 42 56, 32 56 C 22 56, 16 50, 16 36 Z"
            fill="#7a3e1a"
            stroke="#5a2e10"
            strokeWidth="1.2"
          />
          {/* Aro dorado */}
          <ellipse cx="32" cy="26" rx="14" ry="3" fill="#c9954d" />
          {/* Yerba */}
          <ellipse cx="32" cy="25" rx="11.5" ry="2" fill="#6b8e4f" />
        </svg>
      </div>
    </>
  );
}
