// import React, { useEffect, useState } from 'react'
// import Nav from './Nav'
// import { Link } from 'react-router-dom';
// import Students from '../assets/Images/graduation.png'
// import Parents from '../assets/Images/parents.png'
// import Teacher from '../assets/Images/teacher.png'
// import Earning from '../assets/Images/salary.png'
// import { Col, Container, Row } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import _fetch from '../../src/config/api';
// import { api_url } from '../../src/config/config';
// // import { useState } from 'react'

// const Home = ({ Toggle }) => {
//     const Navigate = useNavigate();

//     const [totalUsers, setTotalUsers] = useState({ total_users: '', active_users: '' });
//     const [allData, setAllData] = useState([]);
//     const [token, settoken] = useState([]);
//     console.log('totalUsers', totalUsers);
//     useEffect(() => {
//         const storedschool = localStorage.getItem('token');
//         if (storedschool) {
//             settoken(storedschool);
//         }
//         schoolData();
//     }, [token]);


//     const schoolData = async () => {
//         let res = '';
//         if (token) {
//             res = await _fetch(`${api_url}userdata/`, 'GET', {}, {});
//         }
//         if (res?.status === 200) {
//             setAllData(res?.users);
//             setTotalUsers({
//                 'total_users': res?.total_users,
//                 'active_users': res?.active_users
//             });
//         }
//         else {
//             Navigate('/login');
//         }
//     }

