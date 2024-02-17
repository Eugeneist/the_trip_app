import { NavLink } from 'react-router-dom';
import { Button } from '../../components';

const HeroPage = () => {
  return (
    <section>
      <p>Welcome to The Trip App!</p>
      <NavLink to="/main">
        <Button label="Get trip!" />
      </NavLink>
    </section>
  );
};

export default HeroPage;
