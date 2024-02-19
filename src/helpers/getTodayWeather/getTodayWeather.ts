import { axios } from '../axios';

const getTodayWeather = async (
  city: string,
  apiKey: string,
): Promise<any | null> => {
  try {
    const response = await axios.get(
      `${city}/today?unitGroup=metric&include=days&key=${apiKey}&contentType=json`,
    );
    return response;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

export default getTodayWeather;
