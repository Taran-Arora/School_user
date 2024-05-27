import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import _fetch from '../config/api';
import { api_url } from '../config/config';

export default function ClassDetails() {

    const [token, setToken] = useState(null);
    const [allData, setAllData] = useState([]);

    const location = useLocation();
    const class_name = location.state?.class_name;
    const school_email = location.state?.school_email;

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            viewClassRecord();
        }
    }, [token]);

    const viewClassRecord = async () => {

        const res = await _fetch(`${api_url}students/?school_email=${school_email}&class_name=${class_name}`, 'GET', {}, {});
        if (res?.status === 200) {
            setAllData(res?.data);
        }
    };

    return (
        <div className='px-3'>
            <Nav />
            <Container fluid>
                <div className="table-responsive">
                    <div className='table-head'>
                        <h3 className='table-heading'>Class Students</h3>
                        <Link to="/addstudent" className='add-btn'>
                            <AddCircleOutlineSharpIcon />Add New Student
                        </Link>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Student ID</th>
                                <th scope="col">Student Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allData?.map((item, index) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="col">{index + 1}</th>
                                            <td scope="col">{item?.name}</td>
                                            <td scope="col">{item?.email}</td>
                                            <td scope="col">{item?.gender}</td>
                                            <td scope="col">{item?.contact_No}</td>
                                            <td className='d-flex gap-3' scope="col">
                                                <Link to="/aboutstudent" state={{class_id: item?.class_id?.class_name, school_email: item?.school_id?.username, email: item?.email }} className='btn-view'>View</Link>
                                                <Link to="" className='btn-block'>Block</Link>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    )
}
