import { createContext, useContext, useState } from 'react';
import { kyiv } from '../assets/cities/cities';
import { TripCardProps } from '../components/TripCard/TripCard';
import { getDayOfWeek } from '../helpers';

interface TripContextType {
  trips: TripCardProps[];
  currentTrip: any;
  addTrip: (trip: TripCardProps) => void;
  addTodayWeather: (data: any) => void;
}

interface TripProviderProps {
  children: React.ReactNode;
}

const TripContext = createContext<TripContextType | undefined>(undefined);

export const useTripContext = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTripContext must be used within a TripProvider');
  }
  return context;
};

export const TripProvider: React.FC<TripProviderProps> = ({ children }) => {
  const [trips, setTrips] = useState<TripCardProps[]>([
    {
      id: '0',
      image: kyiv,
      city: 'Kyiv',
      dates: ['29.02.2024', '4.03.2024'],
    },
  ]);
  const [currentTrip, setCurrentTrip] = useState({});

  const addTrip = (trip: TripCardProps) => {
    setTrips((prevTrips) => [...prevTrips, trip]);
  };

  const addTodayWeather = (data: any) => {
    setCurrentTrip({
      day: getDayOfWeek(data.days[0].datetime),
      temperature:
        Math.round(data.days[0].temp) || Math.round(data.days[0].tempmax),
      city: data.address,
      icon: data.days[0].icon,
      firstDayTrip: data.firstDayTrip,
    });
  };

  const tripContextValue: TripContextType = {
    trips,
    currentTrip,
    addTrip,
    addTodayWeather,
  };

  return (
    <TripContext.Provider value={tripContextValue}>
      {children}
    </TripContext.Provider>
  );
};
