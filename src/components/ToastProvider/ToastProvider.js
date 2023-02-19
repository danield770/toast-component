import React from 'react';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastData, setToastData] = React.useState([]);
  return (
    <ToastContext.Provider value={{ toastData, setToastData }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
