import React from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const Sidebar = () => {
  return (
    <div className='bg-white sidebar p-2 max-vh-100'>
      <div className='m-2 d-flex align-items-center'>
        <PersonIcon className='me-2 fs-4'></PersonIcon>
        <span className='brand-name fs-4'>Admin</span>
      </div>
      <hr className='text-dark'/>
      <div className='list-group list-group-flush max-vh-100'>
        <a href="" className="list-group-item py-2 d-flex align-items-center my-2">
            <GridViewIcon className='fs-5 me-2'></GridViewIcon>
            <span className='fs-5'>DashBoard</span>
        </a>
        <a href="" className="list-group-item py-2 d-flex align-items-center my-2">
            <SchoolIcon className='fs-4 me-2'></SchoolIcon>
            <span className='fs-5'>All Schools</span>
        </a>
        <a href="" className="list-group-item py-2 d-flex align-items-center my-2">
            <ManageAccountsIcon className='fs-4 me-2'></ManageAccountsIcon>
            <span className='fs-5'>My Account</span>
        </a>
        <a href="" className="list-group-item py-2 position-absolute bottom-0 d-flex align-items-center logout-btn">
            <LogoutIcon className='fs-4 me-2'></LogoutIcon>
            <span className='fs-5'>Logout</span>
        </a>
      </div>
    </div>
  )
}

export default Sidebar
