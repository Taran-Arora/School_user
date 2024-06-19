import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Nav from '../Nav'
import { Link } from 'react-router-dom'
import ProfileImg from '../../Images/profile.png'

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PercentIcon from '@mui/icons-material/Percent';

const Profile = () => {
  return (
    <div className='my-profile px-3'>
      <Nav />
      <Container fluid>
        <Row className='my-4 my-xl-2 align-items-center'>
          <Col xl={12}>
            <h3 className='title'>Hello, User!</h3>
            <p className='bread-crumb'><Link to="/dashboard">Dashboard</Link> <ArrowForwardIosIcon /> Profile</p>
          </Col>
          <Col xl={4} lg={6}>
            <div className="card mb-3 mb-lg-0">
              <div className="item-title pt-3">
                <h4>About Me</h4>
              </div>
              <div className="info mt-3">
                <div className="card-img-section d-flex">
                  <img src={ProfileImg} alt="" className='pf-img' />
                  <div className="main-body">
                    <div className="pf-title"><h5>Samrat Monga</h5></div>
                    <p>Aliquam erat volutpat. Curabiene natis massa sedde lacustiquen sodale word moun taiery.</p>
                  </div>
                </div>
                <div className="info-details">
                  <p>Name: <span>Samrat Monga</span></p>
                  <p>Gender: <span>Male</span></p>
                  <p>Email: <span>abc@gmail.com</span></p>
                  <p>Phone: <span>+91-1234567890</span></p>
                  <p>Class: <span>1st</span></p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={6}>
            <Row>
              <Col xl={4}>
                <div className="card mb-3 mb-lg-0">
                  <div className="summary">
                    <div className="item-icon">
                      <NotificationsActiveIcon />
                    </div>
                    <div className="item-content">
                      <p>Notification</p>
                      <p>12</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={4}>
                <div className="card mb-3 mb-lg-0">
                  <div className="summary">
                    <div className="item-icon">
                      <CalendarMonthIcon />
                    </div>
                    <div className="item-content">
                      <p>Events</p>
                      <p>12</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={4}>
                <div className="card">
                  <div className="summary">
                    <div className="item-icon">
                      <PercentIcon />
                    </div>
                    <div className="item-content">
                      <p>Attendance</p>
                      <p>94%</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={12}>
                <div className="table-responsive">
                  <div className='table-head'>
                    <h3 className='table-heading'>Periods</h3>

                  </div>
                  <table className="table">

                    <tbody>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Period</th>
                        <th scope="col">Class</th>
                      </tr>
                      <tr>
                        <td scope="col">1</td>
                        <td scope="col">Period 1st</td>
                        <td scope="col">Class 1st</td>
                      </tr>
                      <tr>
                        <td scope="col">2</td>
                        <td scope="col">Period 2nd</td>
                        <td scope="col">Class 2nd</td>
                      </tr>
                      <tr>
                        <td scope="col">3</td>
                        <td scope="col">Period 3rd</td>
                        <td scope="col">Class 3rd</td>
                      </tr>
                      <tr>
                        <td scope="col">4</td>
                        <td scope="col">Period 4th</td>
                        <td scope="col">Class 4th</td>
                      </tr>
                    </tbody>

                  </table>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profile
