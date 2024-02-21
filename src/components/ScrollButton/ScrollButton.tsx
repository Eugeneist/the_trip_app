import { useRef } from 'react';
import styles from './ScrollButton.module.scss';

interface ScrollButtonProps {
  showButton: boolean;
  children: React.ReactNode;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
  showButton,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -100,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.horizontalscroll_container}>
      <button
        className={styles.scrollbutton_left}
        onClick={scrollLeft}
        style={{ display: showButton ? 'block' : 'none' }}
      >
        &lt;
      </button>
      <div className={styles.scroll__content} ref={containerRef}>
        {children}
      </div>
      <button
        className={styles.scrollbutton_right}
        onClick={scrollRight}
        style={{ display: showButton ? 'block' : 'none' }}
      >
        &gt;
      </button>
    </div>
  );
};

export default ScrollButton;
