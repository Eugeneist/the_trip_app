import styles from './MainPage.module.scss';
import { TripList } from '../../components';

const MainPage = () => {
  return (
    <main className={styles.main}>
      <p>Main page</p>
      <TripList />
    </main>
  );
};

export default MainPage;
