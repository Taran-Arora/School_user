import React, { useState } from 'react'
import Nav from './Nav'
import { Col, Container, Row } from 'react-bootstrap'
import AddImg from './AddImg';
import { Link } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css';

const AddStudent = () => {

    const [dateOfBirth, setDateOfBirth] = useState(null);

    const [isImageUploaded, setIsImageUploaded] = useState(false);
    const [allFields, setAllFields] = useState({});

    const handleInputFileds = (e) => {
        // const allFields = {
        //     name: document.getElementById('name').value,
        //     gender: document.getElementById('gender').value,
        //     number: document.getElementById('number').value,
        //     whatsapp_number: document.getElementById('whatsapp_number').value,
        //     email: document.getElementById('email').value,
        //     blood_group: document.getElementById('blood_group').value,
        //     dob: document.getElementById('dob').value,
        //     dob_of_addmission: document.getElementById('dob_of_addmission').value,
        //     address: document.getElementById('address').value,
        //     religion: document.getElementById('religion').value,
        //     caste: document.getElementById('caste').value,
        //     father_name: document.getElementById('father_name').value,
        //     mother_name: document.getElementById('mother_name').value,
        //     father_number: document.getElementById('father_number').value,
        //     mother_number: document.getElementById('mother_number').value,

        // }
        const { name, value } = e.target;
        setAllFields(prevState => ({
            ...prevState,
            [name]: value
        }));
        // console.log('allFields', allFields);

    }

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
                            <AddImg onImageChange={handleImageChange} />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <form action="" className='teacher-from' onSubmit={handleSubmit}>
                            <div className='form-head mb-5'>
                                <h5 className='form-heading'>Individual Details</h5>
                            </div>
                            <Row>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label> Name </label>
                                    <input type="text" placeholder="Enter Name" className="form-control" name='name' onChange={handleInputFileds} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Gender </label>
                                    <select className='form-control' name='gender' onChange={handleInputFileds} >
                                        <option value>Please Select Gender </option>
                                        {['male', 'female'].map((gender, index) => (
                                            <option key={index} value={gender}>{gender}</option>
                                        ))}
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Contact </label>
                                    <input type="number" className="form-control" placeholder='Enter Contact Number' name='number' onChange={handleInputFileds} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Whatapp Number</label>
                                    <input type="number" className="form-control" placeholder='Enter Whatsapp Number' name='whatsapp_number' onChange={handleInputFileds} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Email </label>
                                    <input type="mail" className="form-control" placeholder='Enter Email Address' name='email' onChange={handleInputFileds} />
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label type="BloodGroup"> Blood Group </label>
                                    <select aria-label="Default select example" className='form-control' name='blood_group' onChange={handleInputFileds} >
                                        <option> Select Blood Group </option>
                                        {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((group, index) => (
                                            <option key={index} value={group}>{group}</option>
                                        ))}
                                    </select>
                                </Col>
                                <Col lg={6} xl={4} className="form-group" >
                                    <label>DOB </label>
                                    <input type="date" className='form-control' name='dob' onChange={handleInputFileds} />
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label>Date of Admission </label>
                                    <input type="date" className='form-control' name='dob_of_addmission' onChange={handleInputFileds} />
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label> Address</label>
                                    <input type="text" className='form-control' name='address' onChange={handleInputFileds} />
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label type="Religion"> Religion </label>
                                    <select aria-label="Default select example" className='form-control' name='religion' onChange={handleInputFileds} >
                                        <option> Select Religion </option>
                                        {['Hindu', 'Muslim', 'Christian', 'Sikh', 'Buddhist', 'Jain', 'Parsi', 'Jewish', 'Other'].map((religion, index) => (
                                            <option key={index} value={religion}>{religion}</option>
                                        ))}
                                    </select>
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label type="Caste"> Caste </label>
                                    <select aria-label="Default select example" className='form-control' name='caste' onChange={handleInputFileds} >
                                        <option> Select Caste </option>
                                        {[
                                            'SC', 'BC', 'General', 'Ews', 'OBC', 'ST'].map((caste, index) => (
                                                <option key={index} value={caste}>{caste}</option>
                                            ))}
                                    </select>
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label type="Name"> Father's  Name  </label>
                                    <input type="text" className='form-control' name='father_name' onChange={handleInputFileds} />
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label type="Name"> Mother's  Name  </label>
                                    <input type="text" className='form-control' name='mother_name' onChange={handleInputFileds} />
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label type="Name"> Father's Mobile no </label>
                                    <input type="number" className='form-control' name='father_number' onChange={handleInputFileds} />
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label type="Name"> Mother's mobile no  </label>
                                    <input type="number" className='form-control' name='mother_number' onChange={handleInputFileds} />
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
