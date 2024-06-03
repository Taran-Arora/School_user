import React, { useEffect, useState } from 'react';
import Nav from './Nav'
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import _fetch from '../../src/config/api';
import { api_url } from '../../src/config/config';

const AllTeachers = () => {
    const navigate = useNavigate();
    const [allData, setAllData] = useState([]);
    const [allschoolData, setschoolData] = useState([]);

    const schoolData = async () => {
        try {
            const res = await _fetch(`${api_url}allteachers/`, 'GET', {}, {});
            if (res.status === 200) {
                setAllData(res?.data);
                setschoolData(res?.data[0]?.school_id)
                console.log(res?.data[0]?.school_id);

            } else {
                console.log('Error fetching data:', res.status);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        schoolData();
    }, []);


    return (
        <div className='px-3'>
            <Nav />
            <Container fluid>
                <div className="table-responsive">
                    <div className='table-head'>
                        <h3 className='table-heading'>All Teachers</h3>
                        {/* <Link to="/addteacher" className='add-btn'>
                            <AddCircleOutlineSharpIcon />Add New Teacher
                        </Link> */}
                    </div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="col">Teacher ID</th>
                                <th scope="col">Teacher Name</th>
                                <th scope="col">School Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Action</th>
                            </tr>
                            {allData?.map((item, index) => (
                            <tr>
                                <th scope="col">{index + 1}</th>
                                <td scope="col">{item?.first_name} {item?.last_name}</td>
                                <td scope="col">{item?.school_id?.first_name}</td>
                                <td scope="col">{item?.gender}</td>
                                <td scope="col">{item?.contact}</td>
                                <td className='d-flex gap-3' scope="col">
                                    <Link to="" className='btn-login'>Login</Link>
                                    <Link to="/aboutteacher" className='btn-view'>View</Link>
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

export default AllTeachers
