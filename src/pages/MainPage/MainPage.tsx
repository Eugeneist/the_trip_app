import styles from './MainPage.module.scss';
import { TripList } from '../../components';

const MainPage = () => {
  return (
    <main className={styles.main}>
      <TripList />
    </main>
  );
};

export default MainPage;
