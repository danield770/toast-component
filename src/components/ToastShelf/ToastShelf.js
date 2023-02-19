import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastData, handleDismiss }) {
  if (toastData.length === 0) return <></>;

  return (
    <ol className={styles.wrapper}>
      {toastData.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} id={id} handleDismiss={handleDismiss}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
