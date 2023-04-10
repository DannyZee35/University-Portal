const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const multer = require('multer');

const courseController = require('../controller/courseController')
const upload = multer({ dest: 'uploads/' });

const allowedInstructorRoles = ['instructor'];

router.post('/create-course', authMiddleware(allowedInstructorRoles), courseController.createCourse);

module.exports = router;
