const express=require('express');
const router=express.Router();
const authController=require('../controller/authController');
const {authMiddleware}=require('../middleware/auth');

const allowedInstructorRoles = ['instructor'];
const allowedHodRoles = ['hod'];
const allowedCoordinatorRoles = ['coordinator'];

router.get('/', authMiddleware(allowedInstructorRoles), authController.home);
router.get('/hod', authMiddleware(allowedHodRoles), authController.hod);
router.get('/cc', authMiddleware(allowedCoordinatorRoles), authController.cc);

router.post('/signup',authController.registerUser);

router.post('/login',authController.login);

module.exports=router;