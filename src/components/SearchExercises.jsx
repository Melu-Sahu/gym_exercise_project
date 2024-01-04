import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { FetchData } from '../utils/fetchData';
import { useExercises } from '../context_data/ExerciseDataContext';
import { useBodyPart } from '../context_data/BodyPartContext';
import HorizontalScrollbar from './HorizontalScrollbar';
import { useOneBodyPart } from '../context_data/OneBodyPartContext';

const SearchExercises = () => {

    const { setExercises } = useExercises();
    const [search, setSearch] = useState('');
    const { bodyPart, setBodyPart } = useOneBodyPart();
    const { bodyParts, setBodyParts } = useBodyPart();

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await FetchData('https://exercisedb.p.rapidapi.com/exercises?limit=500', 'exercisedb');

            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search),
            );

            setExercises(searchedExercises);
            window.scrollTo({ top: 2000, left: 100, behavior: 'smooth' });

            setSearch('');
        }
    };

    const loadBodyParts =  async ()=>{
        const bodyPartList = await FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList','exercisedb');
        setBodyParts(bodyPartList);
    }


    useEffect(()=>{
        loadBodyParts();
    },[])

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    height="76px"
                    sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
                    Search
                </Button>
            </Box>


            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>

                <HorizontalScrollbar data={bodyParts} bodyParts={true} bodyPart={bodyPart} setBodyPart={setBodyPart} />

            </Box>
        </Stack>
    );
};

export default SearchExercises;