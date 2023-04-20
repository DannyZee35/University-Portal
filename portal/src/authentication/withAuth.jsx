import  { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const withAuth = (Component, allowedRoles) => {
  const AuthWrapper = (props) => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
      if (!user) {
        navigate("/login");
      } 
    else if (user.UserRole === "instructor" && !allowedRoles.includes("instructor")) {
      navigate("/");
    } 
      else if (user.UserRole === "coordinator" && !allowedRoles.includes("coordinator")) {
        navigate("/dashboard");
      } else if (user.UserRole === "hod" && !allowedRoles.includes("hod")) {
        navigate("/hod-dashboard");
      }
    }, [user, allowedRoles, navigate]);

    // Render the component if the user's role is allowed
    return allowedRoles.includes(user?.UserRole) ? (
      <Component {...props} />
    ) : null;
  };

  return AuthWrapper;
};
