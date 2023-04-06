import axios from "axios";

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
};

export default authService;
