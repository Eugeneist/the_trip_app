import { TodayWidget } from '../Weather';
import { useTripContext } from '../../providers/TripProvider';
import styles from './TodayInfo.module.scss';

const TodayInfo = () => {
  const { currentTrip } = useTripContext();
  const { day, temperature, city } = currentTrip;

  return (
    <aside className={styles.todayinfo}>
      <section className={styles.todayinfo__weather}>
        <TodayWidget day={day} temperature={temperature} city={city} />
      </section>
      <section className={styles.todayinfo__countdown}></section>
    </aside>
  );
};

export default TodayInfo;
