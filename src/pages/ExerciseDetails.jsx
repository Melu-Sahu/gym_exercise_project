import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { useExerciseDetail } from '../context_data/ExerciseDetailContext';
import { FetchData } from '../utils/fetchData';


const ExerciseDetails = () => {

  const {exerciseDetail, setExerciseDetail} = useExerciseDetail();
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const {id} = useParams();

  const fetchExerciseData = async ()=>{
    const exerciseDetailData = await FetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, "exercisedb");
    setExerciseDetail(exerciseDetailData);

    const exerciseVideoData = await FetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}`, "youtube");
    setExerciseVideos(exerciseVideoData.contents);

  }

  useEffect(() => {
    fetchExerciseData();
    window.scrollTo({top: 0, behavior:'smooth'})

  }, [id]);


  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos= {exerciseVideos} name={exerciseDetail["name"]} />
      <SimilarExercises id={id} target={exerciseDetail.target} equipment={exerciseDetail.equipment}  />
    </Box>
  )
}

export default ExerciseDetails
