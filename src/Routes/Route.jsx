import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignIn/SignUp";
import PopularClases from "../Pages/popularClass/PopularClases";
import PopularInstructor from "../Pages/PopularInstructor/PopularInstructor";
import AboutSport from "../Pages/AboutSport/AboutSport";
import Instructor from "../Pages/Instructors/Instructor";
import Classes from "../Pages/Classes/Classes";
// import DashboardLayout from "../Layout/DashboardLayout";
// import AdminClasses from "../Pages/Dashboard/Admin/AdminClasses";
import Error from "../Pages/Error/Error";
import DashboardLayout from "../Layout/DashboardLayout";
import MyCart from "../Pages/Dashboards/MyCart";
import AdminClasses from "../Pages/Dashboard/Admin/AdminClasses";
import Allusers from "../Pages/Dashboard/Admin/Allusers";
import AddClasses from "../Pages/InstructorHome/AddClasses";
import MyClass from "../Pages/InstructorHome/MyClass";
import SelectedClass from "../Pages/Dashboard/SelectedClass";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
             {
                path: '/login',
                element: <Login></Login>
             },
             {
                path: '/signup',
                element: <SignUp></SignUp>
             },
             {
              path: '/popular',
              element: <PopularClases></PopularClases>
             },
             {
                path: '/popularins',
                element: <PopularInstructor></PopularInstructor>
             },
             
             {
                path: '/aboutsport',
                element: <AboutSport></AboutSport>
             },
            {
               path: '/instructor',
               element: <Instructor></Instructor>
            },
            {
               path: '/classes',
               element: <Classes></Classes>
            }
        ]
        


    },

   {
      path: 'dashboardlayout',
      element: <DashboardLayout></DashboardLayout>,
      children: [
         {
            path: 'allclasses',
            element: <AdminClasses></AdminClasses>
         },
         {
            path: 'allusers',
            element: <Allusers></Allusers>
         },

         {
           path: 'addclasses',
           element: <AddClasses></AddClasses>

         },
         {
           path: 'myclass',
           element: <MyClass></MyClass>

         },
         {
           path: 'selectedClass',
           element:<SelectedClass></SelectedClass>

         },
         {
           path: 'enrollClass',
           element:<EnrolledClass></EnrolledClass>
         }
      ]
   }


]);