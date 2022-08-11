import React,{useState,useEffect} from 'react'
import { Pagination } from '@mui/material'
import { Box ,Stack,Typography } from '@mui/material'
import {exerciseOptions,fetchData} from "../util/fetchData"
import ExerciseCard from './ExerciseCard'
import { WindowRounded } from '@mui/icons-material'

const Exercise = ({bodyPart,exercises,setExercises}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisePerPage = 9
  const indexOfLastExercises = currentPage * exercisePerPage
  const indexOfFirstExercises =indexOfLastExercises-exercisePerPage
  const currentExercises = exercises.slice(indexOfFirstExercises,indexOfLastExercises)


  const paginate=(e,value)=>{
    setCurrentPage(value)
    window.scrollTo({top:1800 ,behavior:"smooth"})
  }

useEffect(() => {
  const fetchExercisesData = async () => {
    let exercisesData = [];

    if (bodyPart === 'all') {
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    } else {
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
    }

    setExercises(exercisesData);
  };

  fetchExercisesData();
}, [bodyPart]);


  return (
    <Box id="exercise"
      sx={{
        mt:{lg:"110px"}
      }}
      mt="50px"
      p="20x"
    >
      <Typography variant ="h4" mb="46px" >
        Showing Result
      </Typography>
      <Stack 
      
        direction="row" 
        sx={{gap:{lg:"110px", xs:"50px" }}}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise,index) =>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}

      </Stack>
      <Stack mt="100px" alignItems="center" >
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length/exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}

      </Stack>
    </Box>
    // <>asf</>
  )
}

export default Exercise