import styles from './NewTripButton.module.scss';

interface NewTripButtonProps {
  onClick: () => void;
}

const NewTripButton: React.FC<NewTripButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.newtripbutton}>
      <p>+</p>
      <p>Add Trip</p>
    </button>
  );
};

export default NewTripButton;
