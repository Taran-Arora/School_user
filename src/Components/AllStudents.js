import React from 'react'
import Form from 'react-bootstrap/Form';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
export default function AllStudents() {
    return (
        <div>
            <div className="table-responsive">
                <table className="table">
                    <thead><h3 className='table-heading'>All Students  </h3></thead>
                    <Form.Control type="text" placeholder="Enter here to text " className='custom-search-bar' />
                    <SearchOutlinedIcon className='students-search'/>
                    <tbody>
                        <tr>
                            <th scope="col">Students Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">	Class / Section</th>
                            {/* <th scope="col"></th> */}
                            <th>Date of Admission </th>
                            <th>Guardian's Name </th>
                            <th>Guardian's Phone </th>
                            <th></th>
                        </tr>
                        <tr>
                            <th scope="row">SVPSAS230001</th>
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
                            <th scope="row">SVPSAS230001</th>
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
                            <th scope="row">SVPSAS230001</th>
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
                            <th scope="row">SVPSAS230001</th>
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
                            <th scope="row">SVPSAS230001</th>
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
                            <th scope="row">SVPSAS230001</th>
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
                            <th scope="row">SVPSAS230001</th>
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
                            <th scope="row">SVPSAS230001</th>
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
                            <th scope="row">SVPSAS230001</th>
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
                            <th scope="row">SVPSAS230001</th>
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
