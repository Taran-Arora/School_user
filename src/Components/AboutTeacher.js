import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import 'react-datepicker/dist/react-datepicker.css';
import teacherImg from "../assets/Images/newStudent.jpg";
import Nav from './Nav';
import schoolLogo from "../assets/Images/school-logo.png";
import RecyclingIcon from '@mui/icons-material/Recycling';
import { useLocation, useNavigate } from 'react-router-dom';
import _fetch from '../config/api';
import { api_url } from '../config/config';

export default function AboutTeacher({ Toggle }) {

    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [token, setToken] = useState(null);
    const [allData, setAllData] = useState({ first_name: "", last_name: "", email: "", gender: "", period_one: "", period_two: "", period_three: "", period_four: "", period_five: "", period_six: "", subjects: ""});
    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state?.email;
    const school_email = location.state?.school_email;

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            viewTeacherRecord();
        }
    }, [token]);

    const viewTeacherRecord = async () => {

        const res = await _fetch(`${api_url}teachers/?school_email=${school_email}&teacher_email=${email}`, 'GET', {}, {});

        if (res?.status === 200) {
            setAllData(res?.data[0]);
        }
    };

    return (
        <div>
            <Nav />
            <div className="about-teacher ">
                <div className="for-image-section">
                    <div className="teacher-school-image">
                        <img src={schoolLogo} alt="" />
                        <div className="teacher-school">
                            <div className="school-about">
                                <h2 className='school-name' >Dayanand Anglo Vedic (DAV) School </h2>
                                <h4 className='school-address'> Hanumangarh Rd, South Evenue, <br />
                                    Abohar , Punjab 152116
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="school-logo">
                        <img src={teacherImg} alt="" />
                    </div>
                </div>
                <form action="" className='gx-5 teacher-admin-form'>
                    <div class="form-head mb-3">
                        <h4 class="form-heading">Teacher Details</h4>
                    </div>
                    <Row className=''>
                        <Col lg={6} className="for-teacher-input"  >
                            <label type="Name" className='labal-title'> Teacher Name </label>
                            <input type="text" className='form-control' value={allData?.first_name + " " + allData?.last_name} />
                        </Col>
                        <Col lg={6}>
                            <label type="Name" className='labal-title'> Gender </label>
                            <input type="text" className='form-control' value={allData?.gender} readOnly/>
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label type="Class" className='labal-title'>Period 1st</label>
                            <Form.Select aria-label="Default select example" className='form-control'>
                                <option> Select Class </option>
                                <option value={allData?.period_one}> {allData?.period_one} </option>
                                {/* <option value="2">2nd</option> */}
                            </Form.Select>
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label type="Class" className='labal-title'>Period 2nd</label>
                            <Form.Select aria-label="Default select example" className='form-control'>
                                <option> Select Class </option>
                                <option value={allData?.period_two}> {allData?.period_two} </option>
                                {/* <option value="2">2nd</option> */}
                            </Form.Select>
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label type="Class" className='labal-title'>Period 3rd</label>
                            <Form.Select aria-label="Default select example" className='form-control'>
                                <option> Select Class </option>
                                <option value={allData?.period_three}> {allData?.period_three} </option>
                                {/* <option value="2">2nd</option> */}
                            </Form.Select>
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label type="Class" className='labal-title'>Period 4th</label>
                            <Form.Select aria-label="Default select example" className='form-control'>
                                <option> Select Class </option>
                                <option value={allData?.period_four}> {allData?.period_four} </option>
                                {/* <option value="2">2nd</option> */}
                            </Form.Select>
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label type="Class" className='labal-title'>Period 5th</label>
                            <Form.Select aria-label="Default select example" className='form-control'>
                                <option> Select Class </option>
                                <option value={allData?.period_five}> {allData?.period_five} </option>
                                {/* <option value="2">2nd</option> */}
                            </Form.Select>
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label type="Class" className='labal-title'>Period 6th</label>
                            <Form.Select aria-label="Default select example" className='form-control'>
                                <option> Select Class </option>
                                <option value={allData?.period_six}> {allData?.period_six} </option>
                                {/* <option value="2">2nd</option> */}
                            </Form.Select>
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label className='labal-title'> Subject</label>
                            <input type="text" className='form-control' value={allData?.subjects}/>
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label type="Email" className='labal-title'> Email </label>
                            <input type="Email" className='form-control' value={allData?.email} />
                        </Col>

                    </Row>
                </form>
                <div className="teacher-edit-btn">
                    <button className='teacher-edit'> <RecyclingIcon />Update Details </button>
                </div>
            </div>
        </div>
    )
}