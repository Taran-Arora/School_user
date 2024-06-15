import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import 'react-datepicker/dist/react-datepicker.css';
import studentImg from "../assets/Images/newStudent.jpg";
import Nav from './Nav';
import schoolLogo from "../assets/Images/school-logo.png";
import RecyclingIcon from '@mui/icons-material/Recycling';
import { useLocation, useNavigate } from 'react-router-dom';
import _fetch from '../config/api';
import { api_url } from '../config/config';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HistoryIcon from '@mui/icons-material/History';



export default function AboutStudent() {

  const location = useLocation();
  const navigate = useNavigate();

  const class_id = location.state?.class_id;
  const school_email = location.state?.school_email;
  const email = location.state?.email;
  const [alldata, setalldata] = useState([])
  const [imagedata, setimagedata] = useState([])

  const [dateOfBirth, setDateOfBirth] = useState(null);

  useEffect(() => {
    aboutStudentData();
  }, []);

  const aboutStudentData = async () => {
    const data = await _fetch(`${api_url}studentdetail/?class_id=${class_id}&school_email=${school_email}&email=${email}`, "GET", {}, {});
    if (data?.status === 200) {
      setalldata(data?.data[0]?.student);
      setimagedata(data?.data[0]);
    }
  }

  const imageSrc = `data:image/jpeg;base64,${imagedata?.image}`;

  return (
    <div>
      <Nav />
      <div className="about-student ">
        <div className="for-image-section">
          <div className="studemt-school-image">
            <img src={schoolLogo} alt="" />
            <div className="student-school">
              <div className="school-about">
                <h2 className='school-name' >Dayanand Anglo Vedic (DAV) School </h2>
                {/* <h2 > DAV (Dayanand Anglo Vedic) School </h2> */}
                <h4 className='school-address'> Hanumangarh Rd, South Evenue, <br />
                  Abohar , Punjab 152116
                </h4>
              </div>
            </div>
          </div>
          <div className="school-logo">
            <img src={imageSrc} alt="" />
          </div>
        </div>
        <form action="" className='gx-5 student-admin-form'>
          <div class="form-head mb-3">
            <h4 class="form-heading">Student Details</h4>
          </div>
          <Row className=''>
            <Col lg={6} className="for-student-input"  >
              <label type="Name" className='labal-title'> Student Name </label>
              <input type="text" className='form-control' value={alldata?.name} />
            </Col>
            <Col lg={6} className="for-student-input"  >
              <label type="roll-number" className='labal-title'> Students Roll No  </label>
              <input type="number" value={alldata?.roll_no} className='form-control' />
            </Col>
            <Col lg={6} className="for-student-input">
              <label type="Class" className='labal-title'> Classs </label>
              <Form.Select aria-label="Default select example" className='form-control'>
                <option> {alldata.student_class} </option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </Form.Select>
            </Col>
            <Col lg={6} className="for-student-input" >
              <label className='labal-title'>DOB</label>
              <input type="date" value={alldata.dob} className='form-control' />
            </Col>
            <Col lg={6} className="for-student-input">
              <label type="BloodGroup" className='labal-title'> Blood Group </label>
              <Form.Select aria-label="Default select example" className='form-control'>
                <option> {alldata.blood_group} </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </Form.Select>
            </Col>
            <Col lg={6}>
              <label type="Name" className='labal-title'> Gender </label>
              <Form.Select aria-label="Default select example" className='form-control'>
                <option> {alldata.gender} </option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other </option>
              </Form.Select>
            </Col>
            <Col lg={6} className="for-student-input">
              <label className='labal-title'>Date of Admission</label>
              <input type="date" value={alldata.date_of_admission} className='form-control' />
            </Col>
            <Col lg={6} className="for-student-input">
              <label className='labal-title'> Contact No  </label>
              <input type="number" value={alldata.contact_No} className='form-control' />
            </Col>
            <Col lg={6} className="for-student-input">
              <label type="Email" className='labal-title'> Email </label>
              <input type="Email" value={alldata.email} className='form-control' />
            </Col>
            <Col lg={6} className="for-student-input">
              <label className='labal-title'> WhatsApp no  </label>
              <input type="number" value={alldata.contact_No} className='form-control' />
            </Col>
            <Col lg={6} className="for-student-input">
              <label type="Religion" className='labal-title'> Religion </label>
              <Form.Select aria-label="Default select example" className='form-control'>
                <option> {alldata.religion} </option>
                <option value="Hindu">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="Christian">Christian</option>
                <option value="Sikh">Sikh</option>
                <option value="Buddhist">Buddhist</option>
                <option value="Jain">Jain</option>
                <option value="Parsi">Parsi</option>
                <option value="Jewish">Jewish</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Col>

            <Col lg={6} className="for-student-input">
              <label type="Caste" className='labal-title'> Caste </label>
              <Form.Select aria-label="Default select example" className='form-control'>
                <option> {alldata.caste} </option>
                <option value="SC">SC</option>
                <option value="BC">BC</option>
                <option value="General">General</option>
                <option value="Ews">EWS</option>
                <option value="OBC">OBC</option>
                <option value="ST">ST</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="for-student-input">
              <label type="Name" className='labal-title'> Father's  Name  </label>
              <input type="text" value={alldata.father_name} className='form-control' />
            </Col>
            <Col lg={6} className="for-student-input">
              <label type="Name" className='labal-title'> Mother's  Name  </label>
              <input type="text" value={alldata.mother_name} className='form-control' />
            </Col>
            <Col lg={6} className="for-student-input">
              <label type="Name" className='labal-title'> Father's Mobile no </label>
              <input type="number" value={alldata.father_no} className='form-control' />
            </Col>
            <Col lg={6} className="for-student-input">
              <label type="Name" className='labal-title'> Mother's mobile no  </label>
              <input type="number" value={alldata.mother_no} className='form-control' />
            </Col>
            <Col lg={12} className="for-student-input">
              <label type="Name" className='labal-title'> Address </label>
              <textarea type="text-area" value={alldata.address} className='form-control' />
            </Col>
          </Row>
        </form>
        {/* <div className="student-edit-btn">
          <button className='student-edit'>   <RecyclingIcon />Update Details </button>
        </div> */}
        <div className="for-edit-btn">
          <div className="student-edit-btn">
            <button className='student-edit bg-sucess'>   <AccountBalanceWalletIcon /> Fee Counter </button>
          </div>
          <div className="fee-edit-btn2">
            <div className="student-edit-btn">
              <button className='student-edit'> <HistoryIcon />  Fee History </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}