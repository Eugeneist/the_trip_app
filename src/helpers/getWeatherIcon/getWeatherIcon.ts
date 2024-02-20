import {
  cloudy_with_heavy_snow,
  cloudy_with_heavy_rain,
  mist,
  fog,
  cloudy,
  sunny_intervals,
  black_low_cloud,
  sunny,
} from '../../assets/weather/icons/icons';

interface WeatherIcons {
  [key: string]: string;
}

const getWeatherIcon = (icon: string) => {
  const target = icon.replaceAll('-', '_');

  const icons: WeatherIcons = {
    snow: cloudy_with_heavy_snow,
    rain: cloudy_with_heavy_rain,
    fog: mist,
    wind: fog,
    cloudy: cloudy,
    partly_cloudy_day: sunny_intervals,
    partly_cloudy_night: black_low_cloud,
    clear_day: sunny,
    clear_night: black_low_cloud,
  };
  return icons[target];
};

export default getWeatherIcon;
