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
const courseService = {
  create_Course,getCourses
};

export default courseService;