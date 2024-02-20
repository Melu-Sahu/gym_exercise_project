import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';



const HorizontalScrollbar = ({ data, bodyParts, bodyPart, setBodyPart }) => {

  const scrollPrev = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1000;
  }


  const scrollNext = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1000;
  }


  return (
    <>

      <ul className='flex flex-row gap-4 list-none overflow-y-auto scroll-smooth ' id='slider' >

        <Typography onClick={() => scrollPrev()} className="right-arrow">
          <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>

        {data.map((item) => (
          <li
            key={item.id || item}>
            <Box
              itemID={item.id || item}
              title={item.id || item}
              m="0 40px"
            >
              {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}

            </Box>
          </li>
        ))}

        <Typography onClick={() => scrollNext()} className="left-arrow">
          <img src={RightArrowIcon} alt="right-arrow" />
        </Typography >

      </ul>
    </>
  );
}
export default HorizontalScrollbar;
