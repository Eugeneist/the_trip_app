import { DayCard } from '../DayCard';
import { Loader } from '../../../Loader';
import { useTripContext } from '../../../../providers/TripProvider';
import { getDayOfWeek } from '../../../../helpers';
import styles from './ForecastList.module.scss';

interface DayData {
  datetimeEpoch: number;
  datetime: string;
  icon: string;
  tempmin: number;
  tempmax: number;
}

const ForecastList = () => {
  const { currentTrip } = useTripContext();

  if (!currentTrip || !currentTrip.days) {
    return <Loader />;
  }

  const { days } = currentTrip;

  return (
    <section className={styles.forecastlist}>
      <h2 className={styles.forecastlist__title}>Week:</h2>
      <div className={styles.forecastlist__box}>
        {days?.map(
          ({ datetimeEpoch, datetime, icon, tempmin, tempmax }: DayData) => (
            <DayCard
              key={datetimeEpoch}
              day={getDayOfWeek(datetime)}
              icon={icon}
              tempMin={Math.round(tempmin)}
              tempMax={Math.round(tempmax)}
            />
          ),
        )}
      </div>
    </section>
  );
};

export default ForecastList;
