import { useState, useEffect } from 'react';
import { useTripContext } from '../../providers/TripProvider';
import styles from './Searchbar.module.scss';

const Searchbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>(
    localStorage.getItem('searchQuery') || '',
  );

  const { filterTrips, clearFiltered, trips } = useTripContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      filterTrips(searchQuery);
      localStorage.setItem('searchQuery', searchQuery);
    } else {
      localStorage.removeItem('searchQuery');
      clearFiltered();
    }
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery, trips]);

  return (
    <div className={styles.searchbar}>
      <form className={styles.searchbar__form} action="">
        <button className={styles.searchbar__button} type="button">
          {
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                fill="rgba(0, 0, 0, 0.54)"
              />
            </svg>
          }
        </button>
        <input
          className={styles.searchbar__input}
          type="text"
          id="searchbar__input"
          name="searchbar__input"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search your trip"
        />
      </form>
    </div>
  );
};

export default Searchbar;
