import { Container, Stack, Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { tr } from "date-fns/locale";
import { useState } from "react";
import jwt_decode from 'jwt-decode';

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
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "contents") {
      SetCourseForm({ ...CourseForm, [name]: value.split(",") });
    } else if (name === "refBooks") {
      SetCourseForm({ ...CourseForm, [name]: value.split(",") });
    } else if (name === "evaluationCriteria") {
      SetCourseForm({ ...CourseForm, [name]: value.split(",") });
    } else {
      SetCourseForm({ ...CourseForm, [name]: value });
    }
  };

  const handleSubmit= async (e)=>{
  e.preventDefault();
  try {
    const token = JSON.parse(localStorage.getItem('token')).token;

 console.log("this token:" ,token);
    const response = await axios.post("http://localhost:5000/create-course", CourseForm,
    {
      headers:{
        Authorization: `Bearer ${token}`
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
