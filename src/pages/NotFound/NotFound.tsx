import { Button } from '../../components';
import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <section className={styles.notfound}>
      <p>Ooops, 404 error. Page is not found.</p>
      <nav className={styles.notfound__nav}>
        <NavLink to="/">
          <Button label="HOME" />
        </NavLink>
        <NavLink to="/main">
          <Button label="TRIPS" />
        </NavLink>
      </nav>
    </section>
  );
};

export default NotFound;
