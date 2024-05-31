import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { Link, useNavigate } from 'react-router-dom';
import Students from '../assets/Images/youth.png';
// import Parents from '../assets/Images/parents.png';
import Inactive from "../assets/Images/snoze.png";
import Teacher from '../assets/Images/teamwork (4).png';
import bUser from '../assets/Images/buser.png';
import { Col, Container, Row, Button } from 'react-bootstrap';
import _fetch from '../../src/config/api';
import { api_url } from '../../src/config/config';
import snoze1 from '../assets/Images/snoze1.png';

const Home = ({ Toggle }) => {

    const navigate = useNavigate();

    const [totalUsers, setTotalUsers] = useState({ total_users: '', active_users: '', inavtive_users: '', block: '' });
    const [allData, setAllData] = useState([]);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            schoolData();
        }
    }, [token]);

    const schoolData = async () => {
        if (!token) {
            return;
        }
        const res = await _fetch(`${api_url}userdata/`, 'GET', {}, {});

        if (res?.status === 200) {
            setAllData(res?.users);
            setTotalUsers({
                total_users: res?.total_users,
                active_users: res?.active_users,
                inavtive_users: res?.inavtive_users,
                block: res?.block,
            });
        } else {
            navigate('/');
        }
    };

    const ViewData = (username) => {
        navigate('/schooldata', { state: { username } });
    }

    return (
        <div className='px-3'>
            <Nav />
            <Container fluid className="cards">
                <Row className="g-3 my-4 my-xl-2">
                    <Col xl={3} lg={6} md={6} className="p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className='fs-2'>{totalUsers?.total_users} </h3>
                                <p className='fs-5'>Total Users</p>
                            </div>
                            <img src={Students} alt="Total Users" className='img-fluid cards-img bg-green' />
                        </div>
                    </Col>
                    <Col xl={3} lg={6} md={6} className="p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className='fs-2'>{totalUsers?.active_users} </h3>
                                <p className='fs-5'>Active Users</p>
                            </div>
                            <img src={Teacher} alt="Active Users" className='img-fluid cards-img bg-blue' />
                        </div>
                    </Col>
                    <Col xl={3} lg={6} md={6} className="p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className='fs-2'>{totalUsers?.inavtive_users} </h3>
                                <p className='fs-5'>Inactive Users</p>
                            </div>
                            <img src={snoze1} alt="Inactive Users" className='img-fluid cards-img bg-yellow' style={{width:"88px" , height:"88px"}} />
                        </div>
                    </Col>
                    <Col xl={3} lg={6} md={6} className="p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className='fs-2'>{totalUsers?.block}</h3>
                                <p className='fs-5'>Blocked Users</p>
                            </div>
                            <img src={bUser} alt="Blocked Users" className='img-fluid cards-img bg-pink' />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <h3 className='table-heading'>All Schools</h3>
                            <tr>
                                <th scope="col">S. No.</th>
                                <th scope="col">School Name</th>
                                <th scope="col">School Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allData?.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item?.first_name}</td>
                                    <td>{item?.username}</td>
                                    <td className='d-flex gap-3'>
                                        <Link to="" className='btn-login'>Login</Link>
                                        {/* <Link to='/schooldata' { state: { username } } className='btn-view'>View</Link> */}
                                        <Button className='btn-view'onClick={() => ViewData(item?.username)} >View</Button>
                                        <Link to="" className='btn-block'>Block</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
}

export default Home;

