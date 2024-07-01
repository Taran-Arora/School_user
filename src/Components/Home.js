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
import { useHistory } from 'react-router-dom';
import classesImg from '../assets/Images/classes.png'
import Studentsall from '../assets/Images/students (1).png'
import allteacher from '../assets/Images/teacher (1).png';
import allsclasses from '../assets/Images/teacher (2).png'
import bottomimg from '../assets/Images/portrait-girl-lying-wooden-floor-painting-yellow-star-with-paintbrush-removebg-preview.png'
import Celendar from '../Components/Celendar'
import management from '../assets/Images/school-management-services-4-500x500.webp'
import Slider from '../Components/Slider';
const Home = ({ Toggle }) => {

    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate('/allteachers');
    };

    const handleClick2 = () => {
        navigate('/allstudents')
    }

    // const navigate = useNavigate();

    const [totalUsers, setTotalUsers] = useState({ total_users: '', active_users: '', inactive_users: '', block: '' });
    const [allData, setAllData] = useState([]);
    const [token, setToken] = useState(null);
    const [blockedData, setBlockedData] = useState([]);
    const [totalStudents, setTotalStudents] = useState();
    const [totalTeachers, setTotalTeachers] = useState();
    const [totalClasses, setTotalClasses] = useState();


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

        const res3 = await _fetch(`${api_url}class/?school_email=${userEmail}`, 'GET', {}, {});

        if (res?.status === 200) {
            setTotalStudents(res?.student_count);

        } else {
            // navigate('/');
        }
        if (res2?.status === 200) {
            setTotalTeachers(res2?.teacher_count);
        }

        if (res3?.status === 200) {
            setTotalClasses(res3?.total_classes);
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

    // function handleClick() {
    //     window.location.href = "mailto:Ashokmonga9@gmail.com";
    //   }
    //   function handleclick2() {
    //     window.location.href = "tel:95096-13000";
    //   }

    //   function handleClick4() {
    //     window.open("https://www.instagram.com/makemyhome26?igsh=YzljYTk1ODg3Zg==", '_blank');
    //   }
    //   function handleClickWhatsApp1() {
    //     window.location.href = 'whatsapp://send?phone=+9195096-13000';

    //   }



    return (
        <div className='px-3'>
            <Nav />
            <Container fluid className="cards">
                <Row className="g-3 my-4 my-xl-2">
                    <Col xl={4} lg={6} md={6} sm={6} onClick={handleClick1} className="p-1">
                        <div className="p-4 bg-white box">
                            <div className='content'>
                         
                                <Link to='/allteachers' className='fs-5 d-link'>Total Teachers</Link>
                                <h3 className='fs-2'>{totalTeachers} </h3>
                            </div>
                            <img src={Students} alt="Total Users" className='img-fluid cards-img bg-green box-image' />
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={6} onClick={handleClick2} className="p-1">
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
                                <Link to='' className='fs-5 d-link'>Total Classes</Link>
                                <h3 className='fs-2'>{totalClasses}</h3>
                            </div>
                            <img src={classesImg} alt="Blocked Users" className='img-fluid cards-img bg-pink box-image' />
                        </div>
                    </Col>
        
                </Row>
            </Container>


            {/* <Container fluid className="cards">
                <Row className="g-3 my-4 my-xl-2">
                    <Col xl={4} lg={6} md={6} sm={6} onClick={handleClick1} className="p-1">
                        <div className="user-card">
                            <div className="u-card-heading">
                                <h6> Total Students</h6>
                            </div>
                            <div className="u-card-des">
                                <h3 className='fs-2'>{totalStudents} </h3>
                            </div>
                            <div className="user-card-img">
                                <img src={Studentsall} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={6} onClick={handleClick1} className="p-1">
                        <div className="user-card">
                            <div className="u-card-heading">
                                <h6> Total Teachers </h6>
                            </div>
                            <div className="u-card-des">
                                <h3 className='fs-2'>{totalTeachers} </h3>
                            </div>
                            <div className="user-card-img">
                                <img src={allteacher} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={6} onClick={handleClick1} className="p-1">
                        <div className="user-card">
                            <div className="u-card-heading">
                                <h6> All Classes </h6>
                            </div>
                            <div className="u-card-des">
                                <h3 className='fs-2'>{totalClasses} </h3>
                            </div>
                            <div className="user-card-img">
                                <img src={allsclasses} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Celendar />
                    </Col>
                    <Col lg={6} className='for-custom-cal' >
                        <div className="new-custom-cal">
                            <img src={management} alt="" />

                        </div>

                    </Col>

                </Row>



            </Container> */}
            <Slider/>
        </div>
    );
}

export default Home;
