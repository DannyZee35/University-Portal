

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, login, register } from "../features/auth/authSlice";
import {
  Container,
  Box,
  TextField,
  Stack,
  Button,
  Typography,
  FormControl,RadioGroup,FormControlLabel,Radio
} from "@mui/material";
import custLogo from "../assets/cust.png"
import { withAuth } from "./withAuth";
import { alpha, styled } from "@mui/material/styles";

const drawerWidth = 300;



export const SignUp=()=>{
    const navigate= useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const dispatch = useDispatch()
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
      )

      useEffect(() => {
        if (isError) {
          console.log(isError)
        }
    
        if (isSuccess || user) {
          navigate('/')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const userData = {
            username,
            password,
            role,
          };
      
          dispatch(register(userData));
        } catch (error) {
          console.log(error);
        }
      };
      
      useEffect(() => {
        if (isSuccess && role) {
          switch (role) {
            case "instructor":
              navigate("/InstDashboard");
              break;
            case "coordinator":
              navigate("/dashboard");
              break;
            case "hod":
              navigate("/hod-dashboard");
              break;
            case "convenor":
              navigate("/convenor-dashboard");
              break;
            default:
              navigate("/");
              break;
          }
        }
      }, [isSuccess, user, navigate]);
      
    return(

        <>
         <Container sx={{}}>
      <Box
        component="form"
        sx={{
          p: 5,
          mx: 35,
          mt: 5,
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >   
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <img src={custLogo} height={200} width={200}/>
          <Typography variant="h6" color={"primary"}>
          Web Based Course Folders Management System
          </Typography>
        

         
          <TextField
            label="Username"
            type="text"
            fullWidth
            value={username}
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
           <Stack
            direction="row" // New stack direction
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <FormControlLabel
                  value="instructor"
                  control={<Radio />}
                  label="Course Instructor"
                />
                <FormControlLabel
                  value="coordinator"
                  control={<Radio />}
                  label="Course Coordinator"
                />
                <FormControlLabel
                  value="hod"
                  control={<Radio />}
                  label="Head of Department"
                />
                <FormControlLabel
                  value="convenor"
                  control={<Radio />}
                  label="Course Folder Convenor"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
          <Button
            sx={{ textTransform: "none" }}
            size="large"
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            SignUp
          </Button>
      
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Typography>Already Have An Account?</Typography>
          <Button sx={{textTransform:'none'}} size="large" onClick={(e)=>navigate('/')}> 
            Login
          </Button>
          </Stack>
          
        </Stack>
      
      </Box>
    </Container>
        
        </>
    )
}