




import GridViewIcon from '@mui/icons-material/GridView';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import React, { useEffect, useState, useContext } from 'react';
import Nav from './Nav';
import { Link, useNavigate } from 'react-router-dom';
import Students from '../assets/Images/graduation.png';
import Parents from '../assets/Images/parents.png';
import Earning from '../assets/Images/salary.png';
import { Button, Col, Container, Row } from 'react-bootstrap';
import _fetch from '../../src/config/api';
import { api_url } from '../../src/config/config';
import toasted from '../config/toast';
import SchoolLogo from '../assets/Images/davlogo-removebg-preview.png';
import { ToggleContext } from './ToggleContext';

import classImg from '../assets/Images/presentation.png';
import studentone from '../assets/Images/graduated (1).png'

const Sidebar = () => {
  const { toggle } = useContext(ToggleContext);
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const whoLogin = localStorage.getItem('whologin');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      schoolData();
    }
  }, [token]);

  const schoolData = async () => {
    if (!token) {
      return;
    }
    const res = await _fetch(`${api_url}userdata/`, 'GET', {}, {});

    if (res?.status === 200) {
      // handle successful response
    } else {
      navigate('/');
    }
  };

  const logOut = async () => {
    var data = await _fetch(`${api_url}logoutuser/`, 'POST', {}, {});

    if (data?.status === 200) {
      toasted.success(data?.message);
      localStorage.clear();
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      toasted.error(data?.message);
    }
  };

  return (
    <>
      <div className='p-2 sidebar-main'>
        <div className='m-2 d-flex align-items-center'>
          <div className="school-logo-main">
            <div className="s-img-div">
              <img src={SchoolLogo} className="s-img img-fluid" alt="DavLogo" />
            </div>
          </div>
        </div>
        <hr className='text-dark' />
        <>
          {/* <div className='list-group list-group-flush'>
            <Link to="/dashboard" className="list-group-item py-2 d-flex align-items-center my-2">
              <GridViewIcon className={`fs-5 me-2 ${toggle ? '' : 'fs-4'}`}></GridViewIcon>
              <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>DashBoard</span>
            </Link>
            <Link to="/allteachers" className="list-group-item py-2 d-flex align-items-center my-2">
              <SchoolIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></SchoolIcon>
              <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Teachers</span>
            </Link>
            <Link to="/classdata" className="list-group-item py-2 d-flex align-items-center my-2">
              <SchoolIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></SchoolIcon>
              <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Classes</span>
            </Link>
            <Link to="/allstudents" className="list-group-item py-2 d-flex align-items-center my-2">
              <SchoolIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></SchoolIcon>
              <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Students</span>
            </Link>

            <div className="for-logout-btn">
              <button onClick={logOut} className={`list-group-item py-2 position-absolute d-flex align-items-center ${toggle ? 'logout' : 'fs-5-hidden logout-collapse'}`}>
                <LogoutIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></LogoutIcon>
                <span className={`fs-5 ${toggle ? 'logout' : 'fs-5-hidden logout-collapse'}`}>Logout</span>
              </button>
            </div>
          </div> */}

          <div className='list-group list-group-flush'>
            <Link to="/dashboard" className="list-group-item py-2 d-flex align-items-center my-2">
              <GridViewIcon className={`fs-5 me-2 ${toggle ? '' : 'fs-4'}`}></GridViewIcon>
              <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>DashBoard</span>
            </Link>
            <Link to="/allteachers" className="list-group-item py-2 d-flex align-items-center my-2">
              <i class="fa-solid fa-chalkboard-user fs-5 me-2 "></i>
              {/* <SchoolIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></SchoolIcon> */}
              <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Teachers</span>
            </Link>
            <Link to="/classdata" className="list-group-item py-2 d-flex align-items-center my-2">
              {/* <SchoolIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></SchoolIcon>
           <i class="fa-solid fa-school fs-5 me-2"></i> */}
              <img src={classImg} alt="" className=' fs-5 me-2' />
              <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Classes</span>
            </Link>
            <Link to="/allstudents" className="list-group-item py-2 d-flex align-items-center my-2">
              <img src={studentone} alt="" className='fs-5 me-2' />
              {/* <SchoolIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></SchoolIcon> */}
              <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Students</span>
            </Link>
            <div className="for-logout-btn">
              <button onClick={logOut} className={`list-group-item py-2 position-absolute d-flex align-items-center ${toggle ? 'logout' : 'fs-5-hidden logout-collapse'}`}>
                <LogoutIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></LogoutIcon>
                <span className={`fs-5 ${toggle ? 'logout' : 'fs-5-hidden logout-collapse'}`}>Logout</span>
              </button>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Sidebar;








// import React, { useEffect, useState, useContext, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import GridViewIcon from '@mui/icons-material/GridView';
// import LogoutIcon from '@mui/icons-material/Logout';
// import SchoolIcon from '@mui/icons-material/School';
// import SchoolLogo from '../assets/Images/davlogo-removebg-preview.png';
// import { _fetch } from '../../src/config/api';
// import { api_url } from '../../src/config/config';
// import toasted from '../config/toast';
// import { ToggleContext } from './ToggleContext';

// const Sidebar = () => {
//   const { toggle, setToggle } = useContext(ToggleContext); // Assuming you have a method to set toggle
//   const navigate = useNavigate();
//   const [token, setToken] = useState(null);
//   const whoLogin = localStorage.getItem('whologin');
//   const sidebarRef = useRef(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken);
//       schoolData();
//     }

//     // Add event listener for clicks outside the sidebar
//     document.addEventListener('mousedown', handleClickOutside);

//     // Clean up event listener on component unmount
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [token]);

