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
import Teacher from '../assets/Images/teacher.png';
import Earning from '../assets/Images/salary.png';
import { Col, Container, Row } from 'react-bootstrap';
import _fetch from '../../src/config/api';
import { api_url } from '../../src/config/config';

const Sidebar = () => {

  return (
    <>
      <div className='bg-white sidebar p-2 max-vh-100'>
      <div className='m-2 d-flex align-items-center'>
        <PersonIcon className='me-2 fs-4'></PersonIcon>
        <span className='brand-name fs-4'>Admin</span>
      </div>
      <hr className='text-dark'/>
      <div className='list-group list-group-flush max-vh-100'>
        <Link to="/" className="list-group-item py-2 d-flex align-items-center my-2">
            <GridViewIcon className='fs-5 me-2'></GridViewIcon>
            <span className='fs-5'>DashBoard</span>
        </Link>
        <Link to="/allschools" className="list-group-item py-2 d-flex align-items-center my-2">
            <GridViewIcon className='fs-5 me-2'></GridViewIcon>
            <span className='fs-5'>All Schools</span>
        </Link>
        <Link to="/aboutStudent" className="list-group-item py-2 d-flex align-items-center my-2">
            <GridViewIcon className='fs-5 me-2'></GridViewIcon>
            <span className='fs-5'>About Students</span>
        </Link>
        <Link to="/allteachers" className="list-group-item py-2 d-flex align-items-center my-2">
            <SchoolIcon className='fs-4 me-2'></SchoolIcon>
            <span className='fs-5'>All Teachers</span>
        </Link>
        <Link to="/allstudents" className="list-group-item py-2 d-flex align-items-center my-2">
            <SchoolIcon className='fs-4 me-2'></SchoolIcon>
            <span className='fs-5'>All Students</span>
        </Link>
        
        <Link to="/" className="list-group-item py-2 d-flex align-items-center my-2">
            <ManageAccountsIcon className='fs-4 me-2'></ManageAccountsIcon>
            <span className='fs-5'>My Account</span>
        </Link>
        <Link to="/" className="list-group-item py-2 position-absolute bottom-0 d-flex align-items-center logout-btn">
            <LogoutIcon className='fs-4 me-2'></LogoutIcon>
            <span className='fs-5'>Logout</span>
        </Link>
      </div>
    </div>
    </>
   


  
  )
}

export default Sidebar
