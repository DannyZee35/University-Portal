const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({

    Course_Instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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
            validator: function (v) {
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
        type: String,
        required: true,

    },
    attendance_record: {
        type: String,
        required: true
    },

    ref_of_lectureNotes: {
        type: String,
        required: true
    },
    assignmentTask: {
            type: String,
            required:true
    },
    Best_Solved_Assignment: {
            type: String,
            required:true
        
    },
    Avg_Solved_Assignment: {
       
            type: String,
            required:true
       
    },
    Worst_Solved_Assignment: {
      
            type: String,
            required:true
    
    },
    Quiz_Paper: {
     
            type: String,
            required:true
        
    },
    Best_Solved_Quiz: {
      
            type: String,
            required:true
        
    },
    Avg_Solved_Quiz: {
     
            type: String,
            required:true
    
    },
    Worst_Solved_Quiz: {
        
            type: String,
            required:true
        
    },
    MidTerm: {
        
            type: String,
            required:true
        
    },
    Best_Mid: {
     
            type: String,
            required:true
        
    },
    Avg_Mid: {
       
            type: String,
            required:true
        
    },
    Worst_Mid: {
     
            type: String,
            required:true
        
    },
    Final_Paper: {
     
            type: String,
            required:true
        
    },
    Best_Final: {
       
            type: String,
            required:true
        
    },
    Avg_Final: {
        
            type: String,
            required:true
        
    },
    Worst_Final: {
       
            type: String,
            required:true
        
    },
    Project_Report: {
      
            type: String,
            required:true

        
        },
    Course_Result: {
      
            type: String,
            required:true
        
    },
 CLO_Assesment: {
   
            type: String,
            required:true
        
    },
    ReviewReport: {
   
        type: String,
        required:true
    
},
});

module.exports = mongoose.model("Course", CourseSchema);
