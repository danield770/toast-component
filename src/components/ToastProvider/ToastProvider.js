import React from 'react';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastData, setToastData] = React.useState([]);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        setToastData([]);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
