import React, { useEffect, useState } from 'react'
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
    const loginUser = localStorage.getItem('whologin');

    const [allData, setAllData] = useState([]);
    const [classData, setClassData] = useState([]);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            if (loginUser === 'is_school') {
                viewClassRecord();
            }
            else if (loginUser === 'is_teacher') {
                viewTeacherClasses();
            }
        }
    }, [token]);

    const addClass = async () => {
        navigate('/addclass', { state: { username } });
    }

    const viewClassRecord = async () => {

        const res = await _fetch(`${api_url}class/?school_email=${username}`, 'GET', {}, {});

        if (res?.status === 200) {
            setClassData(res?.data);
        }
    };

    const viewTeacherClasses = async () => {

        const res = await _fetch(`${api_url}classes/?teacher_email=${username}`, 'GET', {}, {});

        if (res?.status === 200) {
            setClassData(res?.data);
        }
    };

    return (
        <div className='class-data px-md-3'>
            <Nav />
            <Container fluid>
                <div className="t-custom">
                    <div className='table-head fixed-header-one'>
                        <h3 className='table-heading'>Classes</h3>
                        <Button className='add-btn' onClick={addClass}>
                            <AddCircleOutlineSharpIcon />Add New Class
                        </Button>
                    </div>
                    <div className="table-responsive table-container ">


                        <table className="table">

                            <thead className='its-t-head'>
                                <tr className='fixed-header text-center'>
                                    <th scope="col"> Serial No </th>
                                    <th scope="col">Class</th>
                                    <th scope="col">Total Students</th>
                                    <th scope="col">Action</th>
                                </tr>

                            </thead>
                            <tbody className='its-t-body'>

                                {classData?.map((item, index) => {
                                    return (
                                        <>

                                            <tr className='text-center'  key={index}>
                                                <th scope="col"> {index+1 } </th>

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


                </div>

            </Container>
        </div>
    )
}

export default ClassData
