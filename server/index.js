const express=require('express');
const colors=require('colors');
const dotenv=require('dotenv').config();
const connectDB=require('./config/db');
const bodyParser = require('body-parser');
const routes=require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const cors = require('cors');

connectDB();
const app=express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
app.use(courseRoutes);

app.listen(
    process.env.PORT,
    ()=>console.log("Backend is running")
)