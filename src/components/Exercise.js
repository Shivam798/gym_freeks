import React,{useState,useEffect} from 'react'
import { Pagination } from '@mui/material'
import { Box ,Stack,Typography } from '@mui/material'
import {exerciseOptions,fetchData} from "../util/fetchData"
import ExerciseCard from './ExerciseCard'

const Exercise = ({bodyPart,exercises,setExercises}) => {
  console.log(exercises)
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
        {exercises.map((exercise,index) =>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}

      </Stack>
    </Box>
    // <>asf</>
  )
}

export default Exercise