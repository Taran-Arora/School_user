import React from 'react'
import Nav from './Nav'
import { Col, Container, Row } from 'react-bootstrap'

const AddTeacher = () => {
    return (
        <div className='px-3'>
            <Nav />
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className='top-head d-flex'>
                            <h3 className='top-heading'>Add a New Class</h3>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <form action="" className='teacher-from'>
                            <div className='form-head mb-5'>
                                <h5 className='form-heading'>Individual Details</h5>
                            </div>
                            <Row>
                                <Col xl={6} lg={6} className='form-group'>
                                    <label>Enter Class Name  </label>
                                    <input type="text" placeholder="Enter Class Name" className="form-control" />
                                </Col>
                                <Col xl={6} lg={6} className='form-group'>
                                    <label>Total Students</label>
                                    <input type="number" placeholder="Total Numbers of Students" className="form-control" />
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
