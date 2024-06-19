import React, { useEffect, useState } from 'react';
import Nav from './Nav'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import _fetch from '../../src/config/api';
import { api_url } from '../../src/config/config';
import toasted from '../config/toast';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import Bookpreloader from './Bookpreloader';

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
            setLoading(false);
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
        <div className='px-3'>
            <Nav />
            <Container fluid>
                <div className="table-responsive table-container">
                    <div className='table-head fixed-header-one '>
                        <h3 className='table-heading '>All Teachers</h3>
                        <Link to="/addteacher" className='add-btn'>
                            <AddCircleOutlineSharpIcon />Add New Teacher
                        </Link>
                    </div>

                    <table className="table">

                        <tbody>
                            <tr className='fixed-header' >
                                <th scope="col">#</th>
                                <th scope="col">Teacher Name</th>
                                <th scope="col">School Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Action</th>
                            </tr>
                            {teacherData?.map((item, index) => (
                                <tr>
                                    <th scope="col">{index + 1}</th>
                                    <td scope="col">{item?.first_name} {item?.last_name}</td>
                                    <td scope="col">{item?.school_id?.school_name}</td>
                                    <td scope="col">{item?.gender}</td>
                                    <td scope="col">{item?.contact}</td>
                                    <td className='d-flex gap-3 set-view-btn' scope="col">
                                        <Link to="/aboutteacher" state={{ teacher_email: item?.email, school_email: item?.school_id?.school_email }} className='btn-view'>View</Link>
                                        <DeleteIcon onClick={() => deleteTeacher(item?.email, item?.school_id?.school_email)} />
                                    </td>
                                </tr>
                                
                                
                            ))}
                            
                            <tr>
                                <td>title1</td>
                                <td>title2</td>
                                <td>title3</td>
                                <td>title4</td>
                                <td>title5</td>
                                <td><button>Delte</button></td>
                            </tr>
                            <tr>
                                <td>title1</td>
                                <td>title2</td>
                                <td>title3</td>
                                <td>title4</td>
                                <td>title5</td>
                                <td><button>Delte</button></td>
                            </tr>
                            <tr>
                                <td>title1</td>
                                <td>title2</td>
                                <td>title3</td>
                                <td>title4</td>
                                <td>title5</td>
                                <td><button>Delte</button></td>
                            </tr>
                            <tr>
                                <td>title1</td>
                                <td>title2</td>
                                <td>title3</td>
                                <td>title4</td>
                                <td>title5</td>
                                <td><button>Delte</button></td>
                            </tr>
                            <tr>
                                <td>title1</td>
                                <td>title2</td>
                                <td>title3</td>
                                <td>title4</td>
                                <td>title5</td>
                                <td><button>Delte</button></td>
                            </tr>
                            <tr>
                                <td>title1</td>
                                <td>title2</td>
                                <td>title3</td>
                                <td>title4</td>
                                <td>title5</td>
                                <td><button>Delte</button></td>
                            </tr>
                            <tr>
                                <td>title1</td>
                                <td>title2</td>
                                <td>title3</td>
                                <td>title4</td>
                                <td>title5</td>
                                <td><button>Delte</button></td>
                            </tr>
                            <tr>
                                <td>title1</td>
                                <td>title2</td>
                                <td>title3</td>
                                <td>title4</td>
                                <td>title5</td>
                                <td><button>Delte</button></td>
                            </tr>
                            <tr>
                                <td>title1</td>
                                <td>title2</td>
                                <td>title3</td>
                                <td>title4</td>
                                <td>title5</td>
                                <td><button>Delte</button></td>
                            </tr>
                            <tr>
                                <td>title1</td>
                                <td>title2</td>
                                <td>title3</td>
                                <td>title4</td>
                                <td>title5</td>
                                <td><button>Delte</button></td>
                            </tr>
              

                        </tbody>
                    </table>
                </div>
            </Container>
        </div>


    //     <div className='px-3'>
    //     <Nav />
    //     <Container fluid>
    //         <div className="table-responsive table-container">
    //             <div className='table-head'>
    //                 <h3 className='table-heading'>All Teachers</h3>
    //                 <Link to="/addteacher" className='add-btn'>
    //                     <AddCircleOutlineSharpIcon />Add New Teacher
    //                 </Link>
    //             </div>
    //             <table className="table">
    //                 <thead className="fixed-header">
    //                     <tr>
    //                         <th>#</th>
    //                         <th>Teacher Name</th>
    //                         <th>School Name</th>
    //                         <th>Gender</th>
    //                         <th>Contact</th>
    //                         <th>Action</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {teacherData?.map((item, index) => (
    //                         <tr key={index}>
    //                             <td>{index + 1}</td>
    //                             <td>{item?.first_name} {item?.last_name}</td>
    //                             <td>{item?.school_id?.school_name}</td>
    //                             <td>{item?.gender}</td>
    //                             <td>{item?.contact}</td>
    //                             <td className='d-flex gap-3 set-view-btn'>
    //                                 <Link to="/aboutteacher" state={{ teacher_email: item?.email, school_email: item?.school_id?.school_email }} className='btn-view'>View</Link>
    //                                 <DeleteIcon onClick={() => deleteTeacher(item?.email, item?.school_id?.school_email)} />
    //                             </td>
    //                         </tr>
    //                     ))}
    //                 </tbody>
    //             </table>
    //         </div>
    //         {loading && <Bookpreloader />}
    //     </Container>
    // </div>
    )
}

export default AllTeachers;