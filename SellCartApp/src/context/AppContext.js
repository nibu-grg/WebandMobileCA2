import React, { createContext, useState } from 'react';

// Create context
export const AppContext = createContext();

// Provider component that will wrap the application
export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <AppContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </AppContext.Provider>
  );
};