//   const schoolData = async () => {
//     if (!token) {
//       return;
//     }
//     const res = await _fetch(`${api_url}userdata/`, 'GET', {}, {});

//     if (res?.status === 200) {
//       // handle successful response
//     } else {
//       navigate('/');
//     }
//   };

//   const logOut = async () => {
//     const data = await _fetch(`${api_url}logoutuser/`, 'POST', {}, {});

//     if (data?.status === 200) {
//       toasted.success(data?.message);
//       localStorage.clear();
//       setTimeout(() => {
//         navigate('/');
//       }, 1000);
//     } else {
//       toasted.error(data?.message);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !toggle) {
//       setToggle(true); // Open the sidebar if it's collapsed and the user clicks outside
//     }
//   };

//   return (
//     <div ref={sidebarRef} className='p-2 sidebar-main'>
//       <div className='m-2 d-flex align-items-center'>
//         <div className="school-logo-main">
//           <div className="s-img-div">
//             <img src={SchoolLogo} className="s-img img-fluid" alt="DavLogo" />
//           </div>
//         </div>
//       </div>
//       <hr className='text-dark' />
//       <div className='list-group list-group-flush'>
//         <Link to="/dashboard" className="list-group-item py-2 d-flex align-items-center my-2">
//           <GridViewIcon className={`fs-5 me-2 ${toggle ? '' : 'fs-4'}`}></GridViewIcon>
//           <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>DashBoard</span>
//         </Link>
//         <Link to="/allteachers" className="list-group-item py-2 d-flex align-items-center my-2">
//           <SchoolIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></SchoolIcon>
//           <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Teachers</span>
//         </Link>
//         <Link to="/classdata" className="list-group-item py-2 d-flex align-items-center my-2">
//           <SchoolIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></SchoolIcon>
//           <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Classes</span>
//         </Link>
//         <Link to="/allstudents" className="list-group-item py-2 d-flex align-items-center my-2">
//           <SchoolIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></SchoolIcon>
//           <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Students</span>
//         </Link>
//         <div className="for-logout-btn">
//           <button onClick={logOut} className={`list-group-item py-2 position-absolute d-flex align-items-center   ${toggle ? 'logout' : 'fs-5-hidden logout-collapse'} `}>
//             <LogoutIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></LogoutIcon>
//             <span className={`fs-5 ${toggle ? 'logout' : 'fs-5-hidden logout-collapse'}`}>Logout</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




// //external code
// import React, { useEffect, useState, useContext, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import GridViewIcon from '@mui/icons-material/GridView';
// import LogoutIcon from '@mui/icons-material/Logout';
// import SchoolIcon from '@mui/icons-material/School';
// import SchoolLogo from '../assets/Images/davlogo-removebg-preview.png';
// import { _fetch } from '../../src/config/api';
// import { api_url } from '../../src/config/config';
// import toasted from '../config/toast';
// import { ToggleContext } from './ToggleContext';
// import classImg from '../assets/Images/presentation.png';
// import studentone from '../assets/Images/graduated (1).png'

// const Sidebar = () => {
//   const { toggle, Toggle } = useContext(ToggleContext);
//   const navigate = useNavigate();
//   const [token, setToken] = useState(null);
//   const whoLogin = localStorage.getItem('whologin');
//   const sidebarRef = useRef(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken);
//       schoolData();
//     }

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [token]);

//   const schoolData = async () => {
//     if (!token) {
//       return;
//     }
//     const res = await _fetch(`${api_url}userdata/`, 'GET', {}, {});

//     if (res?.status === 200) {
//       // handle successful response
//     } else {
//       navigate('/');
//     }
//   };

//   const logOut = async () => {
//     const data = await _fetch(`${api_url}logoutuser/`, 'POST', {}, {});

//     if (data?.status === 200) {
//       toasted.success(data?.message);
//       localStorage.clear();
//       setTimeout(() => {
//         navigate('/');
//       }, 1000);
//     } else {
//       toasted.error(data?.message);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !toggle) {
//       Toggle();
//     }
//   };

