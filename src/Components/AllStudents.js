import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import _fetch from '../../src/config/api';
import { api_url } from '../../src/config/config';
import toasted from "../../src/config/toast";
import BookPreloader from '../Components/Bookpreloader';

export default function AllStudents() {

    const [alStudentsData, setAllStudentsData] = useState([]);
    const [loading, setLoading] = useState(false);

    const userEmail = localStorage.getItem('useremail');
    const loginUser = localStorage.getItem('whologin');

    useEffect(() => {
        if (loginUser === 'is_school') {
            StudentsData();
        }
        else if (loginUser === 'is_teacher') {
            TeachersStudentData();
        }

    }, []);

    const StudentsData = async () => {
        setLoading(true);
        const res = await _fetch(`${api_url}getstudentcount/?school_email=${userEmail}`, 'GET', {}, {});
        if (res.status === 200) {
            setAllStudentsData(res?.data);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    };

    const TeachersStudentData = async () => {
        const res = await _fetch(`${api_url}allstudentdata/?teacher_email=${userEmail}`, 'GET', {}, {});
        if (res.status === 200) {
            setAllStudentsData(res?.data);
        }
    };

    const deleteStudent = async (email, school_email) => {
        let data = {
            'email': email,
            'school_email': school_email
        }
        let res = await _fetch(`${api_url}deletestudent/`, "POST", data, {});
        if (res?.status === 200) {
            toasted.success(res?.message);
            StudentsData();
        }
    }

    return (
        <>
            {loading && <BookPreloader />}
            <div className={`px-md-3 ${loading ? 'blur' : ''}`}>
                <Nav />
                <Container fluid>
                    <div className="t-custom">
                        <div className='table-head fixed-header-one'>
                            <h3 className='table-heading'>All Students</h3>
                            {/* <Link to="/addstudent" className='add-btn'>
                        <AddCircleOutlineSharpIcon />Add New Student
                    </Link> */}
                        </div>

                        <div className="table-responsive table-container">

                            <table className="table">

                                <thead className='its-t-head'>
                                    <tr className='fixed-header'>
                                        <th scope="col">#</th>
                                        <th scope="col ">Student Name</th>
                                        <th scope="col">School Name</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {alStudentsData?.map((item, index) => (
                                        <tr>
                                            <th scope="col">{index + 1}</th>
                                            <td scope="col " className='for-name'> {item?.name}</td>
                                            <td scope="col">{item?.school_id?.school_name}</td>
                                            <td scope="col">{item?.gender}</td>
                                            <td scope="col">{item?.contact_No}</td>
                                            <td className='d-flex gap-3' scope="col">
                                                <Link to="/aboutstudent" className='btn-view' state={{ email: item?.email, class_id: item?.class_id?.class_name, school_email: item?.school_id?.school_email }}>View</Link>
                                                <DeleteIcon className='delete-icon' onClick={() => deleteStudent(item?.email, item?.school_id?.school_email)} />

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



