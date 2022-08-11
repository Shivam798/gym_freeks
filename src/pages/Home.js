
import React ,{useState} from 'react'
import {Box} from "@mui/material"
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercise from '../components/Exercise'


const Home = () => {
  const [bodyPart, setBodyPart] = useState("all")
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner/>
      <SearchExercise
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
        
      />
      <Exercise
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
    </Box>
  )
}

export default Home