import { Padding } from '@mui/icons-material';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function FeeHistory() {
    return (
        <div>
            <Container fluid>
                <div className="table-responsive">
                    <div className='table-head'>
                        <h3 className='table-heading'>Fee History </h3>
                    </div>
                    <table className="table">
                        <tbody>
                            {/* <tr>
                                <th scope="col"> Student Name</th>
                                <th scope="col">Father Name </th>
                                <th scope="col">Total Fee</th>
                                <th scope="col">Pending Fee</th>
                                <th scope="col">Date of Submit </th>
                                <th scope="col">Last Feee Submitted  </th>
                            </tr>
                            <tr>
                                <td> Samrat</td>
                                <td> Dalip Monga </td>
                                <td> 22,000 </td>
                                <td> 8,000</td>
                                <td> 31st March </td>
                                <td> 10,000</td>

                            </tr>
                            <tr>
                                <td> Samrat</td>
                                <td> Dalip Monga </td>
                                <td> 22,000 </td>
                                <td> 8,000</td>
                                <td> 31st March </td>
                                <td> 10,000</td>

                            </tr> */}
                            <tr>
                                <th className='col'> Student Name</th>     
                                <th className='col'></th>                                                
                                <th className='col'> <p className='fee-student'> Samrat</p></th>
                              
                            </tr>

                            <tr>
                                {/* <th className='col'> Student Name</th> */}
                                <td className='col for-hightlight'> Total Feee</td>
                                <td className='col'>  </td>
                                <td className='col  for-hightlight'> 20,0000 </td>
                            </tr>
                            {/* <tr>
                                <th className='col'> Date of Submit</th>
                                <th className='col'>31st March </th>
                            </tr> */}
                            <tr>
                                <td className='col'> Last Fee Submitted</td>
                                <td className='col for-fee fee-date'> 21st May 2024 </td>
                                <td className='col for-fee pending-fee '>  16,000</td>
                            </tr>
                            <tr >
                                <td className='col for-hightlight'> Pending Fee</td>
                                <td className='col'>  </td>
                                <td className='col'><p className='for-highlight'>  <b>4,000</b> </p></td>
                            </tr>



                        </tbody>
                    </table>
                </div>
            </Container>

        </div>
    )
}
