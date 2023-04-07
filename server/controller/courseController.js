const Course = require('../model/CourseModel');
const cloudinary= require('../middleware/cloudinary'); 



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
            attendance_record
        } = req.body;
        const InstructorId = req.user._id;

        const result = await cloudinary.uploader.upload(attendance_record, {
            folder: 'Attendance',
            width: 200
          });
      
        
        const course = await new Course({
            Course_Instructor:InstructorId,
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
                public_id: result.public_id,
                url: result.secure_url
              }
        });
        
        const savedCourse = await course.save();
        res.status(201).json(savedCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

module.exports={
    createCourse
}