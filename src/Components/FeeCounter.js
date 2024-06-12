import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import RecyclingIcon from '@mui/icons-material/Recycling';
import Nav from './Nav';
import studentImg from '../assets/Images/student.jpg';

export default function FeeCounter() {
    return (
        <div className='px-3'>
             <Nav  />
        <div className='fee-counter-main'>
            <div className="for-student-img">
                <img src={studentImg} alt=""  className='img-fluid'/>
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
                    <Col lg={6} className="for-student-input"  >
                        <label type="roll-number" className='labal-title'> Students Roll No  </label>
                        <input type="number" className='form-control' readOnly />
                    </Col>
                    <Col lg={6} className="for-student-input" >
                        <label type="Name" className='labal-title'> Father's Name </label>
                        <input type="text" className='form-control' readOnly />
                    </Col>
                    <Col lg={6} className="for-student-input"  >
                        <label type="Name" className='labal-title '> Mother's Name  </label>
                        <input type="text" className='form-control' readOnly />
                    </Col>
                    <Col lg={6} className="for-student-input"  >
                        <label  className='labal-title'> Father's Mobile no  </label>
                        <input type="number" className='form-control' readOnly />
                    </Col>
                    <Col lg={6} className="for-student-input"  >
                        <label  className='labal-title'> Mother's Mobile no   </label>
                        <input type="number" className='form-control' readOnly />
                    </Col>
                    <Col lg={6} className="for-student-input"  >
                        <label  className='labal-title'> Total Fee  </label>
                        <input type="number" className='form-control' />
                    </Col>
                    <Col lg={6} className="for-student-input"  >
                        <label  className='labal-title'> Pending Feee  </label>
                        <input type="number" className='form-control' />
                    </Col>
                    <Col lg={6} className="for-student-input"  >
                        <label  className='labal-title'> Fee submit in numbers    </label>
                        <input type="number" className='form-control' />
                    </Col>
                    <Col lg={6} className="for-student-input"  >
                        <label  className='labal-title'> Fee submit in words  </label>
                        <input type="text" className='form-control' />
                    </Col>
                </Row>

            </form>
            <div className="fee-edit-btn">
                <div className="student-edit-btn">
                    <button className='student-edit'>   <RecyclingIcon />Update Details </button>
                </div>

            </div>

        </div>
        </div>
    )
}
