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
    //  att,
    ref_of_lectureNotes,
     
      // yha se neche add krna
    //  CLO_Assesment,
    //  Course_Review_Report
 
    } = req.body;
  try {
    
    

    const InstructorId = req.user._id;
    //const attendance_record_Files = req.files.att
 
  //  const lecture_Files = req.files.ref_of_lectureNotes.tempFilePath;
    
    // yha se neche 


    
      //const attendance_record_Result = await cloudinary.uploader.upload(attendance_record_Files.tempFilePath,
     //   {
    //      folder: "Attendance"
    //    },)
  //  const lecResult = await cloudinary.uploader.upload(lecture_Files, {
    //  folder: "Lecture Notes"
  //  });
   // yha se neche

  //console.log(lecResult)
 //   const CourseResult = await cloudinary.uploader.upload(Course_Result_Files.tempFilePath,
  //    {
   //     folder: "Course Result"
   //   },)

  //  const CloResult = await cloudinary.uploader.upload(CLO_Assesment_Files.tempFilePath,
 //     {
////        folder: "CLO Assesment"
   //   },)
   
  
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
      ref_of_lectureNotes
  //    att: {
 //       attendance_url: attendance_record_Result.url,  
 //    },
     //ref_of_lectureNotes: lecResult.url, // use the received image URL
     
    
      // below here

  //    Project_Report:{
  //      project_url:Project_Report_Result.url
   //   },
  //    Course_Result: {
     //   courseResult_URL: CourseResult.url, // use the received image URL
   //   },
  //    CLO_Assesment: {
    //    Clo_Url: CloResult.url, // use the received image URL
    ///  },
 //     Course_Review_Report: {
      //  Review_URL: Review_Result.url, 
      //},
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
