import { Link } from 'react-router-dom';
import logo from '../../public/images/logo.png'
import { AuthContext } from '../Providers/AuthProvider';
import { useContext } from 'react';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const handleLogOut = () => {
      logOut()
        .then(result => { })
        .catch(error => console.log(error))
    }


   
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructor'> Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>




        {
              user?.email ? <>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
              </> :
                <li><Link to='/login'>Login</Link> </li>
            }


        
    </>
    return (
        <>
            <div className=" bg-opacity-30 h-20 text-black max-w-screen-xl navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-red-400 rounded-box w-52">


                            {navOptions}

                        </ul>
                    </div>
                   <Link to="/">
                   <img className=' h-32' src={logo} alt="" />
                   </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}

                    </ul>
                </div>

                {
              user && <label className="avatar tooltip tooltip-bottom tooltip-success" data-tip={user?.displayName}>

                <div className="w-10 h-10 rounded-full">
                  <img className="w-10 h-10 rounded-full" src={user?.photoURL} />
                </div>
              </label>
              
            }

             <div>
              {user && <span> <button onClick={handleLogOut}>Sign Out</button> </span>}
            </div>

              
            </div>

        </>
    );
};

export default Header;