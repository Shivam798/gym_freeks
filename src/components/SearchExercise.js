import React,{useEffect,useState} from 'react'
import HorizontalScrollbar from "./HorizontalScrollbar"
import { Box,Button,Stack,TextField,Typography } from '@mui/material'
import { textTransform } from '@mui/system'
import { exerciseOptions,fetchData } from '../util/fetchData'



const SearchExercise = () => {
    const [search, setSearch] = useState("")
    const [exercises, setExercises] = useState([]);
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData= async()=>{
            const bodyPartsData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
            setBodyParts(['all',...bodyPartsData]);
            
        }
    }, [])
    

    const handSearch= async () =>{
        if (search){
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
            console.log(exerciseData)
            const searchExercises= exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search) 
                    || exercise.target.toLowerCase().includes(search) 
                    || exercise.bodyPart.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search) 
            );
            
            setSearch("");
            setExercises(searchExercises)
                
        }

    }
    return (
    
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
          <Typography
              fontWeight={700}
              sx={{fontSize:{lg:"44px",xs:"30px"}}}
              mb="50px"
              textAlign="center"    
          >
              Awesome Exercise You Should Know
          </Typography>
          <Box position="relative" mb="72px">

              <TextField 
                  sx={{input:{
                          fontWeight:"700",
                          border:"none",
                          borderRadius:"4px"
                          },
                      width:{
                          lg:"800px",
                          xs:"350px"

                          },
                      background:"#fff",
                      borderRadius:"40px"
                      }}
                  height="76px"
                  value={search}
                  onChange={(e)=>setSearch(e.target.value.toLowerCase())}
                  placeholder="Search Exercises"
                  type="text"
                    

              />
              <Button 
                  className='search-btn'
                  sx={{
                     bgcolor:"#FF2625",
                     color:"#fff",
                     textTransform: "none",
                     width:{
                          lg:"175px",
                          xs:"80px"
                     },
                     fontSize:{
                          lg:"20px",
                          xs:"14px"
                     },
                     height:"56px",
                  //    when  we have to put search button on seaarch bar use following code 
                     position:"absolute",
                     right:"0"

                  }} 
                  onClick={handSearch}   
              >
                  Search
              </Button>

          </Box>
          <Box sx={{position:"relative",width:'100%',p:"20px"}}
                // <HorizontalScrollbar data={bodyParts}/>
            >

          </Box>

      </Stack>
    )
}

export default SearchExercise