const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const multer = require('multer');

const CreateCourseController = require('../controller/CreateCourseController');
const CoursesController = require('../controller/CoursesController');


const allowedInstructorRoles = ['instructor'];

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
router.post('/create-course', authMiddleware(allowedInstructorRoles), CreateCourseController.createCourse);
router.get('/courses', authMiddleware(allowedInstructorRoles), CoursesController.getAllCoursesByUser);

module.exports = router;
