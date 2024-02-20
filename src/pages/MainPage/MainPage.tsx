import { useEffect } from 'react';
import { getInfo } from '../../helpers';
import { useTripContext } from '../../providers/TripProvider';
import { TripList, TodayInfo, ForecastList } from '../../components';
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
      <div className={styles.main__forecast}>
        <TripList />
        <ForecastList />
      </div>
      <TodayInfo />
    </main>
  );
};

export default MainPage;
