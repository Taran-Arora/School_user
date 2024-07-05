



// import React, { useEffect, useState } from 'react';
// import Nav from './Nav';
// import { Link, useNavigate } from 'react-router-dom';
// import Students from '../assets/Images/youth.png';
// import Inactive from "../assets/Images/snoze.png";
// import Teacher from '../assets/Images/teamwork (4).png';
// import bUser from '../assets/Images/buser.png';
// import { Col, Container, Row, Button } from 'react-bootstrap';
// import _fetch from '../../src/config/api';
// import { api_url } from '../../src/config/config';
// import toasted from '../config/toast';
// import classesImg from '../assets/Images/classes.png';
// import allteacher from '../assets/Images/teacher (1).png';
// import allsclasses from '../assets/Images/teacher (2).png';
// import bottomimg from '../assets/Images/portrait-girl-lying-wooden-floor-painting-yellow-star-with-paintbrush-removebg-preview.png';
// import management from '../assets/Images/school-management-services-4-500x500.webp';
// import Slider from '../Components/Slider';
// import Bookpreloader from './Bookpreloader';

// const Home = () => {
//     const navigate = useNavigate();

//     const handleClick1 = () => {
//         navigate('/allteachers');
//     };

//     const handleClick2 = () => {
//         navigate('/allstudents');
//     };

//     const [totalUsers, setTotalUsers] = useState({ total_users: '', active_users: '', inactive_users: '', block: '' });
//     const [allData, setAllData] = useState([]);
//     const [token, setToken] = useState(null);
//     const [blockedData, setBlockedData] = useState([]);
//     const [totalStudents, setTotalStudents] = useState();
//     const [totalTeachers, setTotalTeachers] = useState();
//     const [totalClasses, setTotalClasses] = useState();
//     const [loading, setLoading] = useState(true);

//     const whoLogin = localStorage.getItem('whologin');
//     const userEmail = localStorage.getItem('useremail');

//     useEffect(() => {
//         const storedToken = localStorage.getItem('token');
//         if (storedToken) {
//             setToken(storedToken);
//             if (whoLogin === 'is_school') {
//                 setTimeout(() => {
//                     TotalStudents();
//                 }, 2000);
//             }
//         }
//     }, [token]);

//     const TotalStudents = async () => {
//         if (!token) {
//             return;
//         }

//         const res = await _fetch(`${api_url}getstudentcount/?school_email=${userEmail}`, 'GET', {}, {});
//         const res2 = await _fetch(`${api_url}getteachercount/?school_email=${userEmail}`, 'GET', {}, {});
//         const res3 = await _fetch(`${api_url}class/?school_email=${userEmail}`, 'GET', {}, {});
        
//         setLoading(false);

//         if (res?.status === 200) {
//             setTotalStudents(res?.student_count);
//         } else {
//             navigate('/');
//         }
//         if (res2?.status === 200) {
//             setTotalTeachers(res2?.teacher_count);
//         }
//         if (res3?.status === 200) {
//             setTotalClasses(res3?.total_classes);
//         }
//     };

//     useEffect(() => {
//         if (loading) {
//             document.body.classList.add('loading');
//         } else {
//             document.body.classList.remove('loading');
//         }

//         return () => {
//             document.body.classList.remove('loading');
//         };
//     }, [loading]);

