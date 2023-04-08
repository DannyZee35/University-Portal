const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({

    Course_Instructor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    courseTitle: {
        type: String,
        required: true,
    },
    courseCode: {
        type: String,
        required: true,
    },
    Section_no: {
        type: Number,
        required: true,
    },
    Instructor_name: {
        type: String,
        required: true,
    },
    semester_no: {
        type: Number,
        required: true,
    },
    introduction: {
        type: String,
        required: true,
    },
    objectives: {
        type: String,
        required: true,
    },
    contents: {
        type: [String],
        required: true,
    },
    ref_books: {
        type: [String],
        required: true,
    },
    evaluation_criteria: {
        type: [String],
        required: true,
    },
    lectureNo: {
        type: Number,
        required: true,
    },
    Date: {
        type: Date,
        required: true,
        validate: {
  validator: function(v) {
    return /^\w{3}\s\w{3}\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT[\+\-]\d{4}\s\([\w\s]+\)$/.test(v);
  },
  message: props => `${props.value} is not a valid date format (ddd MMM DD YYYY HH:mm:ss GMT+XXXX (Timezone Name))`
}

    },
    Duration: {
        type: String,
        required: true,

    },
    Topics_Covered: {
        type:String,
                required: true,

     },
    attendance_record: {
        
        url:{
            type:String,
            required:true
        }      
    },
    ref_of_lectureNotes: {
        type: String,
    },
    assignmentTask: {
        type: String,
    },
    Best_Solved_Assignment: {
        type: String,
    },
    Avg_Solved_Assignment: {
        type: String,
    },
    Worst_Solved_Assignment: {
        type: String,
    },
    Quiz_Paper: {
        type: String,
    },
    Best_Solved_Quiz: {
        type: String,
    },
    Avg_Solved_Quiz: {
        type: String,
    },
    Worst_Solved_Quiz: {
        type: String,
    },
    MidTerm: {
        type: String,
    },
    Best_Mid: {
        type: String,
    },
    Avg_Mid: {
        type: String,
    },
    Worst_Mid: {
        type: String,
    },
    Final_Paper: {
        type: String,
    },
    Best_Final: {
        type: String,
    },
    Avg_Final: {
        type: String,
    },
    Worst_Final: {
        type: String,
    },
    Project_Report: {
        type: String,
    },
    Course_Result: {
        type: String,
    },
    CLO_Assesment: {
        type: String,
    },
    Course_Review_Report: {
        type: String,
    },
});

module.exports = mongoose.model("Course", CourseSchema);
