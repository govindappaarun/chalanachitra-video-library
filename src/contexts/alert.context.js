import { useContext, useState, createContext } from "react";
import { createPortal } from "react-dom";
import { AlertContainer } from "src/components";

const defaultAlert = {
  show: true,
  message: null,
  type: "success",
};

const AlertContext = createContext(null);

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState([]);

  const dispatchAlert = (item) => {
    const newAlert = { ...defaultAlert, ...item };
    setAlert((prev) => [...prev, newAlert]);
    setTimeout(() => {
      setAlert([]);
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert, dispatchAlert }}>
      {children}
      {createPortal(<AlertContainer alert={alert} />, document.body)}
    </AlertContext.Provider>
  );
};

const useAlert = () => useContext(AlertContext);

export { AlertProvider, useAlert };
