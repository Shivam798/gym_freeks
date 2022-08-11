import React from 'react'
import { Link } from 'react-router-dom'
import { Button,Typography,Stack } from '@mui/material'


const ExerciseCard = ({key,exercise}) => {
    // console.log(exercise)
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        
        <img src={exercise.gifUrl} alt={exercise.name} Loading="lazy"></img>
        <Stack direction="row">
            <Button sx={{ml:'21px',color:'#fff',background:'#ffa9a9' ,fontSize:'14px',borderRadius:'20px' ,textTransform:'capatilize'}}>{exercise.bodyPart}</Button>
            <Button sx={{ml:'21px',color:'#fff',background:'#ffcc75' ,fontSize:'14px',borderRadius:'20px' ,textTransform:'capatilize'}}>{exercise.target}</Button>
        </Stack>
        <Typography color="#000" ml="21px" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="22px" >
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard