import { getWeatherIcon } from '../../../../helpers';
import styles from './DayCard.module.scss';

interface DayCardProps {
  day: string;
  icon: string;
  tempMin: number;
  tempMax: number;
}

const DayCard: React.FC<DayCardProps> = ({ day, icon, tempMin, tempMax }) => {
  return (
    <article className={styles.daycard}>
      <h2 className={styles.daycard__day}>{day}</h2>
      <img
        className={styles.daycard__icon}
        src={icon ? getWeatherIcon(icon) : getWeatherIcon('sunny')}
        alt={icon}
      />
      <div className={styles.daycard__temperatures}>
        <p className={styles.daycard__temp}>{tempMin}</p>/
        <p className={styles.daycard__temp}>{tempMax}</p>
      </div>
    </article>
  );
};

export default DayCard;