//     return (
//         <>
//             {loading ?
//                 <Bookpreloader />
//                 :
//                 <div className='px-md-3'>
//                     <Nav />
//                     <Container fluid className="cards">
//                         <Row className="g-3 my-4 my-xl-2">
//                             <Col xl={4} lg={6} md={6} onClick={handleClick1} className="p-1">
//                                 <div className="p-4 bg-white box">
//                                     <div className='content'>
//                                         <Link to='/allteachers' className='fs-5 d-link'>Total Teachers</Link>
//                                         <h3 className='fs-2'>{totalTeachers} </h3>
//                                     </div>
//                                     <img src={Students} alt="Total Users" className='img-fluid cards-img bg-green box-image' />
//                                 </div>
//                             </Col>
//                             <Col xl={4} lg={6} md={6} onClick={handleClick2} className="p-1">
//                                 <div className="p-4 bg-white box">
//                                     <div className='content'>
//                                         <Link to='/allstudents' className='fs-5 d-link'>Total Students</Link>
//                                         <h3 className='fs-2'>{totalStudents} </h3>
//                                     </div>
//                                     <img src={Teacher} alt="Active Users" className='img-fluid cards-img bg-blue box-image' />
//                                 </div>
//                             </Col>
//                             <Col xl={4} lg={6} md={6} className="p-1">
//                                 <div className="p-4 bg-white box">
//                                     <div className='content'>
//                                         <Link to='' className='fs-5 d-link'>Total Classes</Link>
//                                         <h3 className='fs-2'>{totalClasses}</h3>
//                                     </div>
//                                     <img src={classesImg} alt="Blocked Users" className='img-fluid cards-img bg-pink box-image' />
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Container>
//                     <Slider />
//                 </div>
//             }
//         </>
//     );
// };

// export default Home;




// with blur effect 

// import React, { useEffect, useState } from 'react';
// import Nav from './Nav';
// import { Link, useNavigate } from 'react-router-dom';
// import { Col, Container, Row } from 'react-bootstrap';
// import _fetch from '../../src/config/api';
// import { api_url } from '../../src/config/config';
// import Slider from '../Components/Slider';
// import BookPreloader from './Bookpreloader';
// import classesImg from '../assets/Images/classes.png';
// import Teacher from '../assets/Images/teamwork (4).png';
// import Students from '../assets/Images/youth.png';

// const Home = () => {
//     const navigate = useNavigate();
//     const [totalStudents, setTotalStudents] = useState();
//     const [totalTeachers, setTotalTeachers] = useState();
//     const [totalClasses, setTotalClasses] = useState();
//     const [loading, setLoading] = useState(true);

//     const whoLogin = localStorage.getItem('whologin');
//     const userEmail = localStorage.getItem('useremail');

//     useEffect(() => {
//         const storedToken = localStorage.getItem('token');
//         if (storedToken) {
//             if (whoLogin === 'is_school') {
//                 TotalStudents();
//             }
//         }
//     }, []);

//     const TotalStudents = async () => {
//         try {
//             const res = await _fetch(`${api_url}getstudentcount/?school_email=${userEmail}`, 'GET', {}, {});
//             const res2 = await _fetch(`${api_url}getteachercount/?school_email=${userEmail}`, 'GET', {}, {});
//             const res3 = await _fetch(`${api_url}class/?school_email=${userEmail}`, 'GET', {}, {});

//             if (res?.status === 200) setTotalStudents(res?.student_count);
//             if (res2?.status === 200) setTotalTeachers(res2?.teacher_count);
//             if (res3?.status === 200) setTotalClasses(res3?.total_classes);

//             setTimeout(() => {
//                 setLoading(false);
//             }, 2000); // Ensuring preloader runs for at least 2 seconds
//         } catch (error) {
//             navigate('/');
//         }
//     };

