import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom';
import Students from '../assets/Images/graduation.png'
import Parents from '../assets/Images/parents.png'
import Teacher from '../assets/Images/teacher.png'
import Earning from '../assets/Images/salary.png'
import { Col, Container, Row } from 'react-bootstrap';

const AllSchool = ({ Toggle }) => {
    return (
        <div className='px-3'>
            <Nav Toggle={Toggle} />
            <Container fluid className="cards">
                <Row className="g-3 my-2">
                    <Col lg={3} md={6} className="p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className='fs-2'>15000</h3>
                                <p className='fs-5'>Students</p>
                            </div>
                            <img src={Students} alt="" className='img-fluid cards-img bg-green' />
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className='fs-2'>2250</h3>
                                <p className='fs-5'>Teachers</p>
                            </div>
                            <img src={Teacher} alt="" className='img-fluid cards-img bg-blue' />
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className='fs-2'>5900</h3>
                                <p className='fs-5'>Parents</p>
                            </div>
                            <img src={Parents} alt="" className='img-fluid cards-img bg-yellow' />
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className='fs-2'>$232323</h3>
                                <p className='fs-5'>Earning</p>
                            </div>
                            <img src={Earning} alt="" className='img-fluid cards-img bg-pink' />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <div className="table-responsive">
                    <table className="table">
                        <thead><h3 className='table-heading'>All Schools</h3></thead>
                        <tbody>
                            <tr>
                                <th scope="col">S. No.</th>
                                <th scope="col">School Name</th>
                                <th scope="col">School Email</th>
                                <th scope="col">Action</th>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>School@gmail.com</td>
                                <td className='d-flex gap-3'>
                                    <Link to="" className='btn-login'>Login</Link>
                                    <Link to="" className='btn-view'>View</Link>
                                    <Link to="" className='btn-block'>Block</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td className='d-flex gap-3'>
                                    <Link to="" className='btn-login'>Login</Link>
                                    <Link to="" className='btn-view'>View</Link>
                                    <Link to="" className='btn-block'>Block</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry the Bird</td>
                                <td>School@gmail.com</td>
                                <td className='d-flex gap-3'>
                                    <Link to="" className='btn-login'>Login</Link>
                                    <Link to="" className='btn-view'>View</Link>
                                    <Link to="" className='btn-block'>Block</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Larry the Bird</td>
                                <td>School@gmail.com</td>
                                <td className='d-flex gap-3'>
                                    <Link to="" className='btn-login'>Login</Link>
                                    <Link to="" className='btn-view'>View</Link>
                                    <Link to="" className='btn-block'>Block</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Larry the Bird</td>
                                <td>School@gmail.com</td>
                                <td className='d-flex gap-3'>
                                    <Link to="" className='btn-login'>Login</Link>
                                    <Link to="" className='btn-view'>View</Link>
                                    <Link to="" className='btn-block'>Block</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Larry the Bird</td>
                                <td>School@gmail.com</td>
                                <td className='d-flex gap-3'>
                                    <Link to="" className='btn-login'>Login</Link>
                                    <Link to="" className='btn-view'>View</Link>
                                    <Link to="" className='btn-block'>Block</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    )
}

export default AllSchool; 
