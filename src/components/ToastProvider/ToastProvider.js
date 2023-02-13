import React from "react";

import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const addToast = React.useCallback((variant, message) => {
    //debugger;
    setToasts([...toasts, { id: crypto.randomUUID(), variant, message }]);
  }, [toasts]);
  const removeToast = React.useCallback((id) => {
    setToasts(toasts.filter(item => item.id !== id))
  }, [toasts])
  useEscapeKey(() => setToasts([]));

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
