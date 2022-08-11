import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import {Box} from "@mui/material"
import {exerciseOptions,fetchData, youtubeOptions} from "../util/fetchData"
import Detail from "../components/Detail"
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercise from "../components/SimilarExercise";


const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail]=useState({});
  const [exerciseVideos, setExerciseVideos] = useState([])
  const {id} =useParams();
  useEffect(() => {
    const fetchExerciseData = async()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearch = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideoData = await fetchData (`${youtubeSearch}/search?q=${exerciseDetailData.name}`,youtubeOptions)
      setExerciseVideos(exerciseVideoData)
    }
    fetchExerciseData();
  }, [id])
  
  return (
    <Box>
       <Detail exerciseDetail={exerciseDetail}/>
       <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
       <SimilarExercise/>
    </Box>
  )
}

export default ExerciseDetail