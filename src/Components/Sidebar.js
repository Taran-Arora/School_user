import GridViewIcon from '@mui/icons-material/GridView';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { Link, useNavigate } from 'react-router-dom';
import Students from '../assets/Images/graduation.png';
import Parents from '../assets/Images/parents.png';
// import Teacher from '../assets/Images/teacher.png';
import Earning from '../assets/Images/salary.png';
import { Button, Col, Container, Row } from 'react-bootstrap';
import _fetch from '../../src/config/api';
import { api_url } from '../../src/config/config';
import toasted from '../config/toast';
import DavLogo from '../assets/Images/davlogo.jpg';
const Sidebar = () => {

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

    } else {
   navigate('/');
    }
  };

  const logOut = async () => {

    var data = await _fetch(`${api_url}logoutuser/`, 'POST', {}, {});

    if (data?.status == 200) {

      toasted.success(data?.message);
      localStorage.clear();
      setTimeout(() => {
       navigate('/');
      }, 1000);
    } else {
      toasted.error(data?.message);
    }
  }

  return (
    <>
      <div className='p-2 max-vh-100'>
        <div className='m-2 d-flex align-items-center'>
          <div className='school-logo-img' >
          {/* <img src={DavLogo}  alt="" className='img-fluid' /> */}
          </div>
  
          {/* <PersonIcon className='me-2 fs-4'></PersonIcon> */}
          <marquee behavior="" direction="">
          <h4 className='brand-name fs-4'> DAV School Abohar </h4>
          </marquee>
     
        </div>
        <hr className='text-dark' />
        {/* {whoLogin === 'is_school' && ( */}
          <>
            <div className='list-group list-group-flush max-vh-100'>
              <Link to="/dashboard" className="list-group-item py-2 d-flex align-items-center my-2">
                <GridViewIcon className='fs-5 me-2'></GridViewIcon>
                <span className='fs-5'>DashBoard</span>
              </Link>
              <Link to="/allteachers" className="list-group-item py-2 d-flex align-items-center my-2">
                <SchoolIcon className='fs-4 me-2'></SchoolIcon>
                <span className='fs-5'>All Teachers</span>
              </Link>

              <Link to="/classdata" className="list-group-item py-2 d-flex align-items-center my-2">
                <SchoolIcon className='fs-4 me-2'></SchoolIcon>
                <span className='fs-5'>All Classes</span>
              </Link>
              <Link to="/allstudents" className="list-group-item py-2 d-flex align-items-center my-2">
                <SchoolIcon className='fs-4 me-2'></SchoolIcon>
                <span className='fs-5'>All Students</span>
              </Link>

              <div className="for-logout-btn">
                <button onClick={logOut} class="list-group-item py-2 position-absolute  d-flex align-items-center logout-btn" ><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium fs-4 me-2 css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LogoutIcon"><path d="m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"></path></svg><span class="fs-5">Logout</span></button>
              </div>
            </div>
          </>
        {/* )} */}
        {/* {whoLogin === 'is_teacher' && (
          <>
            <div className='list-group list-group-flush max-vh-100'>

              <Link to="/classdata" className="list-group-item py-2 d-flex align-items-center my-2">
                <SchoolIcon className='fs-4 me-2'></SchoolIcon>
                <span className='fs-5'>All Classes</span>
              </Link>
              <Link to="/allstudents" className="list-group-item py-2 d-flex align-items-center my-2">
                <SchoolIcon className='fs-4 me-2'></SchoolIcon>
                <span className='fs-5'>All Students</span>
              </Link>

              <div className="for-logout-btn">
                <button onClick={logOut} class="list-group-item py-2 position-absolute  d-flex align-items-center logout-btn" ><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium fs-4 me-2 css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LogoutIcon"><path d="m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"></path></svg><span class="fs-5">Logout</span></button>
              </div>
            </div>
          </>
        )}

        {whoLogin === 'is_student' && (
          <>
            <div className='list-group list-group-flush max-vh-100'>
              {/* <Link to="/allstudents" className="list-group-item py-2 d-flex align-items-center my-2">
                <SchoolIcon className='fs-4 me-2'></SchoolIcon>
                <span className='fs-5'>All Students</span>
              </Link> */}

              {/* <div className="for-logout-btn">
                <button onClick={logOut} class="list-group-item py-2 position-absolute  d-flex align-items-center logout-btn" ><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium fs-4 me-2 css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LogoutIcon"><path d="m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"></path></svg><span class="fs-5">Logout</span></button>
              </div>
            </div>
          </>
        )} */}
      </div>
    </> 



  )
}

export default Sidebar
