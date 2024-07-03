import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import RecyclingIcon from '@mui/icons-material/Recycling';
import Nav from './Nav';
import studentImg from '../assets/Images/student.jpg';
import HistoryIcon from '@mui/icons-material/History';
import { useLocation, useNavigate } from 'react-router-dom';
import _fetch from '../config/api';
import { api_url } from '../config/config';
import toasted from '../config/toast';

export default function FeeCounter() {

    const location = useLocation();
    const Navigate = useNavigate();

    const email = location?.state?.email;

    const [allData, setAllData] = useState({ name: '', student_class: '', roll_no: '', email: '', });
    const [feeData, setFeeData] = useState({ total_fee: '', pending_fee: '' });
    const [updatedDate, setUpdatedDate] = useState('');
    const [newFee, setNewFee] = useState('');

    useEffect(() => {
        geFeeData();
    }, []);

    const geFeeData = async () => {
        let data = await _fetch(`${api_url}studentdata/?email=${email}`, "GET", {}, {});
        if (data?.status === 200 && data?.data?.length > 0) {
            const latestData = data?.data?.length > 1 ? data?.data[data?.data?.length - 1] : data?.data[0];
            setAllData(latestData.student);
            setFeeData(latestData);
        }
    }

    const updateStudentFee = async () => {

        let data = {
            'email': allData?.email,
            'total_fee': feeData?.total_fee,
            'pending_fee': feeData?.pending_fee,
            'date': updatedDate,
            'new_submit': newFee,
        }
        let res = await _fetch(`${api_url}studentfee/`, "POST", data, {});
        if (res?.status === 200) {
            toasted.success(res?.message);
            Navigate('/allstudents');
        }
        else if (res?.status === 400) {
            toasted.error(res?.message);
        }
    }
    return (

        <div className='px-md-3'>
            <Nav />
            <div className='fee-counter-main'>

                <form action="" className='gx-5 student-admin-form'>
                    <div class="form-head mb-3">
                        <h4 class="form-heading">Student Details</h4>
                    </div>
                    <Row className=''>
                        <Col lg={6} className="for-student-input"  >
                            <label type="Name" className='labal-title' > Student Name </label>
                            <input type="text" className='form-control' readOnly value={allData?.name} />
                        </Col>
                        <Col lg={6} className='form-group'>
                            <label> Class </label>
                            <input type="text" className='form-control' readOnly value={allData?.student_class} />
                        </Col>
                        <Col lg={6} className="for-student-input"  >
                            <label type="Name" className='labal-title'> Student's Roll no  </label>
                            <input type="text" className='form-control' readOnly value={allData?.roll_no} />
                        </Col>
                        <Col lg={6} className="for-student-input"  >
                            <label type="roll-number" className='labal-title'> Students's Email  </label>
                            <input type="email" className='form-control' name='email' readOnly value={allData?.email} />
                        </Col>
                        <Col lg={6} className="for-student-input"  >
                            <label className='labal-title'> Total Fee  </label>
                            <input type="number" className='form-control' name='total_fee' value={feeData?.total_fee} />
                        </Col>
                        <Col lg={6} className="for-student-input"  >
                            <label className='labal-title'> Pending Feee  </label>
                            <input type="number" className='form-control' name='pending_fee' value={feeData?.pending_fee} />
                        </Col>
                        <Col lg={6} className="for-student-input"  >
                            <label className='labal-title'> Date </label>
                            <input type="date" className='form-control' name='date' onChange={(e) => setUpdatedDate(e.target.value)} />
                        </Col>
                        <Col lg={6} className="for-student-input"  >
                            <label className='labal-title'> New Fee Submit </label>
                            <input type="number" className='form-control' name='new_submit' onChange={(e) => setNewFee(e.target.value)} />
                        </Col>
                    </Row>

                </form>
                <div className="for-edit-btn">
                    <div className="fee-edit-btn">
                        <div className="student-edit-btn">
                            <button className='student-edit' onClick={updateStudentFee} > <RecyclingIcon />Update Details </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
