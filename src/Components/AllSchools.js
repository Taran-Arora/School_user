import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const AllSchools = ({Toggle}) => {
    return (
        <div className='px-3'>
            <Nav Toggle={Toggle} />
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

export default AllSchools
