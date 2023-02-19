import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  // const [showToast, setShowToast] = React.useState(false);
  const [toastData, setToastData] = React.useState([]);

  function handleDismiss(id) {
    console.log('id is: ', id);
    setToastData(toastData.filter((toast) => toast.id !== id));
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!message) return;
    const newToast = {
      id: Date.now(),
      variant,
      message,
    };
    setToastData([...toastData, newToast]);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  console.log({ toastData });

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      {/* {showToast && (
        <Toast variant={variant} handleDismiss={handleDismiss}>
          {message}
        </Toast>
      )} */}
      <ToastShelf toastData={toastData} handleDismiss={handleDismiss} />
      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor='message'
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                id='message'
                className={styles.messageInput}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => (
                <label key={option} htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type='radio'
                    name='variant'
                    value={option}
                    checked={option === variant}
                    onChange={(e) => {
                      setVariant(e.target.value);
                    }}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
