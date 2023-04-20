import "./App.css";
import { Login } from "./authentication/login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  
} from "react-router-dom";
import { InstructorHome } from "./pages/Instructor/InstructorHome";
import { Coordinator } from "./pages/Coordinator/Coordinator";
import { useSelector } from "react-redux";
import { withAuth } from "./authentication/withAuth";
import { Navbar } from "./components/Navbar";
import { Courses } from "./pages/Instructor/Courses";
import { CourseDetails } from "./pages/Instructor/CourseDetails";
import { ApprovedCourses } from "./pages/Coordinator/ApprovedCourses";
import { RejectedCourses } from "./pages/Coordinator/RejectedCourses";
import { CoSingleCourse } from "./pages/Coordinator/CoSingleCourse";
import { ApprovedDetails } from "./pages/Coordinator/ApprovedDetails";
import { RejectDetails } from "./pages/Coordinator/RejectDetails";
import { InstructorApproved } from "./pages/Instructor/InstructorApproved";
import { InstructorRejected } from "./pages/Instructor/InstructorRejected";
import { HodDashboard } from "./pages/HOD/HodDashboard";
import { HodDetailsCourse } from "./pages/HOD/HodDetailsCourse";

const drawerWidth = 300;

function App() {
  const ProtectedCoordinator = withAuth(Coordinator, ["coordinator"]);
  const InstructorRoutes = withAuth(InstructorHome, ["instructor"]);
  const CoursesRoute = withAuth(Courses, ["instructor"]);
  const SingleCourse = withAuth(CourseDetails, ["instructor"]);
  const CoordinatordApprovedCourses = withAuth(ApprovedCourses, ["coordinator"]);
  const CoordinatorRejectedCourses = withAuth(RejectedCourses, ["coordinator"]);
  const DetailsCourseCoordinator = withAuth(CoSingleCourse, ["coordinator"]);
  const ApprovedDetailsCoordinator= withAuth(ApprovedDetails, ["coordinator"]);
  const RejectDetailsCoordinator= withAuth(RejectDetails, ["coordinator"]);
  const InstructorApprovedCourses= withAuth(InstructorApproved, ["instructor"]);
  const InstructorUnApprovedCourses= withAuth(InstructorRejected, ["instructor"]);
  const ProtectedHodDashboard= withAuth(HodDashboard, ["hod"]);
  const ProtectedHodCourseDetails= withAuth(HodDetailsCourse, ["hod"]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<InstructorRoutes />} />
        <Route path="/courses" element={<CoursesRoute />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/ApprovedCourseDetails/:id" element={<ApprovedDetailsCoordinator />} />
        <Route path="/RejectCourseDetails/:id" element={<RejectDetailsCoordinator />} />
        <Route path="/instructorApproved" element={<InstructorApprovedCourses />} />
        <Route path="/instructorUnApproved" element={<InstructorUnApprovedCourses />} />
        <Route path="/hod-dashboard" element={<ProtectedHodDashboard />} />
        <Route path="/hod-details/:id" element={<ProtectedHodCourseDetails />} />

        
        <Route path="/dashboard" element={<ProtectedCoordinator />} />
        <Route path="/hodCourseDetail/:id" element={<DetailsCourseCoordinator />} />
        <Route path="/approved" element={<CoordinatordApprovedCourses />} />
        <Route path="/rejected" element={<CoordinatorRejectedCourses />} />
 
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
