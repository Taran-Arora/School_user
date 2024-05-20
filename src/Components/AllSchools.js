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

const AllSchools = ({Toggle}) => {

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
            <Nav Toggle={Toggle} />
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
                                        <Link to="" className='btn-view'>View</Link>
                                        <Link to="" className='btn-block'>Block</Link>
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

export default AllSchools
