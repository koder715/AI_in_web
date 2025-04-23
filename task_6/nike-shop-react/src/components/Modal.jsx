import React from 'react';
import styles from '../styles/Modal.module.css';

const Modal = ({ onClose }) => {
    return (
      <div className={`${styles.modal} ${styles.show}`}>
        <div className={styles.content}>
          <span className={styles.close} onClick={onClose}>&times;</span>
          <h2>Oops!</h2>
          <p>
            Online orders are currently unavailable in your region due to technical
            maintenance. Please try again later.
          </p>
        </div>
      </div>
    );
  };
  
  export default Modal;