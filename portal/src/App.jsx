import "./App.css";
import { Login } from "./authentication/login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { InstructorHome } from "./pages/Instructor/InstructorHome";
import { Hod } from "./pages/Instructor/hod";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "./features/auth/authSlice";
import { withAuth } from "./authentication/withAuth";
import { Navbar } from "./components/Navbar";


const drawerWidth = 300;

function App() {
  const ProtectedHod = withAuth(Hod, ["hod"]);
  const InstructorRoutes = withAuth(InstructorHome, ["instructor"]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<InstructorRoutes />} />
        
        <Route path="/hod" element={<ProtectedHod />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

const Root = () => {
  const { user } = useSelector((state) => state.auth)
 
  return (
    <>
    {user ? <Navbar/> : null}
 

      <Outlet />
    </>
  );
};

export default App;
