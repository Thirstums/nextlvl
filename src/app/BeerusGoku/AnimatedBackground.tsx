// components/AnimatedBackground.tsx
import { useEffect, useRef } from "react";
import styles from "../styles/AnimatedBackground.module.css";

const AnimatedBackground: React.FC = () => {
  const gokuRef = useRef<HTMLDivElement>(null);
  const beerusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const goku = gokuRef.current;
    const beerus = beerusRef.current;

    if (goku && beerus) {
      const moveCharacters = () => {
        goku.style.top = `${Math.random() * 80}vh`;
        goku.style.left = `${Math.random() * 80}vw`;

        beerus.style.top = `${Math.random() * 80}vh`;
        beerus.style.left = `${Math.random() * 80}vw`;
      };

      const intervalId = setInterval(moveCharacters, 2000);

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className={styles.animatedBackground}>
      <div ref={gokuRef} className={`${styles.character} ${styles.goku}`}></div>
      <div
        ref={beerusRef}
        className={`${styles.character} ${styles.beerus}`}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
