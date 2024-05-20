import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';

const AllTeachers = () => {
    return (
        <div className='px-3'>
            <Nav />
            <Container fluid>
                <div className="table-responsive">
                    <div className='table-head'>
                        <h3 className='table-heading'>All Teachers</h3>
                        <Link to="/" className='add-btn'>
                            <AddCircleOutlineSharpIcon />Add New Teacher
                        </Link>
                    </div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="col">Teacher ID</th>
                                <th scope="col">Teacher Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Action</th>
                            </tr>
                            <tr>
                                <th scope="col">1</th>
                                <td scope="col">Mark</td>
                                <td scope="col">School@gmail.com</td>
                                <td scope="col">Male</td>
                                <td scope="col">+91 1234567890</td>
                                <td className='d-flex gap-3' scope="col">
                                    <Link to="" className='btn-login'>Login</Link>
                                    <Link to="" className='btn-view'>View</Link>
                                    <Link to="" className='btn-block'>Block</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">2</th>
                                <td scope="col">Jacob</td>
                                <td scope="col">school@gmail.com</td>
                                <td scope="col">Male</td>
                                <td scope="col">+91 1234567890</td>
                                <td className='d-flex gap-3' scope="col">
                                    <Link to="" className='btn-login'>Login</Link>
                                    <Link to="" className='btn-view'>View</Link>
                                    <Link to="" className='btn-block'>Block</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">3</th>
                                <td scope="col">Larry the Bird</td>
                                <td scope="col">School@gmail.com</td>
                                <td scope="col">Male</td>
                                <td scope="col">+91 1234567890</td>
                                <td className='d-flex gap-3' scope="col">
                                    <Link to="" className='btn-login'>Login</Link>
                                    <Link to="" className='btn-view'>View</Link>
                                    <Link to="" className='btn-block'>Block</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">4</th>
                                <td scope="col">Samrat the Bird</td>
                                <td scope="col">School@gmail.com</td>
                                <td scope="col">Male</td>
                                <td scope="col">+91 1234567890</td>
                                <td className='d-flex gap-3' scope="col">
                                    <Link to="" className='btn-login'>Login</Link>
                                    <Link to="" className='btn-view'>View</Link>
                                    <Link to="" className='btn-block'>Block</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">5</th>
                                <td scope="col">Larry the Bird</td>
                                <td scope="col">School@gmail.com</td>
                                <td scope="col">Male</td>
                                <td scope="col">+91 1234567890</td>
                                <td className='d-flex gap-3' scope="col">
                                    <Link to="" className='btn-login'>Login</Link>
                                    <Link to="" className='btn-view'>View</Link>
                                    <Link to="" className='btn-block'>Block</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">6</th>
                                <td scope="col">Larry the Bird</td>
                                <td scope="col">School@gmail.com</td>
                                <td scope="col">Male</td>
                                <td scope="col">+91 1234567890</td>
                                <td className='d-flex gap-3' scope="col">
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

export default AllTeachers
