import React from 'react'
import Nav from './Nav'
import { Col, Container, Row } from 'react-bootstrap'
import AddImg from './AddImg';

const AddTeacher = () => {
    return (
        <div className='px-3'>
            <Nav />
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className='top-head d-flex'>
                            <h3 className='top-heading'>Add a New Teacher</h3>
                            <AddImg/>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <form action="" className='teacher-from'>
                            <div className='form-head mb-5'>
                                <h5 className='form-heading'>Individual Details</h5>
                            </div>
                            <Row>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>First Name *</label>
                                    <input type="text" placeholder="Enter First Name" className="form-control" />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Last Name *</label>
                                    <input type="text" placeholder="Enter Last Name" className="form-control" />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Gender *</label>
                                    <select className='form-control'>
                                        <option value>Please Select Gender *</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Contact *</label>
                                    <input type="number" className="form-control" placeholder='Enter Contact Number'/>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Email *</label>
                                    <input type="mail" className="form-control" placeholder='Enter Email Address'/>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Subject *</label>
                                    <input type="text" placeholder="Enter Subject Name" className="form-control" />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Period 1st *</label>
                                    <select className='form-control'>
                                        <option value>Select Class *</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Period 2nd *</label>
                                    <select className='form-control'>
                                        <option value>Select Class *</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Period 3rd *</label>
                                    <select className='form-control'>
                                        <option value>Select Class *</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Period 4th *</label>
                                    <select className='form-control'>
                                        <option value>Select Class *</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Period 5th *</label>
                                    <select className='form-control'>
                                        <option value>Select Class *</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Period 6th *</label>
                                    <select className='form-control'>
                                        <option value>Select Class *</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </Col>
                                <Col lg={12} className='form-group'>
                                    <button type='submit' className='btn-submit'>Submit</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddTeacher
