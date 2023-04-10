import axios from "axios";


const create_Course = async (courseData,token)=>{

    const config={
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post("http://localhost:5000/create-course",courseData,config)
    return response.data
}


const courseService={
    create_Course
}


export default courseService

 
