import React, { useEffect, useState } from 'react';
import Nav from './Nav'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import _fetch from '../../src/config/api';
import { api_url } from '../../src/config/config';
import toasted from '../config/toast';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import BookPreloader from '../Components/Bookpreloader';

const AllTeachers = () => {

    const [teacherData, setTeacherData] = useState([]);
    const [loading, setLoading] = useState(false);

    const userEmail = localStorage.getItem('useremail');

    useEffect(() => {
        TeacherData();
    }, []);

    const TeacherData = async () => {
        setLoading(true);
        const res = await _fetch(`${api_url}getteachercount/?school_email=${userEmail}`, 'GET', {}, {});
        if (res.status === 200) {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
            setTeacherData(res?.data);
        }
    };

    const deleteTeacher = async (email, school_email) => {
        let data = {
            'email': email,
            'school_email': school_email
        }

        let res = await _fetch(`${api_url}delete/`, "POST", data, {});
        if (res?.status === 200) {
            toasted.success(res?.message);
            TeacherData();
        }
    }

    return (
        <>
            {loading && <BookPreloader />}
            <div className={`px-md-3 ${loading ? 'blur' : ''}`}>
                <Nav />
                <Container fluid>
                    <div className='t-custom'>
                        <div className='table-head fixed-header-one '>
                            <h3 className='table-heading '>All Teachers</h3>
                            <Link to="/addteacher" state={{ username: userEmail }} className='add-btn'>
                                <AddCircleOutlineSharpIcon />Add New Teacher
                            </Link>
                        </div>
                        <div className="table-responsive table-container">


                            <table className="table">


                                <thead className='its-t-head'>
                                    <tr className='fixed-header' >
                                        <th scope="col">#</th>
                                        <th scope="col">Teacher Name</th>
                                        <th>Teacher Email</th>
                                        {/* <th>School Email</th> */}
                                        <th>Subject</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {teacherData?.map((item, index) => (
                                        <tr>
                                            <th scope="col">{index + 1}</th>
                                            <td scope="col">{item?.first_name} {item?.last_name}</td>
                                            <td scope="col">{item?.email}</td>
                                            {/* <td scope="col">{item?.school_id?.school_email}</td> */}
                                            <td scope="col">{item?.subjects}</td>

                                            <td scope="col">{item?.gender}</td>
                                            <td scope="col">{item?.contact}</td>
                                            <td className='d-flex gap-3 set-view-btn' scope="col">
                                                <Link to="/aboutteacher" state={{ teacher_email: item?.email, school_email: item?.school_id?.school_email }} className='btn-view'>View</Link>
                                                <DeleteIcon onClick={() => deleteTeacher(item?.email, item?.school_id?.school_email)} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default AllTeachers;