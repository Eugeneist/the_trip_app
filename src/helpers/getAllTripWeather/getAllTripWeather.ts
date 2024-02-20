import { axios } from '../axios';

const getAllTripWeather = async (
  city: string,
  fromDate: string,
  toDate: string,
  apiKey: string,
): Promise<any | null> => {
  try {
    const response = await axios.get(
      `${city}/${fromDate}/${toDate}?unitGroup=metric&include=days&key=${apiKey}&contentType=json`,
    );
    return response;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

export default getAllTripWeather;
