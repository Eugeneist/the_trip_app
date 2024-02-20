import styles from './Modal.module.scss';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modal__overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <header className={styles.modal__header}>
          <h2 className={styles.modal__title}>{title}</h2>
          <button className={styles.btn_close} onClick={onClose}>
            ✕
          </button>
        </header>
        <section className={styles.modal__body}>{children}</section>
      </div>
    </div>
  );
};

export default Modal;
