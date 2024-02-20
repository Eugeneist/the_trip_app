import { TodayWidget } from '../Weather';
import { Timer } from '../Timer';
import { Loader } from '../Loader';
import { useTripContext } from '../../providers/TripProvider';
import styles from './TodayInfo.module.scss';

const TodayInfo = () => {
  const { currentTrip } = useTripContext();
  const { day, temperature, city, icon, firstDayTrip } = currentTrip;

  if (!currentTrip) {
    return (
      <aside className={styles.todayinfo}>
        <Loader />
      </aside>
    );
  }

  return (
    <aside className={styles.todayinfo}>
      <section className={styles.todayinfo__weather}>
        <TodayWidget
          day={day}
          temperature={temperature}
          city={city}
          icon={icon}
        />
      </section>
      <section className={styles.todayinfo__countdown}>
        <Timer date={firstDayTrip} />
      </section>
    </aside>
  );
};

export default TodayInfo;
