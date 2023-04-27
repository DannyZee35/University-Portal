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
    console.log(error);
  }
};


const login = async (userData) => {
  const response = await axios.post("http://localhost:5000/login", userData);
  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data));
  }
  return response.data;
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
