import { useState } from 'react';
import { useTripContext } from '../../providers/TripProvider';
import { TripCard } from '../TripCard';
import { NewTripButton } from '../NewTripButton';
import { Modal } from '../Modal';
import { NewTripForm } from '../NewTripForm/';
import styles from './TripList.module.scss';

// const trips: TripCardProps[] = [
//   {
//     id: 0,
//     image:
//       'https://static.kyivpost.com/storage/2023/05/26/fce9ae9f09e5874563222fe85aa87956.jpg?w=1280&q=90&f=webp',
//     city: 'Kyiv',
//     dates: '17.02.2024 - 28.02.2024',
//   },
// ];

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
      {trips.map(({ id, image, city, dates }) => (
        <TripCard key={id} id={id} image={image} city={city} dates={dates} />
      ))}
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
