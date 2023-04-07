import { Container, Stack, Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { tr } from "date-fns/locale";
import { useState } from "react";
import jwt_decode from 'jwt-decode';
import { DateField } from '@mui/x-date-pickers/DateField';



const drawerWidth = 10;
export const CreateCourse = () => {
  const [CourseForm, SetCourseForm] = useState({
    courseTitle: "",
    courseCode: "",
    Section_no: "",
    Instructor_name: "",
    semester_no: "",
    introduction: "",
    objectives: "",
    contents: "",
    refBooks: "",
    evaluationCriteria: "",
    lectureNo: "",
    Date:"",
    Duration:"",
    Topics_Covered:"",
    attendance_record:""
    
  });
  const [attendanceRecordFile, setAttendanceRecordFile] = useState(null);

    //handle and convert it in base 64
    const handleImage = (e) => {
      const file = e.target.files[0];
    
      setFileToBase(file);
      console.log(file);
    }
    

  const setFileToBase = (file) =>{
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () =>{
        setAttendanceRecordFile(reader.result);
      }

  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "contents") {
      SetCourseForm({ ...CourseForm, [name]: value.split(",") });
    } else if (name === "refBooks") {
      SetCourseForm({ ...CourseForm, [name]: value.split(",") });
    } else if (name === "evaluationCriteria") {
      SetCourseForm({ ...CourseForm, [name]: value.split(",") });
    }  else {
      SetCourseForm({ ...CourseForm, [name]: value });
    }
  };

  const handleSubmit= async (e)=>{
  e.preventDefault();
  try {
    const token = JSON.parse(localStorage.getItem('token')).token;

 console.log("this token:" ,token);
 console.log("this token:" ,CourseForm);

 const formData = new FormData();
 formData.append('attendance_record', attendanceRecordFile); // append the file here
 formData.append('courseTitle', CourseForm.courseTitle);
 formData.append('courseCode', CourseForm.courseCode);
 formData.append('Section_no', CourseForm.Section_no);
 formData.append('Instructor_name', CourseForm.Instructor_name);
 formData.append('semester_no', CourseForm.semester_no);
 formData.append('introduction', CourseForm.introduction);
 formData.append('objectives', CourseForm.objectives);
 formData.append('contents', CourseForm.contents);
 formData.append('refBooks', CourseForm.refBooks);
 formData.append('evaluationCriteria', CourseForm.evaluationCriteria);
 formData.append('lectureNo', CourseForm.lectureNo);
 formData.append('Date', CourseForm.Date);
 formData.append('Duration', CourseForm.Duration);
 formData.append('Topics_Covered', CourseForm.Topics_Covered);
  const response = await axios.post("http://localhost:5000/create-course", formData,
    {
      headers:{
        'Content-Type': 'multipart/form-data',

        Authorization: `Bearer ${token}`,
 
      }
    });
    if (response.status === 201) {
      console.log(response.data)
      SetCourseForm({
        courseTitle: "",
        courseCode: "",
        Section_no: "",
        Instructor_name: "",
        semester_no: "",
        introduction: "",
        objectives: "",
        contents: "",
        refBooks: "",
        evaluationCriteria: "",
        lectureNo: "",
        Date:"",
        Duration:"",
        Topics_Covered:"",
        attendance_record:""
        
      });
    }
  }
  catch (error) {
    console.log(error);
  }
};


  return (
    <>
      <Container
        maxWidth={"lg"}
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
          mt: 10,
        }}
      >
        <Typography sx={{ color: "black" }} variant="h3">
          Add Course
        </Typography>
        <Box component="form" sx={{ mt: 10 }} noValidate type="submit"> 
          <Stack direction={"column"} spacing={3}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}
            >
              <TextField
                type="text"
                label="Course Title"
                name={"courseTitle"}
                value={CourseForm.courseTitle}
                onChange={handleChange}
                 
              />
              <TextField
                type="text"
                label="Course Code"
                name={"courseCode"}
                value={CourseForm.courseCode}
                onChange={handleChange}
              />
              <TextField
                type="number"
                label="Section No"
                name={"Section_no"}
                value={CourseForm.Section_no}
                onChange={handleChange}
              />
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}
            >
              <TextField
                type="text"
                label="Instructor Name"
                name={"Instructor_name"}
                value={CourseForm.Instructor_name}
                onChange={handleChange}
              />
              <TextField
                type="number"
                label="Semester No"
                name={"semester_no"}
                value={CourseForm.semester_no}
                onChange={handleChange}
              />
            </Stack>
            <Typography sx={{ color: "black" }} variant="h5">
              Introduction
            </Typography>
            <TextField
              sx={{ width: "800px" }}
              type="text"
              label="Introduction of Course"
              multiline
              rows={5}
              name={"introduction"}
              value={CourseForm.introduction}
              onChange={handleChange}
            />

            <Typography sx={{ color: "black" }} variant="h5">
              Objectives
            </Typography>
            <TextField
              sx={{ width: "800px" }}
              type="text"
              label="Objectives of Course"
              multiline
              rows={5}
              name={"objectives"}
              value={CourseForm.objectives}
              onChange={handleChange}
            />

            <Typography sx={{ color: "black" }} variant="h5">
              Contents
            </Typography>
            <TextField
              sx={{ width: "800px" }}
              type="text"
              label="Contents of Course"
              multiline
              rows={5}
              name={"contents"}
              value={CourseForm.contents}
              onChange={handleChange}
            />

            <Typography sx={{ color: "black" }} variant="h5">
              Reference Books
            </Typography>
            <TextField
              sx={{ width: "800px" }}
              type="text"
              label="Reference Books"
              multiline
              rows={5}
              name={"refBooks"}
              value={CourseForm.refBooks}
              onChange={handleChange}
            />

            <Typography sx={{ color: "black" }} variant="h5">
              Evaluation Criteria
            </Typography>
            <TextField
              sx={{ width: "800px" }}
              type="text"
              label="Evaluation Criteria"
              multiline
              rows={5}
              name={"evaluationCriteria"}
              value={CourseForm.evaluationCriteria}
              onChange={handleChange}
            />

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}
            >
              <TextField
                type="number"
                label="Lecture No"
                name={"lectureNo"}
                value={CourseForm.lectureNo}
                onChange={handleChange}
              />
       <TextField
                type="text"
               label="YYYY/MM/DD"
                name={"Date"}
                value={CourseForm.Date}
                onChange={handleChange}
              />
       <TextField
                type="text"
               label="Duration"
                name={"Duration"}
                value={CourseForm.Duration}
                onChange={handleChange}
              />
             
            </Stack>
            <Typography sx={{ color: "black" }} variant="h5">
            Topics Covered
            </Typography>
            <TextField
                type="text"
                sx={{ width: "800px" }}

               label="Topics Covered"
                name={"Topics_Covered"}
                multiline
                rows={4}
                value={CourseForm.Topics_Covered}
                onChange={handleChange}
              />

<Typography sx={{ color: "black" }} variant="h5">
            Attendance Record
            </Typography>
 
            <Stack
              direction="row" 
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4} 
            >
             <Button variant="contained" component="label">
  Upload
  <input hidden name="attendance_record" onChange={handleImage} accept="image/*" multiple type="file" />
</Button>
{attendanceRecordFile && (
  <img src={attendanceRecordFile} />
)}
            </Stack>
            <Button variant="contained" size="large" type="submit" color="primary" onClick={handleSubmit}> 
             Add 
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
