import {
    Container,
    CircularProgress,
    Box,
    Typography,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { useParams } from "react-router-dom";
  import { getSingleCourse } from "../../features/courses/courseSlice";
  
  const drawerWidth = 300;
  


export const HodDetailsCourse=()=>{
    const { id } = useParams();
    const dispatch = useDispatch();
  
    const { singleCourse, isLoading } = useSelector((state) => state.course);
    useEffect(() => {
      dispatch(getSingleCourse(id))
    }, [dispatch, id]);
  
    if (isLoading) {
      <CircularProgress />;
    }
    return(
        <>
             <Container
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          p: 5,
          mt: 15,
        }}
      >
        {isLoading ? <CircularProgress/> : 
        
        (
          <>
          
        
        <Box>
          <Stack direction={"row"} alignItems={"flex-start"} justifyContent={"space-between"}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 10 }} gutterBottom>
              Course
            </Typography>

            <Typography
              gutterBottom
              variant="h6"
              sx={{
                fontWeight: "bold", mb: 10, mx: 25

              }}
            >
              <strong>Status: </strong>
              {singleCourse.status === "Approved" ?
                (<span style={{ backgroundColor: "#99ee99", color: '#fff', padding: '5px 6px', borderRadius: '5px' }}>{singleCourse.status} </span>)
                :
                (<span style={{ backgroundColor: "#df2c14", color: '#fff', padding: '5px 6px', borderRadius: '5px' }}>{singleCourse.status} </span>)
              }

            </Typography>

          </Stack>

          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            spacing={5}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px" }}
              gutterBottom
            >
              <strong>Course Title: </strong> {singleCourse.courseTitle}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px" }}
              gutterBottom
            >
              <strong>Course Code: </strong> {singleCourse.courseCode}
            </Typography>{" "}
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px" }}
              gutterBottom
            >
              <strong>Section No: </strong> {singleCourse.Section_no}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px" }}
              gutterBottom
            >
              <strong>Instructor Name: </strong> {singleCourse.Instructor_name}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px" }}
              gutterBottom
            >
              <strong>Semester No: </strong> {singleCourse.semester_no}
            </Typography>
          </Stack>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            <strong>Introduction</strong>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            {singleCourse.introduction}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            <strong>Objectives</strong>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            {singleCourse.objectives}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            <strong>Contents</strong>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            {singleCourse.contents}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            <strong>Reference and Text Books</strong>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            {singleCourse.ref_books}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            <strong>Evaluation Criteria</strong>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "18px", mt: 2 }}
            gutterBottom
          >
            {singleCourse.evaluation_criteria}
          </Typography>

          <TableContainer
            sx={{ border: "2px solid blue", mt: 3, mb: 5 }}
            component={Paper}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Lecture No</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">
                    Date
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">
                    Duration
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">
                    Topics Covered
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {singleCourse.lectureNo}
                  </TableCell>
                  <TableCell align="left">{singleCourse.Date}</TableCell>
                  <TableCell align="left">{singleCourse.Duration}</TableCell>
                  <TableCell align="left">
                    {singleCourse.Topics_Covered}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>


          <Box sx={{ mb: 10, mt: 3, height: '400px', width: '600px' }} >
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", }}
              gutterBottom
            >
              <strong>Attendance Record</strong>
            </Typography>


            {singleCourse.attendance_record && <img src={singleCourse.attendance_record.url} style={{ height: "100%", width: "100%" }} />}
          </Box>

          <Box sx={{ mb: 10, mt: 3, height: '400px', width: '600px' }} >
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", }}
              gutterBottom
            >
              <strong>Assignment Question Paper</strong>
            </Typography>


            {singleCourse.assignmentTask && <img src={singleCourse.assignmentTask.url} style={{ height: "100%", width: "100%" }} />}
          </Box>
          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            spacing={5}
          >

            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Best Assignment</strong>
              </Typography>

              {singleCourse.Best_Solved_Assignment && <img src={singleCourse.Best_Solved_Assignment.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Avg Assignemnt</strong>
              </Typography>

              {singleCourse.Avg_Solved_Assignment && <img src={singleCourse.Avg_Solved_Assignment.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Worst Assignment</strong>
              </Typography>

              {singleCourse.Worst_Solved_Assignment && <img src={singleCourse.Worst_Solved_Assignment.url} style={{ height: "100%", width: "100%" }} />}
            </Box>

          </Stack>
          <Box sx={{ mb: 10, mt: 15, height: '400px', width: '600px' }} >
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", }}
              gutterBottom
            >
              <strong>Quiz Question Paper</strong>
            </Typography>


            {singleCourse.Quiz_Paper && <img src={singleCourse.Quiz_Paper.url} style={{ height: "100%", width: "100%" }} />}
          </Box>


          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            spacing={5}
          >

            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Best Solved Quiz</strong>
              </Typography>

              {singleCourse.Best_Solved_Quiz && <img src={singleCourse.Best_Solved_Quiz.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Avg Solved Quiz</strong>
              </Typography>

              {singleCourse.Avg_Solved_Quiz && <img src={singleCourse.Avg_Solved_Quiz.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Worst Solved Quiz</strong>
              </Typography>

              {singleCourse.Worst_Solved_Quiz && <img src={singleCourse.Worst_Solved_Quiz.url} style={{ height: "100%", width: "100%" }} />}
            </Box>

          </Stack>

          <Box sx={{ mb: 10, mt: 15, height: '400px', width: '600px' }} >
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", }}
              gutterBottom
            >
              <strong>Mid Question Paper</strong>
            </Typography>


            {singleCourse.MidTerm && <img src={singleCourse.MidTerm.url} style={{ height: "100%", width: "100%" }} />}
          </Box>


          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            spacing={5}
          >

            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Best Solved Mid</strong>
              </Typography>

              {singleCourse.Best_Mid && <img src={singleCourse.Best_Mid.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Avg Solved Mid</strong>
              </Typography>

              {singleCourse.Avg_Mid && <img src={singleCourse.Avg_Mid.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Worst Solved Mid</strong>
              </Typography>

              {singleCourse.Worst_Mid && <img src={singleCourse.Worst_Mid.url} style={{ height: "100%", width: "100%" }} />}
            </Box>

          </Stack>

          <Box sx={{ mb: 10, mt: 15, height: '400px', width: '600px' }} >
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", }}
              gutterBottom
            >
              <strong>Final Question Paper</strong>
            </Typography>


            {singleCourse.Final_Paper && <img src={singleCourse.Final_Paper.url} style={{ height: "100%", width: "100%" }} />}
          </Box>


          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            spacing={5}
          >

            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Best Solved Final</strong>
              </Typography>

              {singleCourse.Best_Final && <img src={singleCourse.Best_Final.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Avg Solved Final</strong>
              </Typography>

              {singleCourse.Avg_Final && <img src={singleCourse.Avg_Final.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Worst Solved Final</strong>
              </Typography>

              {singleCourse.Worst_Final && <img src={singleCourse.Worst_Final.url} style={{ height: "100%", width: "100%" }} />}
            </Box>

          </Stack>

          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            spacing={5}
            sx={{ mt: 15 }}
          >

            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Course Result</strong>
              </Typography>

              {singleCourse.Course_Result && <img src={singleCourse.Course_Result.url} style={{ height: "100%", width: "100%" }} />}
            </Box>
            <Box sx={{ height: '300px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>CLO Assesment</strong>
              </Typography>

              {singleCourse.CLO_Assesment && <img src={singleCourse.CLO_Assesment.url} style={{ height: "100%", width: "100%" }} />}
            </Box>


          </Stack>

          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            spacing={5}
            sx={{ mt: 15 }}
          >

            <Box sx={{ height: '100px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Project Report</strong>
              </Typography>

              {singleCourse.Project_Report &&

                <a href={singleCourse.Project_Report.url} target="_blank" >Project Report</a>
              }
            </Box>
            <Box sx={{ height: '100px', width: '400px' }} >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", }}
                gutterBottom
              >
                <strong>Review Report</strong>
              </Typography>

              {singleCourse.ReviewReport && <a href={singleCourse.ReviewReport.url} target="_blank">Review Report</a>}
            </Box>


          </Stack>

          {singleCourse.feedback &&

            <>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", mt: 2 }}
                gutterBottom
              >
                <strong>Feedback</strong>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", mt: 2 }}
                gutterBottom
              >
                {singleCourse.feedback}
              </Typography>
           
            </>
          }

        </Box>
        </>
        )}
      </Container>
        </>
    )
}