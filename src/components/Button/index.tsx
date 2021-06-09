import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  title?: string;
}
interface ButtonStyleProps {
  padding: string;
  borderRadius: string;
  background: string;
}

const buttonStyle: ButtonStyleProps = {
  padding: '1rem',
  borderRadius: '7px',
  background: 'blue',
};
const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <div className={styles.block}>
      <button style={buttonStyle}>{title}</button>
    </div>
  );
};

Button.defaultProps = {
  title: 'Simple button',
};
export default Button;
