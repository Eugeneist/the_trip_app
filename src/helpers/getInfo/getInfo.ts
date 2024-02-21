import { getTodayWeather } from '../getTodayWeather';
import { getAllTripWeather } from '../getAllTripWeather';
import { getDate } from '..';

const key = import.meta.env.VITE_API_KEY;

const getInfo = async (
  city: string,
  fromDate: string,
  toDate: string,
  addTodayWeather: (data: any) => void,
) => {
  try {
    const currentData = await getTodayWeather(city, key);
    const allTripData = await getAllTripWeather(
      city,
      getDate(fromDate).restructuredDate,
      getDate(toDate).restructuredDate,
      key,
    );
    currentData.firstDayTrip = fromDate;
    currentData.lastDayTrip = toDate;
    currentData.days = allTripData.days;
    addTodayWeather(currentData);
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
};

export default getInfo;
