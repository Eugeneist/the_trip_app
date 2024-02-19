import { useCallback } from 'react';
import { getTodayWeather } from '../../helpers';
import { useTripContext } from '../../providers/TripProvider';
import styles from './TripCard.module.scss';

const key = process.env.API_KEY;

export interface TripCardProps {
  id: string;
  image: string;
  city: string;
  dates: string;
}

const TripCard: React.FC<TripCardProps> = ({ id, image, city, dates }) => {
  const { addTodayWeather } = useTripContext();

  const getWeather = useCallback(async () => {
    try {
      const currentData = await getTodayWeather(city, key);
      console.log(currentData);
      addTodayWeather(currentData);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  }, [addTodayWeather, city]);

  return (
    <article onClick={getWeather} id={id} className={styles.tripcard}>
      <img
        className={styles.tripcard__image}
        src={image}
        alt={`${city} image`}
      />
      <div className={styles.tripcard__info}>
        <h2 className={styles.tripcard__city}>{city}</h2>
        <p className={styles.tripcard__dates}>{dates}</p>
      </div>
    </article>
  );
};

export default TripCard;
