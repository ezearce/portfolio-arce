import { useEffect, useState } from "react";
import styles from "@/styles/Cursor.module.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setActive(true);
    const removeHover = () => setActive(false);

    window.addEventListener("mousemove", moveCursor);

    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className={`${styles.customCursor} ${active ? styles.active : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
