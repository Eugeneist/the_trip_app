import { createContext, useContext, useState, useEffect } from 'react';
import { kyiv } from '../assets/cities/cities';
import { TripCardProps } from '../components/TripCard/TripCard';
import { getDayOfWeek } from '../helpers';

interface TripContextType {
  trips: TripCardProps[];
  filteredTrips: TripCardProps[];
  currentTrip: any;
  addTrip: (trip: TripCardProps) => void;
  deleteTrip: (id: string) => void;
  filterTrips: (searchQuery: string) => void;
  addSortedTrips: (trips: TripCardProps[]) => void;
  clearFiltered: () => void;
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
  const [trips, setTrips] = useState<TripCardProps[]>(() => {
    const tripsFromLocalStorage = localStorage.getItem('trips');

    return tripsFromLocalStorage
      ? JSON.parse(tripsFromLocalStorage)
      : [
          {
            id: '0',
            image: kyiv,
            city: 'Kyiv',
            dates: ['29.02.2024', '4.03.2024'],
          },
        ];
  });

  const [filteredTrips, setFilteredTrips] = useState<TripCardProps[]>([]);
  const [currentTrip, setCurrentTrip] = useState({});

  useEffect(() => {
    localStorage.setItem('trips', JSON.stringify(trips));
  }, [trips]);

  // Методи:

  const addTrip = (trip: TripCardProps) => {
    setTrips((prevTrips) => [...prevTrips, trip]);
  };

  const deleteTrip = (id: string) => {
    const withoutTrip = trips.filter((item: TripCardProps) => item.id !== id);
    setTrips(withoutTrip);
  };

  const filterTrips = (searchQuery: string) => {
    const filtered = trips.filter((trip) =>
      trip.city.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredTrips(filtered);
  };

  const addSortedTrips = (trips: any) => {
    setFilteredTrips(trips);
  };

  const clearFiltered = () => {
    setFilteredTrips(trips);
  };

  const addTodayWeather = (data: any) => {
    setCurrentTrip({
      day: getDayOfWeek(data.days[0].datetime),
      days: data.days,
      temperature:
        Math.round(data.days[0].temp) || Math.round(data.days[0].tempmax),
      city: data.address,
      icon: data.days[0].icon,
      firstDayTrip: data.firstDayTrip,
      lastDayTrip: data.lastDayTrip,
    });
  };

  const tripContextValue: TripContextType = {
    trips,
    filteredTrips,
    currentTrip,
    addTrip,
    deleteTrip,
    filterTrips,
    addSortedTrips,
    clearFiltered,
    addTodayWeather,
  };

  return (
    <TripContext.Provider value={tripContextValue}>
      {children}
    </TripContext.Provider>
  );
};
