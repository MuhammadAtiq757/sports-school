import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import AdminHook from '../Pages/Hooks/AdminHook';
import Instructor from '../Pages/Instructors/Instructor';
import InstructorHook from '../Pages/Hooks/InstructorHook';


const DashboardLayout = () => {
  // const isAdmin = true;
  // const isInstructor = false;
const [isAdmin] = AdminHook()
console.log(isAdmin)
const [isInstructor] = InstructorHook()


  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}


          {
            isAdmin ?( <>
                <li> <Link> <FaHome></FaHome> Admin Home </Link> </li>
              <li> <Link to="/dashboardlayout/allclasses">  Manage Classes </Link> </li>
              <li><Link to='/dashboardlayout/allusers'>  Manage Users</Link></li>
            </>
            ) : isInstructor ? (
            <>
              <li>
                <Link to='/dashboardlayout/addclasses'> Add Classes</Link>
                <Link to='/dashboardlayout/myclass'> My Classes</Link>
              </li>
            </>
            ) : (
              <>
              <li><Link> Enrolled Classes </Link> </li>
              <li><Link to='/dashboardlayout/selectedClass'> Selected Classes </Link> </li>
              
              </>
            )
          }
          <div className='divider'></div>
          <li><Link to='/'><FaHome></FaHome>   Home</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default DashboardLayout;