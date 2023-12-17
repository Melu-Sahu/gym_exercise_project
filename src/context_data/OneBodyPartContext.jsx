import React, { createContext, useContext, useState } from 'react';

const OneBodyPartContext = createContext();

export const OneBodyPartProvider = ({ children }) => {
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <OneBodyPartContext.Provider value={{ bodyPart, setBodyPart }}>
      {children}
    </OneBodyPartContext.Provider>
  );
};

export const useOneBodyPart = () => {
  const context = useContext(OneBodyPartContext);
  if (!context) {
    throw new Error('useOneBodyPart must be used within a ExercisesProvider');
  }
  return context;
};
