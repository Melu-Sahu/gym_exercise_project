import React, { createContext, useContext, useState } from 'react';

const ExerciseDetailContext = createContext();

export const ExerciseDetailProvider = ({ children }) => {
  const [exerciseDetail, setExerciseDetail] = useState({});

  return (
    <ExerciseDetailContext.Provider value={{ exerciseDetail, setExerciseDetail }}>
      {children}
    </ExerciseDetailContext.Provider>
  );
};

export const useExerciseDetail = () => {
  const context = useContext(ExerciseDetailContext);
  if (!context) {
    throw new Error('useExerciseDetail must be used within a ExerciseDetailProvider');
  }
  return context;
};
