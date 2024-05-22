import React from 'react'
import Nav from './Nav'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const AddSchool = () => {
    return (
        <div className='px-3'>
            <Nav />
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className='top-head d-flex'>
                            <h3 className='top-heading'>Add a New School</h3>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <form action="" className='teacher-from'>
                            <div className='form-head mb-5'>
                                <h5 className='form-heading'>Enter School Details Below</h5>
                            </div>
                            
                            <Row>
                                <Col xl={6} lg={6} className='form-group'>
                                    <label>Enter School Name  </label>
                                    <input type="text" placeholder="Enter School Name" className="form-control" />
                                </Col>
                                <Col xl={6} lg={6} className='form-group'>
                                    <label>School Email</label>
                                    <input type="mail" placeholder="School Email" className="form-control" />
                                </Col>
                                <Col xl={6} lg={6} className='form-group'>
                                    <label>Password</label>
                                    <input type="password" placeholder="Enter Password" className="form-control" />
                                </Col>
                                <Col xl={6} lg={6} className='form-group'>
                                    <label>Confirm Password</label>
                                    <input type="password" placeholder="Confirm Password" className="form-control" />
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

export default AddSchool
