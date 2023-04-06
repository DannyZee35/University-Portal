const mongoose = require('mongoose');


const FeedbackSchema = mongoose.Schema({

    feedback:{
        type:String,
    },
    coordinator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
})

module.exports = mongoose.model('Feedback',FeedbackSchema);