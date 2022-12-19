import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext(null);

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [showLoader, setShowLoader] = useState(false);
  const [activePage, setActivePage] = useState("");

  const toggleLoader = flag => {
    setShowLoader(flag);
  };

  return (
    <GlobalContext.Provider
      value={{
        toggleLoader,
        showLoader,
        activePage,
        setActivePage: value => setActivePage(value)
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
