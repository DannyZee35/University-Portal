const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');

const CreateCourseController = require('../controller/CreateCourseController');
const CoursesController = require('../controller/CoursesController');
const feedbackController = require('../controller/feedbackController');


const allowedInstructorRoles = ['instructor'];
const allowedhodRoles = ['coordinator',];
const allowedRoles = ['coordinator', 'instructor','hod'];

router.post('/create-course', authMiddleware(allowedInstructorRoles), CreateCourseController.createCourse);
router.get('/courses', authMiddleware(allowedRoles), CoursesController.getAllCoursesByUser);
router.get('/courses/:id', authMiddleware(allowedRoles), CoursesController.getSingleCourse);
router.put('/feedback/:id', authMiddleware(allowedhodRoles), CoursesController.updateCourse);
 
module.exports = router;