//   return (
//     <div ref={sidebarRef} className='p-2 sidebar-main'>
//       <div className='m-2 d-flex align-items-center'>
//         <div className="school-logo-main">
//           <div className="s-img-div">
//             <img src={SchoolLogo} className="s-img img-fluid" alt="DavLogo" />
//           </div>
//         </div>
//       </div>
//       <hr className='text-dark' />
//       <div className='list-group list-group-flush'>
//         <Link to="/dashboard" className="list-group-item py-2 d-flex align-items-center my-2">
//           <GridViewIcon className={`fs-5 me-2 ${toggle ? '' : 'fs-4'}`}></GridViewIcon>
//           <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>DashBoard</span>
//         </Link>
//         <Link to="/allteachers" className="list-group-item py-2 d-flex align-items-center my-2">
//         <i class="fa-solid fa-chalkboard-user fs-5 me-2 "></i>
//           {/* <SchoolIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></SchoolIcon> */}
//           <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Teachers</span>
//         </Link>
//         <Link to="/classdata" className="list-group-item py-2 d-flex align-items-center my-2">
//           {/* <SchoolIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></SchoolIcon>
//            <i class="fa-solid fa-school fs-5 me-2"></i> */}
//            <img src={classImg} alt="" className=' fs-5 me-2' />
//           <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Classes</span>
//         </Link>
//         <Link to="/allstudents" className="list-group-item py-2 d-flex align-items-center my-2">
//         <img src={studentone} alt="" className='fs-5 me-2' />
//           {/* <SchoolIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></SchoolIcon> */}
//           <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Students</span>
//         </Link>
//         <div className="for-logout-btn">
//           <button onClick={logOut} className={`list-group-item py-2 position-absolute d-flex align-items-center ${toggle ? 'logout' : 'fs-5-hidden logout-collapse'}`}>
//             <LogoutIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></LogoutIcon>
//             <span className={`fs-5 ${toggle ? 'logout' : 'fs-5-hidden logout-collapse'}`}>Logout</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;













// import GridViewIcon from '@mui/icons-material/GridView';
// import LogoutIcon from '@mui/icons-material/Logout';
// import PersonIcon from '@mui/icons-material/Person';
// import SchoolIcon from '@mui/icons-material/School';
// import React, { useEffect, useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import _fetch from '../../src/config/api';
// import { api_url } from '../../src/config/config';
// import toasted from '../config/toast';
// import { ToggleContext } from './ToggleContext';

// const Sidebar = () => {
//   const { toggle } = useContext(ToggleContext);
//   const navigate = useNavigate();
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken);
//       schoolData();
//     }
//   }, [token]);

//   const schoolData = async () => {
//     if (!token) {
//       return;
//     }
//     const res = await _fetch(`${api_url}userdata/`, 'GET', {}, {});

//     if (res?.status === 200) {
//       // handle successful response
//     } else {
//       navigate('/');
//     }
//   };

//   const logOut = async () => {
//     var data = await _fetch(`${api_url}logout/`, 'POST', {}, {});

//     if (data?.status === 200) {
//       toasted.success(data?.message);
//       localStorage.clear();
//       setTimeout(() => {
//         navigate('/');
//       }, 1000);
//     } else {
//       toasted.error(data?.message);
//     }
//   };

//   return (
//     <div className='p-2 max-vh-100'>
//       <div className='m-2 top-head'>
//         <PersonIcon className='me-2 fs-4'></PersonIcon>
//         <span className={`fs-5 brand-name ${toggle ? '' : 'fs-5-hidden'}`}>Logo</span>
//       </div>

//       <div className={`list-group list-group-flush max-vh-100`}>
//         <Link to="/dashboard" className="list-group-item">
//           <GridViewIcon className={`fs-5 me-2 ${toggle ? '' : 'fs-4'}`}></GridViewIcon>
//           <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>DashBoard</span>
//         </Link>
//         <Link to="/addschool" className="list-group-item">
//           <GridViewIcon className={`fs-5 me-2 ${toggle ? '' : 'fs-4'}`}></GridViewIcon>
//           <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>Add Schools</span>
//         </Link>
//         <Link to="/allschools" className="list-group-item">
//           <GridViewIcon className={`fs-5 me-2 ${toggle ? '' : 'fs-4'}`}></GridViewIcon>
//           <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Schools</span>
//         </Link>
//         <Link to="/allteachers" className="list-group-item">
//           <SchoolIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></SchoolIcon>
//           <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Teachers</span>
//         </Link>
//         <Link to="/allstudents" className="list-group-item">
//           <SchoolIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></SchoolIcon>
//           <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Students</span>
//         </Link>
//         <div className="for-logout-btn">
//           <button onClick={logOut} className={`list-group-item ${toggle ? '' : ''}`}>
//             <LogoutIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></LogoutIcon>
//             <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>Logout</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;