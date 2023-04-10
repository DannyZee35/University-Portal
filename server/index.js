const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const routes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const cors = require('cors');
const fileUpload = require('express-fileupload')
connectDB();
const app = express();

app.use(fileUpload({
    useTempFiles: true
}))
app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
 
app.use(routes);
app.use(courseRoutes);

app.listen(
    process.env.PORT,
    () => console.log("Backend is running")
)