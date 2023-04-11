const Course = require('../model/CourseModel');
const path=require('path');
const cloudinary = require('../middleware/cloudinary');
 

const createCourse = async (req, res) => {
  const {
      courseTitle,
      courseCode,
      Section_no,
      Instructor_name,
      semester_no,
      introduction,
      objectives,
      contents,
      ref_books,
      evaluation_criteria,
      lectureNo,
      Date,
      Duration,
      Topics_Covered,
      attendance_record,
    ref_of_lectureNotes,
    assignmentTask,
    Best_Solved_Assignment,
    Avg_Solved_Assignment,
    Worst_Solved_Assignment,
    Quiz_Paper,
    Best_Solved_Quiz,
    Avg_Solved_Quiz,
    Worst_Solved_Quiz,
    MidTerm,
    Best_Mid,
    Avg_Mid,
    Worst_Mid,
    Final_Paper,
    Best_Final,
    Avg_Final,
    Worst_Final,
    Project_Report,
    Course_Result,
    CLO_Assesment,
    ReviewReport
   
 
    } = req.body;
  try {
    
    

    const InstructorId = req.user._id;
 
   
  
    const course = await new Course({
      Course_Instructor: InstructorId,
      courseTitle,
      courseCode,
      Section_no,
      Instructor_name,
      semester_no,
      introduction,
      objectives,
      contents,
      ref_books,
      evaluation_criteria,
      lectureNo,
      Date,
      Duration,
      Topics_Covered,
      attendance_record,
      ref_of_lectureNotes,
      assignmentTask,
      Best_Solved_Assignment,
      Avg_Solved_Assignment,
      Worst_Solved_Assignment,
      Quiz_Paper,
      Best_Solved_Quiz,
      Avg_Solved_Quiz,
      Worst_Solved_Quiz,
      MidTerm,
      Best_Mid,
      Avg_Mid,
      Worst_Mid,
      Final_Paper,
      Best_Final,
      Avg_Final,
      Worst_Final,
      Project_Report,
      Course_Result,
      CLO_Assesment,
      ReviewReport
    });

    const savedCourse = await course.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  createCourse,
};
