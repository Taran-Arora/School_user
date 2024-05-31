import React, { useState } from 'react'
import Nav from './Nav'
import { Col, Container, Row } from 'react-bootstrap'
import AddImg from './AddImg';
import 'react-datepicker/dist/react-datepicker.css';
import _fetch from '../config/api';
import { api_url } from '../config/config';
import toasted from '../config/toast';
import { useLocation, useNavigate } from 'react-router-dom';

const AddStudent = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const username = location?.state?.school_id;

    const [isImageUploaded, setIsImageUploaded] = useState(false);
    const [allFields, setAllFields] = useState({});
    const [profileImage, setProfileImage] = useState(null);

    const handleInputFileds = (e) => {

        const { name, value } = e.target;
        setAllFields(prevState => ({
            ...prevState,
            [name]: value,
            school_id: username,
            image : profileImage
        }));
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
                setAllFields(prevFields => ({
                    ...prevFields,
                    image: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await _fetch(`${api_url}student/register/`, "POST", allFields, {});
        if (res?.status === 200) {
            toasted.success(res?.message);
            navigate('/allstudents');
        }
        else if (res?.status === 400) {
            toasted.error(res?.message);
        }
    };

    return (
        <div className='px-3'>
            <Nav />
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className='top-head d-flex'>
                            <h3 className='top-heading'>Add a New Student</h3>
                            <input type='file' onChange={handleImage} />
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
                                    <label>Roll No </label>
                                    <input type="text" className="form-control" placeholder='Enter Roll No' name='roll_no' onChange={handleInputFileds} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Class </label>
                                    <input type="text" className="form-control" placeholder='Enter Class' name='student_class' onChange={handleInputFileds} />
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
                                    <input type="number" className="form-control" placeholder='Enter Contact Number' name='contact_No' onChange={handleInputFileds} />
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
                                    <input type="date" className='form-control' name='date_of_admission' onChange={handleInputFileds} />
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
                                    <input type="number" className='form-control' name='father_no' onChange={handleInputFileds} />
                                </Col>
                                <Col lg={6} xl={4} className="form-group">
                                    <label type="Name"> Mother's mobile no  </label>
                                    <input type="number" className='form-control' name='mother_no' onChange={handleInputFileds} />
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
