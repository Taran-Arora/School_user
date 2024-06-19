import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Nav from '../Nav'
import { Link } from 'react-router-dom'
import ProfileImg from '../../Images/profile.png'

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PercentIcon from '@mui/icons-material/Percent';
import FeedIcon from '@mui/icons-material/Feed';
import _fetch from '../../config/api'
import { api_url } from '../../config/config'

const Profile = () => {

  const loginEmail = localStorage.getItem('whologin');

  const [imageData, setImageData] = useState({image: '', teacher : {email: '', first_name: '', last_name: '', gender: '',   }});
  const [periodsData, setPeriodsData] = useState();
  
  useEffect(() => {
    getTeacherImage();
    getTeacherPeriods();
  }, []);

      const getTeacherImage = async() => {
        let res = await _fetch(`${api_url}teacherimagedata/?teacher_email=${loginEmail}`, "GET", {}, {});
        if(res?.status === 200) {
          setImageData(res?.data);

        }
      }

      const getTeacherPeriods = async() => {
        let res = await _fetch(`${api_url}teacherperiodsdata/?teacher_email=${loginEmail}`, "GET", {}, {});
        if(res?.status === 200) {
          setPeriodsData(res?.data);
        }
      }
console.log('imageData', imageData?.teacher);
  return (
    <div className='my-profile px-3'>
      <Nav />
      <Container fluid>
        <Row className='my-4 my-xl-2'>
          <Col lg={12}>
            <h3 className='title'>Hello, User!</h3>
            <p className='bread-crumb'><Link to="/dashboard">Dashboard</Link> <ArrowForwardIosIcon /> Profile</p>
          </Col>
          <Col lg={4}>
            <div className="card">
              <div className="item-title pt-3">
                <h4>About Me</h4>
              </div>
              <div className="info mt-3">
                <div className="card-img-section d-flex">
                  <img src={`data:image/jpeg;base64,${imageData?.image}`} alt="" className='pf-img' />
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
                  <p>DOB: <span>01-01-2000</span></p>
                  <p>Address: <span>Abohar (Punjab)</span></p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              <Col lg={4}>
                <div className="card">
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
              <Col lg={4}>
                <div className="card">
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
              <Col lg={4}>
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
              <Col lg={12}>
                <div className="card mt-lg-3">
                  <div className="summary">
                    <div className="item-icon">
                      <FeedIcon />
                    </div>
                    <div className="item-content">
                      <p>Additional Info</p>
                      <p>Coming soon...</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={12}>
                <div className="card mt-lg-3">
                  <div className="summary">
                    <div className="item-icon">
                      <FeedIcon />
                    </div>
                    <div className="item-content">
                      <p>Additional Info</p>
                      <p>Coming soon...</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={12}>
                <div className="card mt-lg-3">
                  <div className="summary">
                    <div className="item-icon">
                      <FeedIcon />
                    </div>
                    <div className="item-content">
                      <p>Additional Info</p>
                      <p>Coming soon...</p>
                    </div>
                  </div>
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
