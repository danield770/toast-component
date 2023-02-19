import React from 'react';
import { ToastContext } from '../ToastProvider';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X as Close,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, id, children }) {
  const Icon = ICONS_BY_VARIANT[variant];
  const { toastData, setToastData } = React.useContext(ToastContext);

  function dismissToast() {
    setToastData(toastData.filter((toast) => toast.id !== id));
  }

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={dismissToast}>
        <Close size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
