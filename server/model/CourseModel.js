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
    //attendance_record: {
        
        //attendance_url:{
        //    type:String,
//required:true
     //   }      
  //  },
    
  // yha att ae ga

  // yha tk
    ref_of_lectureNotes: {
       
            type:String,
         required:true
    },
   
    // yha se neche add krna
 
});

module.exports = mongoose.model("Course", CourseSchema);