//     return (
//         <>
//             {loading ? <BookPreloader /> : null}
//             <div className={`content ${loading ? 'blur' : ''}`}>
//                 <Nav />
//                 <Container fluid className="cards">
//                     <Row className="g-3 my-4 my-xl-2">
//                         <Col xl={4} lg={6} md={6} onClick={() => navigate('/allteachers')} className="p-1">
//                             <div className="p-4 bg-white box">
//                                 <div className='content'>
//                                     <Link to='/allteachers' className='fs-5 d-link'>Total Teachers</Link>
//                                     <h3 className='fs-2'>{totalTeachers}</h3>
//                                 </div>
//                                 <img src={Students} alt="Total Users" className='img-fluid cards-img bg-green box-image' />
//                             </div>
//                         </Col>
//                         <Col xl={4} lg={6} md={6} onClick={() => navigate('/allstudents')} className="p-1">
//                             <div className="p-4 bg-white box">
//                                 <div className='content'>
//                                     <Link to='/allstudents' className='fs-5 d-link'>Total Students</Link>
//                                     <h3 className='fs-2'>{totalStudents}</h3>
//                                 </div>
//                                 <img src={Teacher} alt="Active Users" className='img-fluid cards-img bg-blue box-image' />
//                             </div>
//                         </Col>
//                         <Col xl={4} lg={6} md={6} className="p-1">
//                             <div className="p-4 bg-white box">
//                                 <div className='content'>
//                                     <Link to='' className='fs-5 d-link'>Total Classes</Link>
//                                     <h3 className='fs-2'>{totalClasses}</h3>
//                                 </div>
//                                 <img src={classesImg} alt="Blocked Users" className='img-fluid cards-img bg-pink box-image' />
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//                 <Slider />
//             </div>
//         </>
//     );
// };

// export default Home;



import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import _fetch from '../../src/config/api';
import { api_url } from '../../src/config/config';
import Slider from '../Components/Slider';
// import BookPreloader from './BookPreloader';
 import classesImg from '../assets/Images/classes.png';
 import Teacher from '../assets/Images/teamwork (4).png';
 import Students from '../assets/Images/youth.png';
 import BookPreloader from '../Components/Bookpreloader';


const Home = () => {
    const navigate = useNavigate();
    const [totalStudents, setTotalStudents] = useState();
    const [totalTeachers, setTotalTeachers] = useState();
    const [totalClasses, setTotalClasses] = useState();
    const [loading, setLoading] = useState(true);

    const whoLogin = localStorage.getItem('whologin');
    const userEmail = localStorage.getItem('useremail');

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            if (whoLogin === 'is_school') {
                TotalStudents();
            }
        }
    }, []);

    const TotalStudents = async () => {
        try {
            const res = await _fetch(`${api_url}getstudentcount/?school_email=${userEmail}`, 'GET', {}, {});
            const res2 = await _fetch(`${api_url}getteachercount/?school_email=${userEmail}`, 'GET', {}, {});
            const res3 = await _fetch(`${api_url}class/?school_email=${userEmail}`, 'GET', {}, {});

            if (res?.status === 200) setTotalStudents(res?.student_count);
            if (res2?.status === 200) setTotalTeachers(res2?.teacher_count);
            if (res3?.status === 200) setTotalClasses(res3?.total_classes);

            setTimeout(() => {
                setLoading(false);
            }, 2000); // Ensuring preloader runs for at least 2 seconds
        } catch (error) {
            navigate('/');
        }
    };

    return (
        <>
            {loading && <BookPreloader />}
            <div className={`home-content ${loading ? 'blur' : ''}`}>
                <Nav />
                <Container fluid className="cards">
                    <Row className="g-3 my-4 my-xl-2">
                        <Col xl={4} lg={6} md={6} onClick={() => navigate('/allteachers')} className="p-1">
                            <div className="p-4 bg-white box">
                                <div className='content'>
                                    <Link to='/allteachers' className='fs-5 d-link'>Total Teachers</Link>
                                    <h3 className='fs-2'>{totalTeachers}</h3>
                                </div>
                                <img src={Students} alt="Total Users" className='img-fluid cards-img bg-green box-image' />
                            </div>
                        </Col>
                        <Col xl={4} lg={6} md={6} onClick={() => navigate('/allstudents')} className="p-1">
                            <div className="p-4 bg-white box">
                                <div className='content'>
                                    <Link to='/allstudents' className='fs-5 d-link'>Total Students</Link>
                                    <h3 className='fs-2'>{totalStudents}</h3>
                                </div>
                                <img src={Teacher} alt="Active Users" className='img-fluid cards-img bg-blue box-image' />
                            </div>
                        </Col>
                        <Col xl={4} lg={6} md={6} className="p-1">
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
                <Slider />
            </div>
        </>
    );
};

export default Home;
