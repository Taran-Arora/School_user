import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import _fetch from '../config/api';
import { api_url } from '../config/config';

const SchoolData = ({ Toggle }) => {

    const { email } = useParams();

    const [allData, setAllData] = useState([]);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            viewSchoolRecord();
        }
    }, [token]);

    const viewSchoolRecord = async () => {
        // const data = {
        //     'email' : email
        // }
        const res = await _fetch(`${api_url}teachers?school_email=${email}`, 'GET', {} , {});
        console.log('res', res);

        if (res?.status === 200) {
            // setAllData(res?.);
        }
    };
    return (
        <div className='px-3'>
            <Nav />
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className='table-head'>
                            <h3 className='table-heading'>School Data</h3>
                        </div>
                    </Col>
                    <Col lg={6}>
                    <div className="table-responsive">
                    <div className='table-head'>
                        <h3 className='table-heading'>Teacher Data</h3>
                        <Link to="/addteacher" className='add-btn'>
                            <AddCircleOutlineSharpIcon />Add New Teacher
                        </Link>
                    </div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="col">Teacher ID</th>
                                <th scope="col">Teacher Name</th>
                            </tr>
                            <tr>
                                <th scope="col">1</th>
                                <td scope="col">Mark</td>
                                <td scope="col">
                                    <Link to="" className='btn-view'>View</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">2</th>
                                <td scope="col">Jacob</td>
                                <td scope="col">
                                    <Link to="" className='btn-view'>View</Link>
                                </td>
            
                            </tr>
                            <tr>
                                <th scope="col">3</th>
                                <td scope="col">Larry the Bird</td>
                                <td scope="col">
                                    <Link to="" className='btn-view'>View</Link>
                                </td>
                        
                            </tr>
                            <tr>
                                <th scope="col">4</th>
                                <td scope="col">Samrat the Bird</td>
                                <td scope="col">
                                    <Link to="" className='btn-view'>View</Link>
                                </td>
                         
                            </tr>
                            <tr>
                                <th scope="col">5</th>
                                <td scope="col">Larry the Bird</td>
                                <td scope="col">
                                    <Link to="" className='btn-view'>View</Link>
                                </td>
                          
                            </tr>
                            <tr>
                                <th scope="col">6</th>
                                <td scope="col">Larry the Bird</td>
                                <td scope="col">
                                    <Link to="" className='btn-view'>View</Link>
                                </td>
                             
                            </tr>
                        </tbody>
                    </table>
                </div>
                    </Col>
                    <Col lg={6}>
                    <div className="table-responsive">
                    <div className='table-head'>
                        <h3 className='table-heading'>Classes</h3>
                        <Link to="/" className='add-btn'>
                            <AddCircleOutlineSharpIcon />Add New Class
                        </Link>
                    </div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="col">Class</th>
                                <th scope="col">Total Students</th>
                                <th scope="col">Action</th>
                            </tr>
                            <tr>
                                <th scope="col">1st</th>
                                <td scope="col">60</td>
                                <td scope="col">
                                    <Link to="" className='btn-view'>View</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">2nd</th>
                                <td scope="col">70</td>
                                <td scope="col">
                                    <Link to="" className='btn-view'>View</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">3rd</th>
                                <td scope="col">English</td>
                                <td scope="col">
                                    <Link to="" className='btn-view'>View</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">4th</th>
                                <td scope="col">50</td>
                                <td scope="col">
                                    <Link to="" className='btn-view'>View</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">5th</th>
                                <td scope="col">30</td>
                                <td scope="col">
                                    <Link to="" className='btn-view'>View</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">6th</th>
                                <td scope="col">25</td>
                                <td scope="col">
                                    <Link to="" className='btn-view'>View</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SchoolData
