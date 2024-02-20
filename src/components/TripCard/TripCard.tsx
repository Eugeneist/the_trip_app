import { useCallback } from 'react';
import { getInfo } from '../../helpers';
import { useTripContext } from '../../providers/TripProvider';
import styles from './TripCard.module.scss';

export interface TripCardProps {
  id: string;
  image: string;
  city: string;
  dates: string[];
}

const TripCard: React.FC<TripCardProps> = ({ id, image, city, dates }) => {
  const { addTodayWeather } = useTripContext();

  const [firstDate, finalDate] = dates;

  const handleWeather = useCallback(() => {
    getInfo(city, firstDate, finalDate, addTodayWeather);
  }, [addTodayWeather, city, finalDate, firstDate]);

  return (
    <article onClick={handleWeather} id={id} className={styles.tripcard}>
      <img
        className={styles.tripcard__image}
        src={image}
        alt={`${city} image`}
      />
      <div className={styles.tripcard__info}>
        <h2 className={styles.tripcard__city}>{city}</h2>
        <p
          className={styles.tripcard__dates}
        >{`${firstDate} - ${finalDate}`}</p>
      </div>
    </article>
  );
};

export default TripCard;
