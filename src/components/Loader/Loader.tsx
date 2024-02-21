import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <span className={`${styles.dot} ${styles.dot_1}`}></span>
      <span className={`${styles.dot} ${styles.dot_2}`}></span>
      <span className={`${styles.dot} ${styles.dot_3}`}></span>
      <span className={`${styles.dot} ${styles.dot_4}`}></span>
    </div>
  );
};

export default Loader;
