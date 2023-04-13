const Course = require('../model/CourseModel');






const getAllCoursesByUser = async (req, res) => {
  try {
    const userId = req.user._id; // User ID of the logged in user
    const courses = await Course.find({ Course_Instructor: userId });
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
module.exports = {
  
  getAllCoursesByUser
};
