const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');

const CreateCourseController = require('../controller/CreateCourseController');
const CoursesController = require('../controller/CoursesController');
 


const allowedInstructorRoles = ['course instructor'];
const allowedCoordinatorRoles = ['course coordinator',];
const allowedRoles = ['course coordinator', 'course instructor','head of department','course folder coordinator'];
const allowedHodRoles = ['head of department'];
const allowedFolderRoles = ['course folder coordinator'];

router.post('/create-course', authMiddleware(allowedInstructorRoles), CreateCourseController.createCourse);
router.get('/courses', authMiddleware(allowedRoles), CoursesController.getAllCoursesByUser);
router.get('/courses/:id', authMiddleware(allowedRoles), CoursesController.getSingleCourse);
router.put('/feedback/:id', authMiddleware(allowedCoordinatorRoles), CoursesController.updateCourse);
router.put('/HodFeedback/:id', authMiddleware(allowedHodRoles), CoursesController.HodUpdateCourse);
router.put('/FolderFeedback/:id', authMiddleware(allowedFolderRoles), CoursesController.FolderUpdateCourse);

module.exports = router;
