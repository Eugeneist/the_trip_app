import { useEffect, useState } from 'react';
import { getInfo } from '../../helpers';
import { useTripContext } from '../../providers/TripProvider';

const useFirstLoad = () => {
  const { trips, addTodayWeather } = useTripContext();
  const [{ city, dates } = trips[0]] = trips;
  const fromDate = dates[0];
  const toDate = dates[1];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInfo(city, fromDate, toDate, addTodayWeather)
      .then(() => setLoading(false))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return { loading };
};

export default useFirstLoad;
