import styles from './NewTripButton.module.scss';

const NewTripButton: React.FC = () => {
  return (
    <button className={styles.newtripbutton}>
      <p>+</p>
      <p>Add Trip</p>
    </button>
  );
};

export default NewTripButton;