//     return (
//         <div className='px-3'>
//             <Nav Toggle={Toggle} />
//             <Container fluid className="cards">
//                 <Row className="g-3 my-2">
//                     <Col lg={3} md={6} className="p-1">
//                         <div className='px-3'>
//                             <Nav Toggle={Toggle} />
//                             <div className="container-fluid">
//                                 <div className="row g-3 my-2">
//                                     <div className="col-md-3 p-1">
//                                         <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
//                                             <div>
//                                                 <h3 className='fs-2'>{totalUsers?.total_users}</h3>
//                                                 <p className='fs-5'>Total Users</p>
//                                             </div>
//                                             <img src={Students} alt="" className='img-fluid cards-img bg-green' />
//                                         </div>
//                                     </Col>
//                                     <Col lg={3} md={6} className="p-1">
//                                         <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
//                                             <div>
//                                                 <h3 className='fs-2'>{totalUsers?.active_users}</h3>
//                                                 <p className='fs-5'>Is Active Users</p>
//                                             </div>
//                                             <img src={Teacher} alt="" className='img-fluid cards-img bg-blue' />
//                                         </div>
//                                     </Col>
//                                     <Col lg={3} md={6} className="p-1">
//                                         <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
//                                             <div>
//                                                 <h3 className='fs-2'>0</h3>
//                                                 <p className='fs-5'>In Active Users</p>
//                                             </div>
//                                             <img src={Parents} alt="" className='img-fluid cards-img bg-yellow' />
//                                         </div>
//                                     </Col>
//                                     <Col lg={3} md={6} className="p-1">
//                                         <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
//                                             <div>
//                                                 <h3 className='fs-2'>1</h3>
//                                                 <p className='fs-5'>Blocked Users</p>
//                                             </div>
//                                             <img src={Earning} alt="" className='img-fluid cards-img bg-pink' />
//                                         </div>
//                                     </Col>
//                                 </Row>
//                             </Container>
//                             <Container fluid>
//                                 <div className="table-responsive">
//                                     <table className="table">
//                                         <thead><h3 className='table-heading'>All Schools</h3></thead>
//                                         <tbody>
//                                             <tr>
//                                                 <th scope="col">S. No.</th>
//                                                 <th scope="col">School Name</th>
//                                                 <th scope="col">School Email</th>
//                                                 <th scope="col">Action</th>
//                                             </tr>
//                                             <tr>
//                                                 <th scope="row">1</th>
//                                                 <td>Mark</td>
//                                                 <td>School@gmail.com</td>
//                                                 <td className='d-flex gap-3'>
//                                                     <Link to="" className='btn-login'>Login</Link>
//                                                     <Link to="" className='btn-view'>View</Link>
//                                                     <Link to="" className='btn-block'>Block</Link>
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <th scope="row">2</th>
//                                                 <td>Jacob</td>
//                                                 <td>Thornton</td>
//                                                 <td className='d-flex gap-3'>
//                                                     <Link to="" className='btn-login'>Login</Link>
//                                                     <Link to="" className='btn-view'>View</Link>
//                                                     <Link to="" className='btn-block'>Block</Link>
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <th scope="row">3</th>
//                                                 <td>Larry the Bird</td>
//                                                 <td>School@gmail.com</td>
//                                                 <td className='d-flex gap-3'>
//                                                     <Link to="" className='btn-login'>Login</Link>
//                                                     <Link to="" className='btn-view'>View</Link>
//                                                     <Link to="" className='btn-block'>Block</Link>
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <th scope="row">4</th>
//                                                 <td>Larry the Bird</td>
//                                                 <td>School@gmail.com</td>
//                                                 <td className='d-flex gap-3'>
//                                                     <Link to="" className='btn-login'>Login</Link>
//                                                     <Link to="" className='btn-view'>View</Link>
//                                                     <Link to="" className='btn-block'>Block</Link>
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <th scope="row">5</th>
//                                                 <td>Larry the Bird</td>
//                                                 <td>School@gmail.com</td>
//                                                 <td className='d-flex gap-3'>
//                                                     <Link to="" className='btn-login'>Login</Link>
//                                                     <Link to="" className='btn-view'>View</Link>
//                                                     <Link to="" className='btn-block'>Block</Link>
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <th scope="row">6</th>
//                                                 <td>Larry the Bird</td>
//                                                 <td>School@gmail.com</td>
//                                                 <td className='d-flex gap-3'>
//                                                     <Link to="" className='btn-login'>Login</Link>
//                                                     <Link to="" className='btn-view'>View</Link>
//                                                     <Link to="" className='btn-block'>Block</Link>
//                                                 </td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                         </div>
//                         <table className="table mt-5 mx-4">
//                             <thead className='my-3'><h3>All Schools</h3>
//                                 <tr>
//                                     <th scope="col">S. No.</th>
//                                     <th scope="col">School Name</th>
//                                     <th scope="col">School Email</th>
//                                     <th scope="col"></th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {allData?.map((item, index) => {
//                                     return (
//                                         <>

//                                             <tr>
//                                                 <th scope="row">{index + 1}</th>
//                                                 <td>{item?.first_name}</td>
//                                                 <td>{item?.username}</td>
//                                                 <td className='d-flex justify-content-evenly'>
//                                                     <a href="" className='btn btn-primary'>Login</a>
//                                                     <a href="" className='btn btn-primary'>View</a>
//                                                     <a href="" className='btn btn-primary'>Block</a>
//                                                 </td>
//                                             </tr>
//                                         </>
//                                     )
//                                 })}
//                                 {/* <tr>
//                         <th scope="row">2</th>
//                         <td>Jacob</td>
//                         <td>Thornton</td>
//                         <td className='d-flex justify-content-evenly'>
//                             <a href="" className='btn btn-primary'>Login</a>
//                             <a href="" className='btn btn-primary'>View</a>
//                             <a href="" className='btn btn-primary'>Block</a>
//                         </td>
//                     </tr>
//                     <tr>
//                         <th scope="row">3</th>
//                         <td>Larry the Bird</td>
//                         <td>School@gmail.com</td>
//                         <td className='d-flex justify-content-evenly'>
//                             <a href="" className='btn btn-primary'>Login</a>
//                             <a href="" className='btn btn-primary'>View</a>
//                             <a href="" className='btn btn-primary'>Block</a>
//                         </td>
//                     </tr>
//                     <tr>
//                         <th scope="row">4</th>
//                         <td>Larry the Bird</td>
//                         <td>School@gmail.com</td>
//                         <td className='d-flex justify-content-evenly'>
//                             <a href="" className='btn btn-primary'>Login</a>
//                             <a href="" className='btn btn-primary'>View</a>
//                             <a href="" className='btn btn-primary'>Block</a>
//                         </td>
//                     </tr>
//                     <tr>
//                         <th scope="row">5</th>
//                         <td>Larry the Bird</td>
//                         <td>School@gmail.com</td>
//                         <td className='d-flex justify-content-evenly'>
//                             <a href="" className='btn btn-primary'>Login</a>
//                             <a href="" className='btn btn-primary'>View</a>
//                             <a href="" className='btn btn-primary'>Block</a>
//                         </td>
//                     </tr>
//                     <tr>
//                         <th scope="row">6</th>
//                         <td>Larry the Bird</td>
//                         <td>School@gmail.com</td>
//                         <td className='d-flex justify-content-evenly'>
//                             <a href="" className='btn btn-primary'>Login</a>
//                             <a href="" className='btn btn-primary'>View</a>
//                             <a href="" className='btn btn-primary'>Block</a>
//                         </td>
//                     </tr> */}
//                             </tbody>
//                         </table>
//                     </div>
//                 </Row>
//             </Container>
//         </div>

