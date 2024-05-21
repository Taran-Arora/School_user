import React from 'react'
import Form from 'react-bootstrap/Form';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Nav from './Nav'
import { Link } from "react-router-dom";
export default function AllStudents() {
    return (
        <div className='px-3'>
            <Nav />
            <div className="table-responsive">
                <table className="table">
                    <thead><h3 className='table-heading'>All Students  </h3></thead>
                    <Form.Control type="text" placeholder="Enter here to text " className='custom-search-bar' />
                    <SearchOutlinedIcon className='students-search' />
                    <tbody>
                        <tr>
                            <th scope="col">Sr No </th>
                            <th scope="col">Name</th>
                            <th scope="col">	Class / Section</th>
                            {/* <th scope="col"></th> */}
                            <th>Date of Admission </th>
                            <th>Guardian's Name </th>
                            <th>Guardian's Phone </th>
                            <th></th>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ayush Saha</td>
                            <td>	5 / A</td>
                            <td> 	2023-01-22</td>
                            <td>Deepak Kumar Saha</td>
                            <td>	6296268026</td>
                            <td className='d-flex justify-content-evenly'>
                                {/* <a href="" className='btn btn-login'>Login</a> */}
                                <Link className='btn btn-view' to="/aboutStudent"> view</Link>
                                <a href="" className='btn btn-block'>edit</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Ayush Saha</td>
                            <td>	5 / A</td>
                            <td> 	2023-01-22</td>
                            <td>Deepak Kumar Saha</td>
                            <td>	6296268026</td>
                            <td className='d-flex justify-content-evenly'>
                                {/* <a href="" className='btn btn-login'>Login</a> */}
                                {/* <Link to="./aboutStudents"> View</Link> */}

                                <a href="" className='btn btn-view'>View</a>
                                <a href="" className='btn btn-block'>edit</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ayush Saha</td>
                            <td>	5 / A</td>
                            <td> 	2023-01-22</td>
                            <td>Deepak Kumar Saha</td>
                            <td>	6296268026</td>
                            <td className='d-flex justify-content-evenly'>
                                {/* <a href="" className='btn btn-login'>Login</a> */}
                                <a href="" className='btn btn-view'>View</a>
                                <a href="" className='btn btn-block'>edit</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Ayush Saha</td>
                            <td>	5 / A</td>
                            <td> 	2023-01-22</td>
                            <td>Deepak Kumar Saha</td>
                            <td>	6296268026</td>
                            <td className='d-flex justify-content-evenly'>
                                {/* <a href="" className='btn btn-login'>Login</a> */}
                                <a href="" className='btn btn-view'>View</a>
                                <a href="" className='btn btn-block'>edit</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Ayush Saha</td>
                            <td>	5 / A</td>
                            <td> 	2023-01-22</td>
                            <td>Deepak Kumar Saha</td>
                            <td>	6296268026</td>
                            <td className='d-flex justify-content-evenly'>
                                {/* <a href="" className='btn btn-login'>Login</a> */}
                                <a href="" className='btn btn-view'>View</a>
                                <a href="" className='btn btn-block'>edit</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Ayush Saha</td>
                            <td>	5 / A</td>
                            <td> 	2023-01-22</td>
                            <td>Deepak Kumar Saha</td>
                            <td>	6296268026</td>
                            <td className='d-flex justify-content-evenly'>
                                {/* <a href="" className='btn btn-login'>Login</a> */}
                                <a href="" className='btn btn-view'>View</a>
                                <a href="" className='btn btn-block'>edit</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Ayush Saha</td>
                            <td>	5 / A</td>
                            <td> 	2023-01-22</td>
                            <td>Deepak Kumar Saha</td>
                            <td>	6296268026</td>
                            <td className='d-flex justify-content-evenly'>
                                {/* <a href="" className='btn btn-login'>Login</a> */}
                                <a href="" className='btn btn-view'>View</a>
                                <a href="" className='btn btn-block'>edit</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>Ayush Saha</td>
                            <td>	5 / A</td>
                            <td> 	2023-01-22</td>
                            <td>Deepak Kumar Saha</td>
                            <td>	6296268026</td>
                            <td className='d-flex justify-content-evenly'>
                                {/* <a href="" className='btn btn-login'>Login</a> */}
                                <a href="" className='btn btn-view'>View</a>
                                <a href="" className='btn btn-block'>edit</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>Ayush Saha</td>
                            <td>	5 / A</td>
                            <td> 	2023-01-22</td>
                            <td>Deepak Kumar Saha</td>
                            <td>	6296268026</td>
                            <td className='d-flex justify-content-evenly'>
                                {/* <a href="" className='btn btn-login'>Login</a> */}
                                <a href="" className='btn btn-view'>View</a>
                                <a href="" className='btn btn-block'>edit</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>Ayush Saha</td>
                            <td>	5 / A</td>
                            <td> 	2023-01-22</td>
                            <td>Deepak Kumar Saha</td>
                            <td>	6296268026</td>
                            <td className='d-flex justify-content-evenly'>
                                {/* <a href="" className='btn btn-login'>Login</a> */}
                                <a href="" className='btn btn-view'>View</a>
                                <a href="" className='btn btn-block'>edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
