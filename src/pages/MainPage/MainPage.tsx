import styles from './MainPage.module.scss';
import { TripList, TodayInfo } from '../../components';

const MainPage = () => {
  return (
    <main className={styles.main}>
      <TripList />
      <TodayInfo />
    </main>
  );
};

export default MainPage;
