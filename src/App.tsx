import { Routes, Route } from 'react-router-dom';
import { TripProvider } from './providers/TripProvider';
import { HeroPage, MainPage, NotFound } from './pages';

const App = () => {
  return (
    <TripProvider>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TripProvider>
  );
};

export default App;
