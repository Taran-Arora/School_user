import React, { useState } from 'react'
import Nav from './Nav'
import { Col, Container, Row } from 'react-bootstrap'
import AddImg from './AddImg';
import { Link } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css';

const AddStudent = () => {

    const [dateOfBirth, setDateOfBirth] = useState(null);

    const [isImageUploaded, setIsImageUploaded] = useState(false);

    const handleImageChange = (uploaded) => {
        setIsImageUploaded(uploaded);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isImageUploaded) {
            alert('Please upload a profile image.');
            return;
        }
        // Handle form submission logic here
        console.log('Form submitted');
    };


    return (
        <div className='px-3'>
            <Nav />
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className='top-head d-flex'>
                            <h3 className='top-heading'>Add a New Student</h3>
                            <AddImg onImageChange={handleImageChange}/>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <form action="" className='teacher-from' onSubmit={handleSubmit}>
                            <div className='form-head mb-5'>
                                <h5 className='form-heading'>Individual Details</h5>
                            </div>
                            <Row>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>First Full Name *</label>
                                    <input type="text" placeholder="Enter Full Name" className="form-control" />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Gender *</label>
                                    <select className='form-control'>
                                        <option value>Please Select Gender *</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Contact *</label>
                                    <input type="number" className="form-control" placeholder='Enter Contact Number' />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Whatapp Number</label>
                                    <input type="number" className="form-control" placeholder='Enter Whatsapp Number' />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Email *</label>
                                    <input type="mail" className="form-control" placeholder='Enter Email Address' />
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label type="BloodGroup"> Blood Group *</label>
                                    <select aria-label="Default select example" className='form-control'>
                                        <option> Select Blood Group </option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </Col>
                                <Col lg={6} xl={4} className="form-group" >
                                    <label>DOB *</label>
                                    <input type="date" className='form-control' />
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label>Date of Admission *</label>
                                    <input type="date" className='form-control' />
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label> Address *</label>
                                    <input type="text" className='form-control' />
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label type="Religion"> Religion *</label>
                                    <select aria-label="Default select example" className='form-control'>
                                        <option> Select Religion </option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Muslim">Muslim</option>
                                        <option value="Christian">Christian</option>
                                        <option value="Sikh">Sikh</option>
                                        <option value="Buddhist">Buddhist</option>
                                        <option value="Jain">Jain</option>
                                        <option value="Parsi">Parsi</option>
                                        <option value="Jewish">Jewish</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label type="Caste"> Caste *</label>
                                    <select aria-label="Default select example" className='form-control'>
                                        <option> Select Caste </option>
                                        <option value="SC">SC</option>
                                        <option value="BC">BC</option>
                                        <option value="General">General</option>
                                        <option value="Ews">EWS</option>
                                        <option value="OBC">OBC</option>
                                        <option value="ST">ST</option>
                                    </select>
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label type="Name"> Father's  Name  </label>
                                    <input type="text" className='form-control' />
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label type="Name"> Mother's  Name  </label>
                                    <input type="text" className='form-control' />
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label type="Name"> Father's Mobile no </label>
                                    <input type="number" className='form-control' />
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label type="Name"> Mother's mobile no  </label>
                                    <input type="number" className='form-control' />
                                </Col>
                                <Col lg={12} className='form-group'>
                                    <button type='submit' className='btn-submit'>Submit</button>
                                </Col>

                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddStudent
