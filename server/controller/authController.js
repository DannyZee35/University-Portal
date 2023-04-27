const jwt=require('jsonwebtoken');
const User= require('../model/UserModel');
const dotenv=require('dotenv').config();


const registerUser = async (req, res) => {
  const { username, password,role } = req.body

  if (!username || !password || !role) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if user exists
  const userExists = await User.findOne({ username })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

 
  // Create user
  const user = await User.create({
    username,
    password,
    role,
  })
  const token=jwt.sign({id: user._id ,user},process.env.SECRET_KEY,{expiresIn:'30d'});

  if (user) {
    res.send({ token,id: user._id ,user,UserRole:user.role });
 
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
}

const login = async (req, res) => {
    try {
      const { username, password } = req.body;

      const user= await User.findOne({username,password});

      if(!user) {
        return res.status(401).send("Invalid username or password");
      }

      const token=jwt.sign({id: user._id ,user},process.env.SECRET_KEY,{expiresIn:'30d'});
      res.send({ token,id: user._id ,user,UserRole:user.role });
       

    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      }    
  };


  const home = (req, res) => {
    res.send('Welcome to the home page!');
  }
  const hod = (req, res) => {
    res.send('hello iam hod');
  }

  const cc = (req, res) => {
    res.send('hello iam cc');
  }
module.exports={
    login,
    home,
    cc,
    hod,
    registerUser
}
