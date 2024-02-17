import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default Button;
