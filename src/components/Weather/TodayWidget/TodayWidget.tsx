import { getWeatherIcon } from '../../../helpers';
import styles from './TodayWidget.module.scss';

interface TodayWidgetProps {
  day: string;
  temperature: number;
  city: string;
  icon: string;
}

const TodayWidget: React.FC<TodayWidgetProps> = ({
  day,
  temperature,
  city,
  icon,
}) => {
  return (
    <article className={styles.todaywidget}>
      <h2 className={styles.todaywidget__day}>{day ? day : 'N/A'}</h2>
      <div className={styles.todaywidget__weather}>
        <img
          className={styles.todaywidget__weather_icon}
          src={icon ? getWeatherIcon(icon) : getWeatherIcon('sunny')}
          alt={icon}
        />
        <p className={styles.todaywidget__weather_temperature}>
          {temperature ? temperature : 'N/A'}
        </p>
      </div>
      <p className={styles.todaywidget__city}>{city ? city : 'N/A'}</p>
    </article>
  );
};

export default TodayWidget;
