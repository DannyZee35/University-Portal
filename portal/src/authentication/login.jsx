import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, login } from "../features/auth/authSlice";
import {
  Container,
  Box,
  TextField,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const drawerWidth = 300;
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submission behavior

    try {
      const userData = {
        username,
        password,
      };
      const response = await axios.post(
        "http://localhost:5000/login",
        userData
      );
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userRole", user.role);
      if (response.data) {
        console.log(response.data);
      }
      dispatch(login(user));
      // redirect user based on role
      const role = response.data.user.role;
      switch (role) {
        case "instructor":
          break;
        case "coordinator":
          // redirect to coordinator page
          break;
        case "hod":
          // redirect to hod page
          break;
        default:
          // redirect to default page
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "blue",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "blue",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "blue",
      },
      "&:hover fieldset": {
        borderColor: "blue",
      },
      "&.Mui-focused fieldset": {
        borderColor: "blue",
      },
    },
  });
  return (
    <Container sx={{}}>
      <Box
        component="form"
        sx={{
          p: 10,
          mx: 35,
          mt: 15,
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Typography variant="h3" color={"primary"}>
            University Portal
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
          <Button
            sx={{ textTransform: "none" }}
            size="large"
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};
