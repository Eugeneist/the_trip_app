import {
  TripList,
  TodayInfo,
  ForecastList,
  Searchbar,
  SortedButton,
  Loader,
} from '../../components';
import { useFirstLoad } from '../../hooks';
import styles from './MainPage.module.scss';

const MainPage = () => {
  // для першого завантаження мокап даних:
  const { loading } = useFirstLoad();

  if (loading) {
    return (
      <main className={styles.loader}>
        <Loader />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <section className={styles.main__forecast}>
        <h1 className={styles.main__forecast__title}>
          Weather <p className={styles.main__forecast__title_bold}>Forecast</p>
        </h1>
        <div className={styles.main__searchbox}>
          <Searchbar />
          <SortedButton />
        </div>
        <TripList />
        <ForecastList />
      </section>
      <section className={styles.main__aside}>
        <TodayInfo />
      </section>
    </main>
  );
};

export default MainPage;
