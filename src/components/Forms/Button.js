import React from 'react';
import styles from './Button.module.css';

function Button({ children, ...props }) {
  return (
    <button {...props} type="submit" className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
