import { Routes, Route } from 'react-router-dom';
import { HeroPage, MainPage, NotFound } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
