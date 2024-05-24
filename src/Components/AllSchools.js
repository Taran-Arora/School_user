import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { Link, useNavigate } from 'react-router-dom';
import Students from '../assets/Images/graduation.png';
import Parents from '../assets/Images/parents.png';
import Teacher from '../assets/Images/teacher.png';
import Earning from '../assets/Images/salary.png';
import { Col, Container, Row, Button } from 'react-bootstrap';
import _fetch from '../../src/config/api';
import { api_url } from '../../src/config/config';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';

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
            navigate('/');
        }
    };
    const ViewData = (username) => {
        navigate('/schooldata', { state: { username } });
    }


    return (
        <div className='px-3'>
            <Nav Toggle={Toggle} />
            <Container fluid>
                <div className="table-responsive">
                <div className='table-head'>
                                <h3 className='table-heading'>All Schools</h3>
                                <Link to="/addschool" className='add-btn'>
                                    <AddCircleOutlineSharpIcon />Add New School
                                </Link>
                            </div>
                    <table className="table">
                        <thead>
                         

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
                                        <Button className='btn-view'onClick={() => ViewData(item?.username)} >View</Button>
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
