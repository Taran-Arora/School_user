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
import toasted from '../config/toast';

const Home = ({ Toggle }) => {

    const navigate = useNavigate();

    const [totalUsers, setTotalUsers] = useState({ total_users: '', active_users: '', inactive_users: '', block: '' });
    const [allData, setAllData] = useState([]);
    const [token, setToken] = useState(null);
    const [blockedData, setBlockedData] = useState([]);
    const [totalStudents, setTotalStudents] = useState();
    const [totalTeachers, setTotalTeachers] = useState();

    const whoLogin = localStorage.getItem('whologin');
    const userEmail = localStorage.getItem('useremail');

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            if (whoLogin === 'is_school') {
                TotalStudents();
            }
        }
    }, [token]);

    const TotalStudents = async () => {
        if (!token) {
            return;
        }
        const res = await _fetch(`${api_url}getstudentcount/?school_email=${userEmail}`, 'GET', {}, {});

        const res2 = await _fetch(`${api_url}getteachercount/?school_email=${userEmail}`, 'GET', {}, {});

        if (res?.status === 200) {
            setTotalStudents(res?.student_count);

        } else {
            navigate('/');
        }
        console.log('res2', res2);
        if (res2?.status === 200) {
            setTotalTeachers(res2?.teacher_count);
        }
    };

    const isUserBlocked = (username) => {
        return blockedData.some((item) => item.user?.username === username);
    };

    const blockUser = (email) => {
        submitBlockUser(email, true);
    }

    const unBlockUser = (email) => {
        submitBlockUser(email, false);
    }
    const submitBlockUser = async (email, block) => {
        let res = '';
        let data = {
            'school_email': email,
            'block': block
        }

        if (block === true) {
            res = await _fetch(`${api_url}block/`, "POST", data, {});
        }
        else {
            res = await _fetch(`${api_url}unblock/`, "POST", data, {});
        }
        if (res?.status === 200) {
            toasted.success(res?.message);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }

    const ViewData = (username) => {
        navigate('/schooldata', { state: { username } });
    }

    return (
        <div className='px-3'>
            <Nav />
            <Container fluid className="cards">
                <Row className="g-3 my-4 my-xl-2">
                    <Col xl={4} lg={6} md={6} sm={6} className="p-1">
                        <div className="p-4 bg-white box">
                            <div className='content'>
                                <Link to='/allteachers' className='fs-5 d-link'>Total Teachers</Link>
                                <h3 className='fs-2'>{totalTeachers} </h3>
                            </div>
                            <img src={Students} alt="Total Users" className='img-fluid cards-img bg-green box-image' />
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={6} className="p-1">
                        <div className="p-4 bg-white box">
                            <div className='content'>
                                <Link to='/allstudents' className='fs-5 d-link'>Total Students</Link>
                                <h3 className='fs-2'>{totalStudents} </h3>
                            </div>
                            <img src={Teacher} alt="Active Users" className='img-fluid cards-img bg-blue box-image' />
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={6} className="p-1">
                        <div className="p-4 bg-white box">
                            <div className='content'>
                                <Link to='' className='fs-5 d-link'>Blocked Users</Link>
                                <h3 className='fs-2'>{totalUsers?.block}</h3>
                            </div>
                            <img src={bUser} alt="Blocked Users" className='img-fluid cards-img bg-pink box-image' />
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={6} className="p-1">
                        <div className="p-4 bg-white box">
                            <div className='content'>
                                <Link to='' className='fs-5 d-link'>Total Teachers</Link>
                                <h3 className='fs-2'>{totalTeachers} </h3>
                            </div>
                            <img src={Students} alt="Total Users" className='img-fluid cards-img bg-green box-image' />
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={6} className="p-1">
                        <div className="p-4 bg-white box">
                            <div className='content'>
                                <Link className='fs-5 d-link'>Total Students</Link>
                                <h3 className='fs-2'>{totalStudents} </h3>
                            </div>
                            <img src={Teacher} alt="Active Users" className='img-fluid cards-img bg-blue box-image' />
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={6} className="p-1">
                        <div className="p-4 bg-white box">
                            <div className='content'>
                                <Link className='fs-5 d-link'>Blocked Users</Link>
                                <h3 className='fs-2'>{totalUsers?.block}</h3>
                            </div>
                            <img src={bUser} alt="Blocked Users" className='img-fluid cards-img bg-pink box-image' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
