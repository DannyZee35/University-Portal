 
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
      } else if (!allowedRoles.includes(user.UserRole)) {
        console.log(user.UserRole)
        navigate("/hod");
      }
    }, [user, allowedRoles, navigate]);

    // Render the component if the user's role is allowed
    return allowedRoles.includes(user?.UserRole) ? (
      <Component {...props} />
    ) : null;
  };

  return AuthWrapper;
};
