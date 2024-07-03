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
import { api_url } from '../../config/config'
import _fetch from '../../config/api'

const Profile = () => {
  const loginEmail = localStorage.getItem('useremail');
  const [teacherImageData, setTeacherImageData] = useState({ image: '', teacher: { email: '', first_name: '', last_name: '', gender: '', } });
  const [periodsData, setPeriodsData] = useState([]);

  useEffect(() => {
    getTeacherImage();
    getTeacherPeriods();
  }, []);

  const getTeacherImage = async () => {
    let res = await _fetch(`${api_url}teacherimagedata/?teacher_email=${loginEmail}`, "GET", {}, {});
    if (res?.status === 200) {
      setTeacherImageData(res?.data[0]);

    }
  }

  const getTeacherPeriods = async () => {
    let res = await _fetch(`${api_url}teacherperiodsdata/?teacher_email=${loginEmail}`, "GET", {}, {});
    if (res?.status === 200) {
      setPeriodsData(res?.data);
    }
  }

  return (
    <div className='my-profile px-md-3'>
      <Nav />
      <Container fluid>
        <Row className='my-4 my-xl-2 align-items-center'>
          <Col xl={12}>
            <h3 className='title'>Hello, {teacherImageData?.teacher?.first_name + " " + teacherImageData?.teacher?.last_name}</h3>
            <p className='bread-crumb'><Link to="/dashboard">Dashboard</Link> <ArrowForwardIosIcon /> Profile</p>
          </Col>
          <Col xl={4} lg={6}>
            <div className="card mb-3 mb-lg-0">
              <div className="item-title pt-3">
                <h4>About Me</h4>
              </div>
              <div className="info mt-3">
                <div className="card-img-section d-flex">
                  <img src={`data:image/jpeg;base64,${teacherImageData?.image}`} alt="" className='pf-img' />
                  <div className="main-body">
                    <div className="pf-title"><h5>{teacherImageData?.teacher?.first_name + " " + teacherImageData?.teacher?.last_name}</h5></div>
                  </div>
                </div>
                <div className="info-details">
                  <p>Name: <span>{teacherImageData?.teacher?.first_name + " " + teacherImageData?.teacher?.last_name}</span></p>
                  <p>Gender: <span>{teacherImageData?.teacher?.gender}</span></p>
                  <p>Email: <span>{teacherImageData?.teacher?.email}</span></p>
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
                        <th scope="col">Period Number</th>
                        <th scope="col">Class</th>
                      </tr>
                      {periodsData?.map((item, index) => {
                        return (
                          <>
                            <tr>
                              <td scope="col">{index + 1}</td>
                              <td scope="col">{item?.period_number}</td>
                              <td scope="col">{item?.class_name}</td>
                            </tr>
                          </>
                        )
                      })}
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
