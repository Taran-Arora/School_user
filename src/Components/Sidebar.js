
import GridViewIcon from '@mui/icons-material/GridView';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import React, { useEffect, useState, useContext } from 'react';
import Nav from './Nav';
import { Link, useNavigate, NavLink } from 'react-router-dom';
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
  const [isActive, setActive] = useState();

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
          {whoLogin === 'is_school' ? (
            <div className='list-group list-group-flush'>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `list-group-item py-2 d-flex align-items-center my-2 ${isActive ? 'active' : ''}`
                }
              >
                <GridViewIcon className={`fs-5 me-2 ${toggle ? '' : 'fs-4'}`}></GridViewIcon>
                <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>DashBoard</span>
              </NavLink>
              <NavLink
                to="/allteachers"
                className={({ isActive }) =>
                  `list-group-item py-2 d-flex align-items-center my-2 ${isActive ? 'active' : ''}`
                }
              >
                <i className="fa-solid fa-chalkboard-user fs-5 me-2"></i>
                <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Teachers</span>
              </NavLink>
              <NavLink
                to="/classdata"
                className={({ isActive }) =>
                  `list-group-item py-2 d-flex align-items-center my-2 ${isActive ? 'active' : ''}`
                }
              >
                <img src={classImg} alt="" className='fs-5 me-2' />
                <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Classes</span>
              </NavLink>
              <NavLink
                to="/allstudents"
                className={({ isActive }) =>
                  `list-group-item py-2 d-flex align-items-center my-2 ${isActive ? 'active' : ''}`
                }
              >
                <img src={studentone} alt="" className='fs-5 me-2' />
                <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Students</span>
              </NavLink>
              <div className="for-logout-btn">
                <button
                  onClick={logOut}
                  className={`list-group-item py-2 position-absolute d-flex align-items-center ${toggle ? 'logout' : 'fs-5-hidden logout-collapse'}`}
                >
                  <LogoutIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></LogoutIcon>
                  <span className={`fs-5 ${toggle ? 'logout' : 'fs-5-hidden logout-collapse'}`}>Logout</span>
                </button>
              </div>
            </div>
          ) : whoLogin === 'is_teacher' ? (
            <div className='list-group list-group-flush'>
              <NavLink
                to="/classdata"
                className={({ isActive }) =>
                  `list-group-item py-2 d-flex align-items-center my-2 ${isActive ? 'active' : ''}`
                }
              >
                <img src={classImg} alt="" className='fs-5 me-2' />
                <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Classes</span>
              </NavLink>
              <NavLink
                to="/allstudents"
                className={({ isActive }) =>
                  `list-group-item py-2 d-flex align-items-center my-2 ${isActive ? 'active' : ''}`
                }
              >
                <img src={studentone} alt="" className='fs-5 me-2' />
                <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Students</span>
              </NavLink>
              <div className="for-logout-btn">
                <button
                  onClick={logOut}
                  className={`list-group-item py-2 position-absolute d-flex align-items-center ${toggle ? 'logout' : 'fs-5-hidden logout-collapse'}`}
                >
                  <LogoutIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></LogoutIcon>
                  <span className={`fs-5 ${toggle ? 'logout' : 'fs-5-hidden logout-collapse'}`}>Logout</span>
                </button>
              </div>
            </div>
          ) : whoLogin === 'is_student' ? (
            <div className='list-group list-group-flush'>
              {/* <NavLink
                 to="/classdata"
                 className={({ isActive }) =>
                   `list-group-item py-2 d-flex align-items-center my-2 ${isActive ? 'active' : ''}`
                 }
               >
                 <img src={classImg} alt="" className='fs-5 me-2' />
                 <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Classes</span>
               </NavLink>
               <NavLink
                 to="/allstudents"
                 className={({ isActive }) =>
                   `list-group-item py-2 d-flex align-items-center my-2 ${isActive ? 'active' : ''}`
                 }
               >
                 <img src={studentone} alt="" className='fs-5 me-2' />
                 <span className={`fs-5 ${toggle ? '' : 'fs-5-hidden'}`}>All Students</span>
               </NavLink> */}
              <div className="for-logout-btn">
                <button
                  onClick={logOut}
                  className={`list-group-item py-2 position-absolute d-flex align-items-center ${toggle ? 'logout' : 'fs-5-hidden logout-collapse'}`}
                >
                  <LogoutIcon className={`fs-4 me-2 ${toggle ? '' : 'fs-3'}`}></LogoutIcon>
                  <span className={`fs-5 ${toggle ? 'logout' : 'fs-5-hidden logout-collapse'}`}>Logout</span>
                </button>
              </div>
            </div>
          ) : null
          }
        </>
      </div>
    </>
  );
};

export default Sidebar;





