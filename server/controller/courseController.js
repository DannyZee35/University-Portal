const Course = require('../model/CourseModel');
const cloudinary = require('../middleware/cloudinary');
const multer = require('multer');
 
 

const createCourse = async (req, res) => {
  try {
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
      attendance_record, // receive the image URL from the request body
    } = req.body;

    const InstructorId = req.user._id;
    const file=req.files.attendance_record

    const result =await cloudinary.uploader.upload(file.tempFilePath,
      {
        folder:"Attendance"
      },
      (err,result)=>{
     
       
    })
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
      attendance_record: {
        url: result.url, // use the received image URL
      },
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

