import {
  Container,
  Stack,
  Box,
  Typography,
  TextField,
  Button, CircularProgress
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { CloudinaryContext } from "cloudinary-react";
import { useSelector, useDispatch } from "react-redux"
import { create_Course } from "../../features/courses/courseSlice";


const { URL } = window;

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
    ref_books: "",
    evaluation_criteria: "",
    lectureNo: "",
    Date: "",
    Duration: "",
    Topics_Covered: "",
    attendance_record: "",
    ref_of_lectureNotes: "",
    assignmentTask:"",
    Best_Solved_Assignment: "",
    Avg_Solved_Assignment: "",
    Worst_Solved_Assignment: "",
    Quiz_Paper: "",
    Best_Solved_Quiz: "",
    Avg_Solved_Quiz: "",
    Worst_Solved_Quiz: "",
    MidTerm: "",
    Best_Mid: "",
    Avg_Mid: "",
    Worst_Mid: "",
    Final_Paper: "",
    Best_Final: "",
    Avg_Final: "",
    Worst_Final: "",
    Project_Report: "",
    Course_Result: "",
    CLO_Assesment: "",
    ReviewReport: ""
  });
 
 
  const [projectReportFileName, setProjectReportFileName] = useState("");
  const [reviewReportFileName, setReviewReportFileName] = useState("");

  const { isLoading } = useSelector((state) => state.course)
  const dispatch = useDispatch()


  const handleFileUpload = async (e, fieldName) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      SetCourseForm({
        ...CourseForm,
        [fieldName]: reader.result,
      });
    };
    const fileName = file.name;
    if (fieldName === "Project_Report") {
      setProjectReportFileName(fileName);
    } else if (fieldName === "ReviewReport") {
      setReviewReportFileName(fileName);
    }
  };
    {/**
  const handleFileUpload = async (e, fieldName) => {
    const file = e.target.files[0];
    const blob = new Blob([file], { type: file.type });
  
    SetCourseForm({ ...CourseForm, [fieldName]: blob.toString() });
    const fileName = file.name;
    if (fieldName === "Project_Report") {
      setProjectReportFileName(fileName);
    } else if (fieldName === "ReviewReport") {
      setReviewReportFileName(fileName);
    }
  };
  

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  } */}
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "contents") {
      SetCourseForm({ ...CourseForm, [name]: value.split(",") });
    } else if (name === "ref_books") {
      SetCourseForm({ ...CourseForm, [name]: value.split(",") });
    } else if (name === "evaluation_criteria") {
      SetCourseForm({ ...CourseForm, [name]: value.split(",") });
    } //else if (name === "att") {
    //SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
    // } 
  
    else {
      SetCourseForm({ ...CourseForm, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
 await dispatch(create_Course(CourseForm));
 console.log(CourseForm)
      
   
    } catch (error) {
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
        <form type="submit" encType="multipart/form-data">
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
              name={"ref_books"}
              value={CourseForm.ref_books}
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
              name={"evaluation_criteria"}
              value={CourseForm.evaluation_criteria}
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

            <Stack direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}>
              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


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
                    <input
                      hidden
                      name="attendance_record"
                      onChange={(e) => handleFileUpload(e, "attendance_record")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.attendance_record && (
                    <img
                      src={CourseForm.attendance_record}
                      alt="Attendance Record"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Reference of Lecture Notes
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="ref_of_lectureNotes"
                      onChange={(e) => handleFileUpload(e, "ref_of_lectureNotes")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.ref_of_lectureNotes && (
                    <img
                      src={CourseForm.ref_of_lectureNotes}
                      alt="ref of lectureNotes"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Assignment Question Paper
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="assignmentTask"
                      onChange={(e) => handleFileUpload(e, "assignmentTask")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.assignmentTask && (
                    <img
                      src={CourseForm.assignmentTask}
                      alt="Assignment Task"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>
            </Stack>


{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
<Stack direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}>
              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Best Solved Assignment         
                       </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Best_Solved_Assignment"
                      onChange={(e) => handleFileUpload(e, "Best_Solved_Assignment")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Best_Solved_Assignment && (
                    <img
                      src={CourseForm.Best_Solved_Assignment}
                      alt="Best Solved Assignment"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Avg Solved Assignment  
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Avg_Solved_Assignment"
                      onChange={(e) => handleFileUpload(e, "Avg_Solved_Assignment")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Avg_Solved_Assignment && (
                    <img
                      src={CourseForm.Avg_Solved_Assignment}
                      alt="Avg Solved Assignment"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Worst Solved Assignment
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Worst_Solved_Assignment"
                      onChange={(e) => handleFileUpload(e, "Worst_Solved_Assignment")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Worst_Solved_Assignment && (
                    <img
                      src={CourseForm.Worst_Solved_Assignment}
                      alt="Worst Solved Assignment"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>
            </Stack>

{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
<Stack direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}>
              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                  Quiz Question Paper
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Quiz_Paper"
                      onChange={(e) => handleFileUpload(e, "Quiz_Paper")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Quiz_Paper && (
                    <img
                      src={CourseForm.Quiz_Paper}
                      alt="Quiz Paper"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Best Solved Quiz
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Best_Solved_Quiz"
                      onChange={(e) => handleFileUpload(e, "Best_Solved_Quiz")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Best_Solved_Quiz && (
                    <img
                      src={CourseForm.Best_Solved_Quiz}
                      alt="Best Solved Quiz"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Avg Solved Quiz
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Avg_Solved_Quiz"
                      onChange={(e) => handleFileUpload(e, "Avg_Solved_Quiz")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Avg_Solved_Quiz && (
                    <img
                      src={CourseForm.Avg_Solved_Quiz}
                      alt="Attendance Record"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>
            </Stack>

            {/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
<Stack direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}>
              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Worst Solved Quiz
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Worst_Solved_Quiz"
                      onChange={(e) => handleFileUpload(e, "Worst_Solved_Quiz")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Worst_Solved_Quiz && (
                    <img
                      src={CourseForm.Worst_Solved_Quiz}
                      alt="Worst_Solved_Quiz"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Mid Term
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="MidTerm"
                      onChange={(e) => handleFileUpload(e, "MidTerm")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.MidTerm && (
                    <img
                      src={CourseForm.MidTerm}
                      alt="MidTerm"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Best Mid
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Best_Mid"
                      onChange={(e) => handleFileUpload(e, "Best_Mid")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Best_Mid && (
                    <img
                      src={CourseForm.Best_Mid}
                      alt="Best_Mid"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>
            </Stack>

            {/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
<Stack direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}>
              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Avg Mid
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Avg_Mid"
                      onChange={(e) => handleFileUpload(e, "Avg_Mid")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Avg_Mid && (
                    <img
                      src={CourseForm.Avg_Mid}
                      alt="Quiz Paper"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Worst Mid
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Worst_Mid"
                      onChange={(e) => handleFileUpload(e, "Worst_Mid")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Worst_Mid && (
                    <img
                      src={CourseForm.Worst_Mid}
                      alt="Worst_Mid"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Final Paper
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Final_Paper"
                      onChange={(e) => handleFileUpload(e, "Final_Paper")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Final_Paper && (
                    <img
                      src={CourseForm.Final_Paper}
                      alt="Final_Paper"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>
            </Stack>

            {/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
<Stack direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}>
              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Best Final
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Best_Final"
                      onChange={(e) => handleFileUpload(e, "Best_Final")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Best_Final && (
                    <img
                      src={CourseForm.Best_Final}
                      alt="Best_Final"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Avg Final
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Avg_Final"
                      onChange={(e) => handleFileUpload(e, "Avg_Final")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Avg_Final && (
                    <img
                      src={CourseForm.Avg_Final}
                      alt="Avg_Final"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Worst Final
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Worst_Final"
                      onChange={(e) => handleFileUpload(e, "Worst_Final")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Worst_Final && (
                    <img
                      src={CourseForm.Worst_Final}
                      alt="Best Mid"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>
            </Stack>
           
                      {/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
<Stack direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}>
              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Course Result
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Course_Result"
                      onChange={(e) => handleFileUpload(e, "Course_Result")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.Course_Result && (
                    <img
                      src={CourseForm.Course_Result}
                      alt="Course_Result"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                CLO Assesment
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="CLO_Assesment"
                      onChange={(e) => handleFileUpload(e, "CLO_Assesment")}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.CLO_Assesment && (
                    <img
                      src={CourseForm.CLO_Assesment}
                      alt="CLO_Assesment"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>
              </Stack> 
            </Stack>
                                 {/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------- */}
<Stack direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={4}>
              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Project Report
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="Project_Report"
                      onChange={(e) => handleFileUpload(e, "Project_Report")}
                      accept=".doc,.docx,.pdf"
                      type="file"
                    />
                  </Button>
                  {projectReportFileName && <Typography>{projectReportFileName}</Typography>}

                </Stack>
              </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>


                <Typography sx={{ color: "black" }} variant="h5">
                Course Review Report
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      name="ReviewReport"
                      onChange={(e) => handleFileUpload(e, "ReviewReport")}
                      accept=".doc,.docx,.pdf"
                      type="file"
                    />
                  </Button>
                  {reviewReportFileName && <Typography>{reviewReportFileName}</Typography>}

                </Stack>
              </Stack> 
            </Stack>
           
            {/* 
              </Stack>

*/}



            {/* For Assingment Tasks  */}

            {/** yha se neche */}

            {/*  Project Report */}


            {isLoading ? (
              <CircularProgress />
            ) : (
              <Button
                variant="contained"
                size="large"
                type="submit"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            )}

          </Stack>
        </form>
      </Container>
    </>
  );
};
