// import React from 'react'
// import Nav from './Nav'
// import studentImg from "../assets/Images/newStudent.jpg";


// export default function AboutStudent({ Toggle }) {

//   return (
//     <>
//       {/* <div className="about-studetns">
//         <Nav Toggle={Toggle} />
//         <div className="each-students">
//           <div className="studentsid">
//             <h3> SVPSAS230001 -   Ayush Saha</h3>
//           </div>
//           <div className="student-img">
//             <img className='std-img' src="/" alt="" />
//           </div>

//         </div>

//         <table>
//           <tr>
//             <th>
//               <h3 className='accdemic-title'> Academic Details</h3>
//             </th>
//           </tr>
//           <tr>
//             <th> <p className='acedmic-detail'> Class</p> </th>
//           </tr>
//           <tr>
//           <th> <p className='accedmic-detail'> Section</p></th>
//           </tr>

//           <th> <p className='accedmic-detail'> Date of Admission </p></th>



//         </table>
//       </div> */}
//       <div>
//         <Nav Toggle={Toggle} />
//         <div className="each-student">
//           <div className="student-name">
//           <h2>SVPSAS230001 - Ayush Saha</h2>
//           </div>
//           <div className="student-img">
//             <img src={studentImg}  >

//             </img>

//           </div>


//         </div>

//         <table className="details-table">
//           <thead>
//             <tr>
//               <th colSpan="2">Academic Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Class</td>
//               <td>5</td>
//             </tr>
//             <tr>
//               <td>Section</td>
//               <td>A</td>
//             </tr>
//             <tr>
//               <td>Date of admission</td>
//               <td>2023-01-22</td>
//             </tr>
//             <tr>
//               <th colSpan="2">Individual Details</th>
//             </tr>
//             <tr>
//               <td>First name</td>
//               <td>Ayush</td>
//             </tr>
//             <tr>
//               <td>Middle and Last name</td>
//               <td>Saha</td>
//             </tr>
//             <tr>
//               <td>Date of birth</td>
//               <td>2001-10-05</td>
//             </tr>
//             <tr>
//               <td>Religion</td>
//               <td>Hinduism</td>
//             </tr>
//             <tr>
//               <td>Caste</td>
//               <td>General</td>
//             </tr>
//             <tr>
//               <td>Blood group</td>
//               <td>B+</td>
//             </tr>
//             <tr>
//               <td>Student's email</td>
//               <td>ayushsaha45@duck.com</td>
//             </tr>
//             <tr>
//               <th colSpan="2">Father's Details</th>
//             </tr>
//             <tr>
//               <td>Father's full name</td>
//               <td>Deepak Kumar Saha</td>
//             </tr>
//             <tr>
//               <th colSpan="2">Mother's Details</th>
//             </tr>
//             <tr>
//               <td>Mother's full name</td>
//               <td>Meghalika Saha</td>
//             </tr>
//             <tr>
//               <th colSpan="2">Address Details</th>
//             </tr>
//             <tr>
//               <td>Street address</td>
//               <td>P.O. UTTAR ANDARAN FULBARI P.S. TUFANGANJ DIST. COOCHBEHAR</td>
//             </tr>
//             <tr>
//               <td>City</td>
//               <td>Tufanganj</td>
//             </tr>
//             <tr>
//               <td>State / Province</td>
//               <td>West Bengal</td>
//             </tr>
//             <tr>
//               <td>Zip code</td>
//               <td>736160</td>
//             </tr>
//             <tr>
//               <th colSpan="2">Guardian Details</th>
//             </tr>
//             <tr>
//               <td>Full name</td>
//               <td>Deepak Kumar Saha</td>
//             </tr>
//             <tr>
//               <td>Email</td>
//               <td>kumar.deepak868@gmail.com</td>
//             </tr>
//             <tr>
//               <td>Phone</td>
//               <td>6296268026</td>
//             </tr>
//             <tr>
//               <td>WhatsApp</td>
//               <td>6296268026</td>
//             </tr>
//             <tr>
//               <th colSpan="2">Previous School Details</th>
//             </tr>
//             <tr>
//               <td>School name</td>
//               <td>Creative Model Academy</td>
//             </tr>
//             <tr>
//               <td>Address</td>
//               <td>Near Binapani Club, Tufanganj 736160</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//     </>
//   )
// }


