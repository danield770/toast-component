import React from 'react';
import useKeydown from '../../hooks/useKeydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastData, setToastData] = React.useState([]);
  const resetToasts = React.useCallback(() => setToastData([]), []);

  useKeydown('Escape', resetToasts);

  function createToast(variant, message) {
    const newToast = {
      id: Date.now(), // or crypto.randomUUID()
      variant,
      message,
    };
    setToastData([...toastData, newToast]);
  }
  function dismissToast(id) {
    setToastData(toastData.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider value={{ toastData, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
