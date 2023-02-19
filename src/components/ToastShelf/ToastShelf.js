import React from 'react';
import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toastData } = React.useContext(ToastContext);
  if (toastData.length === 0) return <></>;

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='assertive'
      aria-label='Notification'
    >
      {toastData.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} id={id}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
