import styles from './Button.module.scss';

type ButtonSize = 'small' | 'medium';
type ButtonVariant = 'primary' | 'secondary' | 'regular';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  label: string;
  type?: ButtonType;
  onClick?: () => void;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = 'button',
  size = 'medium',
  variant = 'primary',
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[size]} ${styles[variant]}`}
      onClick={onClick}
    >
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default Button;
