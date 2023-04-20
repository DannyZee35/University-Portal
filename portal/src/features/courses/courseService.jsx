import axios from "axios";

const create_Course = async (courseData, token) => {
 
 
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  try {
    const response = await axios.post(
      "http://localhost:5000/create-course",
      courseData,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//get courses
const getCourses = async (token) => {
 
 
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        
      },
    };
  
    try {
      const response = await axios.get(
        "http://localhost:5000/courses",
        config
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


  const updateCourse = async (courseID, courseData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(config);
    console.log(courseData);

    try {
      const response = await axios.put(
        `http://localhost:5000/feedback/${courseID}`,
        courseData,
        config
      )
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
 

  const getSingleCourse = async (courseID, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(`http://localhost:5000/courses/${courseID}`, config)
  
    return response.data
  }
const courseService = {
  create_Course,getCourses,
  getSingleCourse,
  updateCourse,
   
};

export default courseService;