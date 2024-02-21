import { useEffect } from 'react';
import { getInfo } from '../../helpers';
import { useTripContext } from '../../providers/TripProvider';
import {
  TripList,
  TodayInfo,
  ForecastList,
  Searchbar,
  SortedButton,
} from '../../components';
import styles from './MainPage.module.scss';

const MainPage = () => {
  // для першого завантаження мокап даних:

  const { trips, addTodayWeather } = useTripContext();

  const [{ city, dates } = trips[0]] = trips;

  const fromDate = dates[0];
  const toDate = dates[1];

  useEffect(() => {
    getInfo(city, fromDate, toDate, addTodayWeather);
  }, []);

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
