const jwt=require('jsonwebtoken');
const User= require('../model/UserModel');
const dotenv=require('dotenv').config();


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
    hod
}
