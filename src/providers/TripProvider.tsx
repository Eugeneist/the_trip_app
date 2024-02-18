import { createContext, useContext, useState } from 'react';
import { TripCardProps } from '../components/TripCard/TripCard';

interface TripContextType {
  trips: TripCardProps[];
  addTrip: (trip: TripCardProps) => void;
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
      image:
        'https://static.kyivpost.com/storage/2023/05/26/fce9ae9f09e5874563222fe85aa87956.jpg?w=1280&q=90&f=webp',
      city: 'Kyiv',
      dates: '17.02.2024 - 28.02.2024',
    },
  ]);

  const addTrip = (trip: TripCardProps) => {
    setTrips([...trips, trip]);
  };

  const tripContextValue: TripContextType = {
    trips,
    addTrip,
  };

  return (
    <TripContext.Provider value={tripContextValue}>
      {children}
    </TripContext.Provider>
  );
};
