import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import _fetch from '../config/api';
import { api_url } from '../config/config';

const SchoolData = ({ Toggle }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const username = location.state?.username;

    const [allData, setAllData] = useState([]);
    const [classData, setClassData] = useState([]);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            viewSchoolRecord();
            viewClassRecord();
        }
    }, [token]);

    const viewSchoolRecord = async () => {

        const res = await _fetch(`${api_url}teachers/?school_email=${username}`, 'GET', {}, {});
        console.log('res', res);

        if (res?.status === 200) {
            setAllData(res?.data);
        }
    };
    const viewClassRecord = async () => {

        const res = await _fetch(`${api_url}class/?school_email=${username}`, 'GET', {}, {});
        console.log('res', res);

        if (res?.status === 200) {
            setClassData(res?.data);
        }
    };

    const ViewTeacherData = (id) => {
        navigate('/schooldata', { state: { id } });
    }
    

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
                                <thead>
                                    <tr>
                                        <th scope="col">Teacher ID</th>
                                        <th scope="col">Teacher Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allData?.map((item, index) => {
                                        return (
                                            <>

                                                <tr>
                                                    <th scope="col">{index + 1}</th>
                                                    <td scope="col">{item?.first_name} {item?.last_name}</td>
                                                    <td scope="col">
                                                        <Link to="/aboutteacher" className='btn-view' >View</Link>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="table-responsive">
                            <div className='table-head'>
                                <h3 className='table-heading'>Classes</h3>
                                <Link to="/addclass" className='add-btn'>
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
                                    {classData?.map((item, index) => {
                                        return (
                                            <>

                                    <tr>
                                        <th scope="col">{item?.class_name}</th>
                                        <td scope="col">{item?.total_students}</td>
                                        <td scope="col">
                                            <Link to="" className='btn-view'>View</Link>
                                        </td>
                                    </tr>
                                    </>
                                        )
                                    })}
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