//     )
// }

// export default AllSchool; 








import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { Link, useNavigate } from 'react-router-dom';
import Students from '../assets/Images/graduation.png';
import Parents from '../assets/Images/parents.png';
import Teacher from '../assets/Images/teacher.png';
import Earning from '../assets/Images/salary.png';
import { Col, Container, Row } from 'react-bootstrap';
import _fetch from '../../src/config/api';
import { api_url } from '../../src/config/config';

const Home = () => {
    const navigate = useNavigate();

    const [totalUsers, setTotalUsers] = useState({ total_users: '', active_users: '' });
    const [allData, setAllData] = useState([]);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    useEffect(() => {
        if (token) {
            schoolData();
        }
    }, [token]);

    const schoolData = async () => {
        if (!token) {
            return;
        }

        const res = await _fetch(`${api_url}userdata/`, 'GET', {}, { Authorization: `Bearer ${token}` });

        if (res?.status === 200) {
            setAllData(res?.users);
            setTotalUsers({
                total_users: res?.total_users,
                active_users: res?.active_users,
            });
        } else {
            navigate('/login');
        }
    };

    return (
        <div className='px-3'>
            <Nav />
            <Container fluid className="cards">
                <Row className="g-3 my-4 my-xl-2">
                    <Col xl={3} lg={6} md={6} className="p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className='fs-2'>{totalUsers?.total_users}</h3>
                                <p className='fs-5'>Total Users</p>
                            </div>
                            <img src={Students} alt="Total Users" className='img-fluid cards-img bg-green' />
                        </div>
                    </Col>
                    <Col xl={3} lg={6} md={6} className="p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className='fs-2'>{totalUsers?.active_users}</h3>
                                <p className='fs-5'>Active Users</p>
                            </div>
                            <img src={Teacher} alt="Active Users" className='img-fluid cards-img bg-blue' />
                        </div>
                    </Col>
                    <Col xl={3} lg={6} md={6} className="p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className='fs-2'>0</h3>
                                <p className='fs-5'>Inactive Users</p>
                            </div>
                            <img src={Parents} alt="Inactive Users" className='img-fluid cards-img bg-yellow' />
                        </div>
                    </Col>
                    <Col xl={3} lg={6} md={6} className="p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className='fs-2'>1</h3>
                                <p className='fs-5'>Blocked Users</p>
                            </div>
                            <img src={Earning} alt="Blocked Users" className='img-fluid cards-img bg-pink' />
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
                                        <Link to="/schooldata" className='btn-view'>View</Link>
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

