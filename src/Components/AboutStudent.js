import React from 'react'
import Nav from './Nav'
import studentImg from "../assets/Images/newStudent.jpg";


export default function AboutStudent({ Toggle }) {
  
  return (
    <>
      {/* <div className="about-studetns">
        <Nav Toggle={Toggle} />
        <div className="each-students">
          <div className="studentsid">
            <h3> SVPSAS230001 -   Ayush Saha</h3>
          </div>
          <div className="student-img">
            <img className='std-img' src="/" alt="" />
          </div>

        </div>

        <table>
          <tr>
            <th>
              <h3 className='accdemic-title'> Academic Details</h3>
            </th>
          </tr>
          <tr>
            <th> <p className='acedmic-detail'> Class</p> </th>
          </tr>
          <tr>
          <th> <p className='accedmic-detail'> Section</p></th>
          </tr>
        
          <th> <p className='accedmic-detail'> Date of Admission </p></th>



        </table>
      </div> */}
      <div>
        <Nav Toggle={Toggle} />
        <div className="each-student">
          <div className="student-name">
          <h2>SVPSAS230001 - Ayush Saha</h2>
          </div>
          <div className="student-img">
            <img src={studentImg}  >

            </img>

          </div>


        </div>

        <table className="details-table">
          <thead>
            <tr>
              <th colSpan="2">Academic Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Class</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Section</td>
              <td>A</td>
            </tr>
            <tr>
              <td>Date of admission</td>
              <td>2023-01-22</td>
            </tr>
            <tr>
              <th colSpan="2">Individual Details</th>
            </tr>
            <tr>
              <td>First name</td>
              <td>Ayush</td>
            </tr>
            <tr>
              <td>Middle and Last name</td>
              <td>Saha</td>
            </tr>
            <tr>
              <td>Date of birth</td>
              <td>2001-10-05</td>
            </tr>
            <tr>
              <td>Religion</td>
              <td>Hinduism</td>
            </tr>
            <tr>
              <td>Caste</td>
              <td>General</td>
            </tr>
            <tr>
              <td>Blood group</td>
              <td>B+</td>
            </tr>
            <tr>
              <td>Student's email</td>
              <td>ayushsaha45@duck.com</td>
            </tr>
            <tr>
              <th colSpan="2">Father's Details</th>
            </tr>
            <tr>
              <td>Father's full name</td>
              <td>Deepak Kumar Saha</td>
            </tr>
            <tr>
              <th colSpan="2">Mother's Details</th>
            </tr>
            <tr>
              <td>Mother's full name</td>
              <td>Meghalika Saha</td>
            </tr>
            <tr>
              <th colSpan="2">Address Details</th>
            </tr>
            <tr>
              <td>Street address</td>
              <td>P.O. UTTAR ANDARAN FULBARI P.S. TUFANGANJ DIST. COOCHBEHAR</td>
            </tr>
            <tr>
              <td>City</td>
              <td>Tufanganj</td>
            </tr>
            <tr>
              <td>State / Province</td>
              <td>West Bengal</td>
            </tr>
            <tr>
              <td>Zip code</td>
              <td>736160</td>
            </tr>
            <tr>
              <th colSpan="2">Guardian Details</th>
            </tr>
            <tr>
              <td>Full name</td>
              <td>Deepak Kumar Saha</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>kumar.deepak868@gmail.com</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>6296268026</td>
            </tr>
            <tr>
              <td>WhatsApp</td>
              <td>6296268026</td>
            </tr>
            <tr>
              <th colSpan="2">Previous School Details</th>
            </tr>
            <tr>
              <td>School name</td>
              <td>Creative Model Academy</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>Near Binapani Club, Tufanganj 736160</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}
