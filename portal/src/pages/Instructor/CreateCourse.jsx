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
import {useSelector,useDispatch} from "react-redux"
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
    ref_of_lectureNotes:""
   // att: "",
   // ref_of_lectureNotes: null,
    // below here
  //  Project_Report: "",
   // Course_Review_Report: ""
  });
  const [loading, setLoading] = useState(false)
//  const [postImage, setPostImage] = useState( { ref_of_lectureNotes : ""})
const {isLoading}=useSelector((state)=>state.course)
  const dispatch=useDispatch()

 

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    SetCourseForm({ ...CourseForm, ref_of_lectureNotes: base64 });
  }
  function convertToBase64(file){
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
  }
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
   // else if (name === "ref_of_lectureNotes") {
  //    SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
  //  }
    // below here


    //else if (name === "Project_Report") {
   //   SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
 //   }
  //  else if (name === "Course_Review_Report") {
  //    SetCourseForm({ ...CourseForm, [name]: event.target.files[0] });
  //  } 
  else {
      SetCourseForm({ ...CourseForm, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem("token")).token;
 

     
     await dispatch(create_Course(CourseForm));
     setLoading(true);
     {/** FROM HERE  */}
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
        <form type="submit"  encType="multipart/form-data">
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
            {/** 
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
                      name="att"
                      onChange={handleChange}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.att && (
                    <img
                      src={URL.createObjectURL(CourseForm.att)}
                      alt="Attendance Record"
                      height={200}
                      width={200}
                    />
                  )}
                </Stack>

              <Stack direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={4}>

              </Stack>
*/}
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
                      onChange={(e) => handleFileUpload(e)}
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {CourseForm.ref_of_lectureNotes && (
                    <img
                      src={CourseForm.ref_of_lectureNotes}
                      alt="Lecture Notes"
                      height={200}
                      width={200}
                    />
                  )}
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
