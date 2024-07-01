import React, { useState } from 'react';
import Nav from './Nav';
import { Col, Container, Row } from 'react-bootstrap';
import AddImg from './AddImg';
import _fetch from '../config/api';
import { api_url } from '../config/config';
import toasted from '../config/toast';
import { useLocation, useNavigate } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const AddStudent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const username = location?.state?.school_id;
    const class_name = location.state?.class_name;

    const [allFields, setAllFields] = useState({});
    const [profileImage, setProfileImage] = useState(null);

    const handleInputFileds = (e) => {
        const { name, value } = e.target;
        setAllFields(prevState => ({
            ...prevState,
            [name]: value,
            school_id: username,
            student_class: class_name
        }));
    };

    const handleImageChange = (imageData) => {
        setProfileImage(imageData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in allFields) {
            formData.append(key, allFields[key]);
        }
        if (profileImage) {
            formData.append('image', profileImage);
        }

        const res = await _fetch(`${api_url}student/register/`, "ImagePost", formData, {});
        if (res?.status === 200) {
            toasted.success(res?.message);
            navigate('/classdata');
        } else if (res?.status === 400) {
            toasted.error(res?.message);
        }
    };


    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className='px-3'>
            <Nav />
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className='top-head d-flex'>
                            <h3 className='top-heading'>Add a New Student</h3>
                            <AddImg profileImage={profileImage} onImageChange={handleImageChange} />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <form action="" className='teacher-from' onSubmit={handleSubmit}>
                            <div className='form-head mb-5'>
                                <h5 className='form-heading'>Individual Details</h5>
                            </div>
                            <Row>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Name </label>
                                    <input type="text" placeholder="Enter Name" className="form-control" name='name' onChange={handleInputFileds} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Roll No </label>
                                    <input type="text" className="form-control" placeholder='Enter Roll No' name='roll_no' onChange={handleInputFileds} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Class </label>
                                    <input type="text" className="form-control" placeholder='Enter Class' value={class_name} readOnly />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Gender </label>
                                    <select className='form-control' name='gender' onChange={handleInputFileds}>
                                        <option value="">Please Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Contact </label>
                                    <input type="number" className="form-control" placeholder='Enter Contact Number' name='contact_No' onChange={handleInputFileds} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Whatsapp Number</label>
                                    <input type="number" className="form-control" placeholder='Enter Whatsapp Number' name='whatsapp_number' onChange={handleInputFileds} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Email </label>
                                    <input type="email" className="form-control" placeholder='Enter Email Address' name='email' onChange={handleInputFileds} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Password </label>
                                    <input type={showPassword ? "text" : "password"} className="form-control" placeholder='Enter Password' name='password' onChange={handleInputFileds} />
                                    {showPassword ? (<RemoveRedEyeIcon className='password-icon-t' onClick={togglePasswordVisibility} />) : (<VisibilityOffIcon className='password-icon-t' onClick={togglePasswordVisibility} />)}
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Confirm Password </label>
                                    <input type={showConfirmPassword ? "text" : "password"} className="form-control" placeholder='Enter Confirm Password' name='confirm_password' onChange={handleInputFileds} />
                                    {showConfirmPassword ? (
                                        <RemoveRedEyeIcon className='password-icon-t' onClick={toggleConfirmPasswordVisibility} />
                                    ) : (
                                        <VisibilityOffIcon className='password-icon-t' onClick={toggleConfirmPasswordVisibility} />
                                    )}
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Blood Group </label>
                                    <select className='form-control' name='blood_group' onChange={handleInputFileds}>
                                        <option value="">Select Blood Group</option>
                                        {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((group, index) => (
                                            <option key={index} value={group}>{group}</option>
                                        ))}
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>DOB </label>
                                    <input type="date" className='form-control' name='dob' onChange={handleInputFileds} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Date of Admission </label>
                                    <input type="date" className='form-control' name='date_of_admission' onChange={handleInputFileds} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Address</label>
                                    <input type="text" className='form-control' name='address' onChange={handleInputFileds} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Religion </label>
                                    <select className='form-control' name='religion' onChange={handleInputFileds}>
                                        <option value="">Select Religion</option>
                                        {['Hindu', 'Muslim', 'Christian', 'Sikh', 'Buddhist', 'Jain', 'Parsi', 'Jewish', 'Other'].map((religion, index) => (
                                            <option key={index} value={religion}>{religion}</option>
                                        ))}
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Caste </label>
                                    <select className='form-control' name='caste' onChange={handleInputFileds}>
                                        <option value="">Select Caste</option>
                                        {['SC', 'BC', 'General', 'Ews', 'OBC', 'ST'].map((caste, index) => (
                                            <option key={index} value={caste}>{caste}</option>
                                        ))}
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Total Fee </label>
                                    <input type="number" className="form-control" placeholder='Enter Total Fee' name='total_fee' onChange={handleInputFileds} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Father's Name </label>
                                    <input type="text" className="form-control" placeholder="Enter Father's Name" name="father_name" onChange={handleInputFileds} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Mother's Name </label>
                                    <input type="text" className="form-control" placeholder="Enter Mother's Name" name='mother_name' onChange={handleInputFileds} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Father's Mobile No </label>
                                    <input type="number" className="form-control" placeholder="Enter Father's Mobile No" name='father_no' onChange={handleInputFileds} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Mother's Mobile No </label>
                                    <input type="number" className="form-control" placeholder="Enter Mother's Mobile No" name='mother_no' onChange={handleInputFileds} />
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
    );
};

export default AddStudent;
