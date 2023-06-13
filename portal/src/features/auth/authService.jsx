import axios from "axios";


// Register user
 
const register = async (userData) => {
  try {
    const response = await axios.post("http://localhost:5000/signup", userData);
    const { token, user } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("userRole", user.role);

    return response.data;
  } catch (error) {
    console.log(error.response); // Log the error response in the console

    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Registration failed. Please try again.");
    }
  }
};

const login = async (userData) => {
  try {
    const response = await axios.post("http://localhost:5000/login", userData);
    if (response.data) {
      localStorage.setItem("token", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error("Login failed. Please try again.");
    }
  }
};


// logout

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userRole");

};

const authService = {
  login,
  logout,
  register
};

export default authService;
