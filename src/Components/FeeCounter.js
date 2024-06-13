import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import RecyclingIcon from '@mui/icons-material/Recycling';
import Nav from './Nav';
import studentImg from '../assets/Images/student.jpg';
import HistoryIcon from '@mui/icons-material/History';

export default function FeeCounter() {
    return (
        <div className='px-3'>
            <Nav />
            <div className='fee-counter-main'>
                <div className="for-student-img">
                    <img src={studentImg} alt="" className='img-fluid' />
                    <p className='d-block'>Prachi Sachdeva </p>
                </div>
                <form action="" className='gx-5 student-admin-form'>
                    <div class="form-head mb-3">
                        <h4 class="form-heading">Student Details</h4>
                    </div>
                    <Row className=''>
                        <Col lg={6} className="for-student-input"  >
                            <label type="Name" className='labal-title'> Student Name </label>
                            <input type="text" className='form-control' readOnly />
                        </Col>
                        {/* <Col lg={6} className="for-student-input"  >
                        <label type="Name" className='labal-title'>Class</label>
                        <input type="text" className='form-control' readOnly />
                    </Col> */}
                        <Col lg={6} className='form-group'>
                            <label> Class </label>
                            <select className='form-control' >
                                <option value>Select Class </option>
                                <option value="1st">1st</option>
                                <option value="2nd">2nd</option>
                            </select>
                        </Col>
                        <Col lg={6} className="for-student-input"  >
                            <label type="Name" className='labal-title'> Student's Roll no  </label>
                            <input type="text" className='form-control' readOnly />
                        </Col>
                        <Col lg={6} className="for-student-input"  >
                            <label type="roll-number" className='labal-title'> Students's Email  </label>
                            <input type="email" className='form-control' readOnly />
                        </Col>
                        <Col lg={6} className="for-student-input"  >
                            <label className='labal-title'> Total Fee  </label>
                            <input type="number" className='form-control' />
                        </Col>
                        <Col lg={6} className="for-student-input"  >
                            <label className='labal-title'> Pending Feee  </label>
                            <input type="number" className='form-control' />
                        </Col>
                        <Col lg={6} className="for-student-input"  >
                            <label className='labal-title'> Date </label>
                            <input type="date" className='form-control' />
                        </Col>
                        <Col lg={6} className="for-student-input"  >
                            <label className='labal-title'> New Fee Submit </label>
                            <input type="number" className='form-control' />
                        </Col>
                    </Row>

                </form>
                <div className="for-edit-btn">
                    <div className="fee-edit-btn">
                        <div className="student-edit-btn">
                            <button className='student-edit'> <RecyclingIcon />Update Details </button>
                        </div>
                    </div>
                    <div className="fee-edit-btn2">
                        <div className="student-edit-btn">
                            <button className='student-edit'> <HistoryIcon />  Fee History </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
