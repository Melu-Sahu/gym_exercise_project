import React, { createContext, useContext, useState } from 'react';

const BodyPartContext = createContext();

export const BodyPartProvider = ({ children }) => {
  const [bodyParts, setBodyParts] = useState([]);
  return (
    <BodyPartContext.Provider value={{ bodyParts, setBodyParts }}>
      {children}
    </BodyPartContext.Provider>
  );
};

export const useBodyPart = () => {
  const context = useContext(BodyPartContext);
  if (!context) {
    throw new Error('useBodyPart must be used within a BodyPartProvider');
  }
  return context;
};