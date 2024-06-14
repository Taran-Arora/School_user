import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import _fetch from '../../src/config/api';
import { api_url } from '../../src/config/config';

export default function AllStudents() {

    const navigate = useNavigate();

    const [alStudentsData, setAllStudentsData] = useState([]);

    const userEmail = localStorage.getItem('useremail');

    useEffect(() => {
        StudentsData();
    }, []);

    const StudentsData = async () => {

        const res = await _fetch(`${api_url}getstudentcount/?school_email=${userEmail}`, 'GET', {}, {});
        if (res.status === 200) {
            setAllStudentsData(res?.data);
        }
    };

    return (
        <div className='px-3'>
            <Nav />
            <Container fluid>
                <div className="table-responsive">
                    <div className='table-head'>
                        <h3 className='table-heading'>All Students</h3>
                        {/* <Link to="/addstudent" className='add-btn'>
                        <AddCircleOutlineSharpIcon />Add New Student
                    </Link> */}
                    </div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Student Name</th>
                                <th scope="col">School Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Action</th>
                            </tr>
                            {alStudentsData?.map((item, index) => (
                                <tr>
                                    <th scope="col">{index + 1}</th>
                                    <td scope="col">{item?.name}</td>
                                    <td scope="col">{item?.school_id?.school_name}</td>
                                    <td scope="col">{item?.gender}</td>
                                    <td scope="col">{item?.contact_No}</td>
                                    <td className='d-flex gap-3' scope="col">
                                        <Link to="/aboutstudent" className='btn-view' state={{ email: item?.email, class_id: item?.class_id?.class_name, school_email: item?.school_id?.school_email }}>View</Link>
                                        <DeleteIcon />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    )
}