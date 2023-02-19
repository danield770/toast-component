import React from 'react';
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

function VariantIcon({ icon: Icon, size = 24 }) {
  return <Icon size={size} />;
}

function Toast({ variant, handleDismiss, children }) {
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <VariantIcon icon={ICONS_BY_VARIANT[variant]} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={handleDismiss}>
        <VariantIcon icon={Close} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
