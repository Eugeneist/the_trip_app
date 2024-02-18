import styles from './Modal.module.scss';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <div className={styles.modal__overlay}>
      <div className={styles.modal}>
        <header className={styles.modal__header}>
          <h2>{title}</h2>
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
