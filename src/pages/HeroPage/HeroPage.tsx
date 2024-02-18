import { NavLink } from 'react-router-dom';
import { Button } from '../../components';
import styles from './HeroPage.module.scss';

const HeroPage = () => {
  return (
    <section className={styles.hero}>
      <section className={styles.hero__box}>
        <p className={styles.hero__text}>Welcome!</p>
        <h1 className={styles.hero__title}>The Weather Forecast</h1>
        <NavLink to="/main">
          <Button label="Get trip!" variant="primary" />
        </NavLink>
      </section>
    </section>
  );
};

export default HeroPage;
