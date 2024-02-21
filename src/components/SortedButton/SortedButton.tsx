import { useState } from 'react';
import { Button } from '../Button';
import { useTripContext } from '../../providers/TripProvider';
import { sortup } from '../../assets/icons/icons';
import { getDate } from '../../helpers';
import styles from './SortedButton.module.scss';

const SortedButton = () => {
  const [isSorted, setIsSorted] = useState(false);

  const { filteredTrips, addSortedTrips } = useTripContext();

  const toggleSort = () => {
    if (!isSorted) {
      const sortedTrips = [...filteredTrips].sort((a, b) => {
        const dateA = getDate(a.dates[0]).normalizedDate;
        const dateB = getDate(b.dates[0]).normalizedDate;
        return Number(dateA) - Number(dateB);
      });

      localStorage.setItem('prevTrips', JSON.stringify(filteredTrips));
      addSortedTrips(sortedTrips);
    } else {
      const prevLocalTrip = localStorage.getItem('prevTrips');
      const prevTrips = prevLocalTrip ? JSON.parse(prevLocalTrip) : null;

      if (prevTrips) {
        addSortedTrips(prevTrips);
      }
    }

    setIsSorted(!isSorted);
  };

  return (
    <Button onClick={toggleSort} variant="regular" size="small">
      <img className={styles.icon} src={sortup} alt="sort icon" />
    </Button>
  );
};

export default SortedButton;
