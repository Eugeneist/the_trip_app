import styles from './TodayWidget.module.scss';

interface TodayWidgetProps {
  day: string;
  temperature: number;
  city: string;
}

const TodayWidget: React.FC<TodayWidgetProps> = ({
  day,
  temperature,
  city,
}) => {
  return (
    <article className={styles.todaywidget}>
      <h2 className={styles.todaywidget__day}>{day ? day : 'N/A'}</h2>
      <div className={styles.todaywidget__weather}>
        {temperature ? temperature : 'N/A'}
      </div>
      <p className={styles.todaywidget__city}>{city ? city : 'N/A'}</p>
    </article>
  );
};

export default TodayWidget;
