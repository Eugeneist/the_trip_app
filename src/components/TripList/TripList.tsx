import { useState } from 'react';
import { useTripContext } from '../../providers/TripProvider';
import { TripCard } from '../TripCard';
import { NewTripButton } from '../NewTripButton';
import { Modal } from '../Modal';
import { NewTripForm } from '../NewTripForm/';
import { ScrollButton } from '../ScrollButton';
import styles from './TripList.module.scss';

const TripList: React.FC = () => {
  const { filteredTrips } = useTripContext();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.triplist}>
      <ScrollButton showButton={filteredTrips.length > 3}>
        {filteredTrips.map(({ id, image, city, dates }) => (
          <TripCard key={id} id={id} image={image} city={city} dates={dates} />
        ))}
      </ScrollButton>
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
