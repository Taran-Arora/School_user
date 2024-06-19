import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import _fetch from '../config/api';
import { api_url } from '../config/config';
import Nav from './Nav'

const ClassData = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const username = localStorage.getItem('useremail');

    const [allData, setAllData] = useState([]);
    const [classData, setClassData] = useState([]);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            viewClassRecord();
        }
    }, [token]);
    const addClass = async() => {
        navigate('/addclass', { state: { username } });
    }
    const viewClassRecord = async () => {

        const res = await _fetch(`${api_url}class/?school_email=${username}`, 'GET', {}, {});

        if (res?.status === 200) {
            setClassData(res?.data);
        }
    };

    return (
        <div className='class-data px-3'>
            <Nav />
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className="table-responsive table-container">
                            <div className='table-head fixed-header-one'>
                                <h3 className='table-heading'>Classes</h3>
                                <Button className='add-btn' onClick={addClass}>
                                    <AddCircleOutlineSharpIcon />Add New Class
                                </Button>
                            </div>
                            <table className="table">
                                <tbody>
                                    <tr className='fixed-header'>
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
                                                        <Link to="/classdetails" className='btn-view' state={{ class_name: item?.class_name, school_email: item?.school_id?.school_email }} >View</Link>
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

export default ClassData
