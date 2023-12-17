import React, { createContext, useContext, useState } from 'react';

const ExercisesContext = createContext();

export const ExercisesProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);

  return (
    <ExercisesContext.Provider value={{ exercises, setExercises }}>
      {children}
    </ExercisesContext.Provider>
  );
};

export const useExercises = () => {
  const context = useContext(ExercisesContext);
  if (!context) {
    throw new Error('useExercises must be used within a ExercisesProvider');
  }
  return context;
};
