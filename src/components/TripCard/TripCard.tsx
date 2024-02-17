import styles from './TripCard.module.scss';

export interface TripCardProps {
  id: number;
  image: string;
  city: string;
  dates: string;
}

const TripCard: React.FC<TripCardProps> = ({ id, image, city, dates }) => {
  return (
    <article className={styles.tripcard}>
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
