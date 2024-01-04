import React, { useEffect, useState } from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
import { FetchData } from '../utils/fetchData';

const SimilarExercises = ({ id, target, equipment }) => {

  const [muscleExerciseData, setMuscleExerciseData] = useState([]);
  const [equipmentExerciseData, setEquipmentExerciseData] = useState([])


  const loadExerciseData = async ()=>{
    const muscleData = await FetchData(`https://exercisedb.p.rapidapi.com/exercises/target/abductors`,'exercisedb');
    setMuscleExerciseData(muscleData);

    const equipmentData = await FetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/assisted`,'exercisedb')
    setEquipmentExerciseData(equipmentData);
  }

  useEffect(()=>{
    loadExerciseData();

  },[id, target, equipment]);

return (

  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>

    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {muscleExerciseData.length !== 0 ? <HorizontalScrollbar bodyParts={false} data={muscleExerciseData} /> : <Loader />}
    </Stack>

    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>

    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExerciseData.length !== 0 ? <HorizontalScrollbar bodyParts={false} data={equipmentExerciseData} /> : <Loader />}
    </Stack>

  </Box>
)};

export default SimilarExercises;