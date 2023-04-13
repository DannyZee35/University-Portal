import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { getCourses,reset } from "../../features/courses/courseSlice"
import {
    CircularProgress, Stack, Typography
  } from "@mui/material";
export const Courses=()=>{

    const dispatch = useDispatch()

    const {courses,isLoading,isError,message} =useSelector((state)=>state.course)


    useEffect(()=>{
        if(isError){
            console.log(message);
        }

        dispatch(getCourses())

        return ()=>{
            dispatch(reset())
        }
    },[isError,message,dispatch])

if (isLoading){
<CircularProgress/>
}
    return(
        <>
    
           
              {courses.map((course)=>(
                 <Stack key={course._id}>
                
                 <Typography>
                    {course.courseTitle}
                    </Typography>
                    <Typography>
                    {course.contents}
                    </Typography>
                    <Typography>
                    {course.semester_no}
                    </Typography>
                    <img src={course.attendance_record}/>
                    <Typography>
                    {course.attendance_record.url}
                    </Typography>
                 </Stack> 
              ))}
    
        
        </>
    )
}