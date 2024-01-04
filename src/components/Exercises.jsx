import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { FetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';
import { useExercises } from '../context_data/ExerciseDataContext';
import { useOneBodyPart } from '../context_data/OneBodyPartContext';

const Exercises = () => {


  const { exercises, setExercises } = useExercises();
  const { bodyPart } = useOneBodyPart();

  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  const fetchExercisesData = async () => {
    let exercisesData = [];

    if (bodyPart === 'all') {
      exercisesData = await FetchData('https://exercisedb.p.rapidapi.com/exercises?limit=500', 'exercisedb');
    } else {
      exercisesData = await FetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, 'exercisedb');
    }

    setExercises(exercisesData);
  };

  useEffect(() => {
    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '90px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            mt='10px'
            color="standard"
            shape="rounded"
            variant='outlined'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;