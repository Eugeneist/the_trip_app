import { useEffect, useState } from 'react';
import { getDate } from '../../helpers';
import styles from './Timer.module.scss';

interface TiperProps {
  date: string;
}

interface TimerState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer: React.FC<TiperProps> = ({ date = '01.01.2030' }) => {
  const dateFrom = getDate(date).normalizedDate;
  const dateCurrent = new Date().getTime();

  const calculateTime = (): TimerState => {
    const distance = +dateFrom - +dateCurrent;

    let timeLeft: TimerState = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (distance > 0) {
      timeLeft = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [time, setTime] = useState<TimerState>(calculateTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = time;

  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    return (
      <section className={styles.timer}>
        <p>Trip already started!</p>
      </section>
    );
  }

  return (
    <section className={styles.timer}>
      <div className={styles.timer__column}>
        <p className={styles.timer__numbers}>{days} </p>
        <p className={styles.timer__words}>day{days !== 1 ? 's' : ''}</p>
      </div>
      <div className={styles.timer__column}>
        <p className={styles.timer__numbers}>{hours}</p>
        <p className={styles.timer__words}>hour{hours !== 1 ? 's' : ''}</p>
      </div>
      <div className={styles.timer__column}>
        <p className={styles.timer__numbers}>{minutes}</p>
        <p className={styles.timer__words}>minute{minutes !== 1 ? 's' : ''}</p>
      </div>
      <div className={styles.timer__column}>
        <p className={styles.timer__numbers}>{seconds}</p>
        <p className={styles.timer__words}>second{seconds !== 1 ? 's' : ''}</p>
      </div>
    </section>
  );
};

export default Timer;
