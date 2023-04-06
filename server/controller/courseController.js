const Course = require('../model/CourseModel');
const User = require('../model/UserModel');



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
        } = req.body;

        const InstructorId = req.user._id;

        const course = new Course({
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