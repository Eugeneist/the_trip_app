import { useState } from 'react';
import { useTripContext } from '../../providers/TripProvider';
import { TripCard } from '../TripCard';
import { NewTripButton } from '../NewTripButton';
import { Modal } from '../Modal';
import { NewTripForm } from '../NewTripForm/';
import styles from './TripList.module.scss';

const TripList: React.FC = () => {
  const { trips } = useTripContext();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.triplist}>
      <div className={styles.triplist__box}>
        {trips.map(({ id, image, city, dates }) => (
          <TripCard key={id} id={id} image={image} city={city} dates={dates} />
        ))}
      </div>
      <NewTripButton onClick={openModal} />
      {showModal && (
        <Modal title="Create trip" onClose={closeModal}>
          <NewTripForm onClose={closeModal} />
        </Modal>
      )}
    </section>
  );
};

export default TripList;
