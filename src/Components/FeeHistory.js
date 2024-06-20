import { Padding } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { api_url } from '../config/config';
import _fetch from '../config/api';
import { useLocation } from 'react-router-dom';

export default function FeeHistory() {

    const location = useLocation();

    const email = location?.state?.email;

    const [data, setData] = useState({ total_fee: '' });
    const [allData, setAllData] = useState([]);
    const [pendingFee, setPendingFee] = useState();
    
    const loginUser = localStorage.getItem('whologin');
    const userEmail = localStorage.getItem('useremail');

    useEffect(() => {
        geFeeData();
        if (loginUser === 'is_student') {
            getStudentFeeData();
          }
    }, []);

    const geFeeData = async () => {
        let data = await _fetch(`${api_url}studentdata/?email=${email}`, "GET", {}, {});
        if (data?.status === 200) {
           const pendingFee = data?.data[data?.data?.length - 1];
           
            setData(data?.data[0]);
            setAllData(data?.data);
            setPendingFee(pendingFee?.pending_fee);
        }
    }
    const getStudentFeeData = async () => {
        let data = await _fetch(`${api_url}studentfeedata/?student_email=${userEmail}`, "GET", {}, {});
        if (data?.status === 200 && data?.data?.length > 0) {
            
            const pendingFee = data?.data[data?.data?.length - 1];
            setData(data?.data[0]);
            setAllData(data?.data);
            setPendingFee(pendingFee?.pending_fee);
            // setAllData(data?.data);
            // setPendingFee(pendingFee?.pending_fee);
        }
    }

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
                                <th className='col'> <p className='fee-student'> {data?.student?.name}</p></th>

                            </tr>

                            <tr style={{borderBottom:'2px solid #000 '}}>
                                {/* <th className='col'> Student Name</th> */}
                                <td className='col for-hightlight'> Total Feee</td>
                                <td className='col'>  </td>
                                <td className='col  for-hightlight'> {data?.total_fee}</td>
                            </tr>
                            {/* <tr>
                                <th className='col'> Date of Submit</th>
                                <th className='col'>31st March </th>
                            </tr> */}
                            {allData?.map((item, index) => {
                                return(
                                <tr>
                                    <td className='col'> Fee Submitted</td>
                                    <td className='col for-fee fee-date'> {item?.date} </td>
                                    <td className='col for-fee pending-fee '>{item?.Submit} </td>
                                </tr>
                                )}
                            )}
                            <tr style={{borderTop:"2px solid #000 "}}>
                                <td className='col for-hightlight'> Pending Fee</td>
                                <td className='col'>  </td>
                                <td className='col'><p className='for-highlight'>  <b>{pendingFee}</b> </p></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </Container>

        </div>
    )
}
