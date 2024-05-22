import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import 'react-datepicker/dist/react-datepicker.css';
import teacherImg from "../assets/Images/newStudent.jpg";
import Nav from './Nav';
import schoolLogo from "../assets/Images/school-logo.png";
import RecyclingIcon from '@mui/icons-material/Recycling';

export default function AboutTeacher() {
    const [dateOfBirth, setDateOfBirth] = useState(null);
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
                            <input type="text" className='form-control' />
                        </Col>
                        <Col lg={6}>
                            <label type="Name" className='labal-title'> Gender </label>
                            <Form.Select aria-label="Default select example" className='form-control'>
                                <option>Select Gender </option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </Form.Select>
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label type="Class" className='labal-title'>Period 1st</label>
                            <Form.Select aria-label="Default select example" className='form-control'>
                                <option> Select Class </option>
                                <option value="1">1st</option>
                                <option value="2">2nd</option>
                            </Form.Select>
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label type="Class" className='labal-title'>Period 2nd</label>
                            <Form.Select aria-label="Default select example" className='form-control'>
                                <option> Select Class </option>
                                <option value="1">1st</option>
                                <option value="2">2nd</option>
                            </Form.Select>
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label type="Class" className='labal-title'>Period 3rd</label>
                            <Form.Select aria-label="Default select example" className='form-control'>
                                <option> Select Class </option>
                                <option value="1">1st</option>
                                <option value="2">2nd</option>
                            </Form.Select>
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label type="Class" className='labal-title'>Period 4th</label>
                            <Form.Select aria-label="Default select example" className='form-control'>
                                <option> Select Class </option>
                                <option value="1">1st</option>
                                <option value="2">2nd</option>
                            </Form.Select>
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label type="Class" className='labal-title'>Period 5th</label>
                            <Form.Select aria-label="Default select example" className='form-control'>
                                <option> Select Class </option>
                                <option value="1">1st</option>
                                <option value="2">2nd</option>
                            </Form.Select>
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label type="Class" className='labal-title'>Period 6th</label>
                            <Form.Select aria-label="Default select example" className='form-control'>
                                <option> Select Class </option>
                                <option value="1">1st</option>
                                <option value="2">2nd</option>
                            </Form.Select>
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label className='labal-title'> Subject</label>
                            <input type="text" className='form-control' />
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label className='labal-title'> Contact Info</label>
                            <input type="number" className='form-control' />
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label type="Email" className='labal-title'> Email </label>
                            <input type="Email" className='form-control' />
                        </Col>
                        <Col lg={6} className="for-teacher-input">
                            <label className='labal-title'>Additional Details</label>
                            <input type="number" className='form-control' />
                        </Col>

                    </Row>
                </form>
                <div className="teacher-edit-btn">
                    <button className='teacher-edit'>   <RecyclingIcon />Update Details </button>
                </div>
            </div>
        </div>
    )
}