import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import Form from 'react-bootstrap/Form';
import 'react-datepicker/dist/react-datepicker.css';
export default function AboutStudent() {
  const [dateOfBirth, setDateOfBirth] = useState(null);
  return (
    <div>
      <div className="about-student ">
        <div className="student-image">
          <img src="" alt="" />
        </div>
        <form action="" className='gx-5'>
          <Row className=''>

            <Col lg={6}>
              <label type="Name" className='labal-title'> Student Name </label>
              <input type="text" className='form-control' />
            </Col>
            <Col lg={6}>
              {/* <label type="Name" className='labal-title'> Contact No  </label>
              <input type="text" className='form-control' /> */}
              <label type="Name" className='labal-title'> Gender </label>
              <Form.Select aria-label="Default select example" className='form-control'>
                <option>Select Gender </option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other </option>
              </Form.Select>
            </Col>
            {/* <Col lg={6}>
              <Form.Group as={Col} md="4" controlId="dob" >
                <Form.Label>Date of Birth</Form.Label>
                <DatePicker
                  selected={dateOfBirth}
                  onChange={(date) => setDateOfBirth(date)}
                  dateFormat="yyyy/MM/dd"
                  maxDate={new Date()}
                  showYearDropdown
                  scrollableYearDropdown
                  placeholderText="Select your date of birth"
                  className="form-control"
                />
              </Form.Group>
            </Col> */}
            <Col lg={6}>
              {/* <label type="Name" className='labal-title'> Contact No  </label>
              <input type="text" className='form-control' /> */}
              <label type="Class" className='labal-title'> Classs </label>
              <Form.Select aria-label="Default select example" className='form-control'>
                <option> Select Class </option>
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
            <Col lg={6} >
              <label type="Name" className='labal-title'> DOB  </label>
              <input type="text" className="form-control" />
            </Col>
            <Col lg={6}>
              <label type="BloodGroup" className='labal-title'> Blood Group </label>
              <Form.Select aria-label="Default select example" className='form-control'>
                <option> Select Blood Group </option>
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
              <label type="Name" className='labal-title'> Date of Admission </label>
              <input type="text" className='form-control' />
            </Col>
            <Col lg={6}>
              <label type="Name" className='labal-title'> Contact No  </label>
              <input type="text" className='form-control' />
            </Col>
            <Col lg={6}>
              <label type="Name" className='labal-title'> Email </label>
              <input type="text" className='form-control' />
            </Col>
            <Col lg={6}>
              <label type="Name" className='labal-title'> WhatsApp no  </label>
              <input type="text" className='form-control' />
            </Col>
            <Col lg={6}>
              <label type="Name" className='labal-title'> Address </label>
              <input type="text" className='form-control' />
            </Col>
            <Col lg={6}>
              <label type="Name" className='labal-title'> Religion  </label>
              <input type="text" className='form-control' />
            </Col>
            <Col lg={6}>
              <label type="Name" className='labal-title'> Caste </label>
              <input type="text" className='form-control' />
            </Col>

          </Row>
          <br />
          <Row>
            <Col lg={6}>
              <label type="Name" className='labal-title'> Father's  Name  </label>
              <input type="text" className='form-control' />
            </Col>
            <Col lg={6}>
              <label type="Name" className='labal-title'> Mother's  Name  </label>
              <input type="text" className='form-control' />
            </Col>
            <Col lg={6}>
              <label type="Name" className='labal-title'> Father's Mobile no </label>
              <input type="text" className='form-control' />
            </Col>
            <Col lg={6}>
              <label type="Name" className='labal-title'> Mother's mobile no  </label>
              <input type="text" className='form-control' />
            </Col>
          </Row>
        </form>
      </div>
    </div>
  )
}
