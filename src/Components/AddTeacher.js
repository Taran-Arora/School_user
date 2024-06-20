import React, { useState } from 'react'
import Nav from './Nav'
import { Col, Container, Row } from 'react-bootstrap'
import AddImg from './AddImg';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import _fetch from '../config/api';
import { api_url } from '../config/config';
import toasted from '../config/toast';
import { Construction } from '@mui/icons-material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



const AddTeacher = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const username = location.state?.username;

    const useremail = localStorage.getItem('useremail');

    const [inputFields, setInputFields] = useState([7]);
    const [status, setStatus] = useState('');

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [gender, setGender] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirm_password, setConfirmPassword] = useState();
    const [subject, setSubject] = useState();
    const [contact, setContact] = useState();
    const [profileImage, setProfileImage] = useState(null);
    const [imageUploaded, setImageUploaded] = useState(false);

    const [staticPeriods, setStaticPeriods] = useState(Array.from({ length: 6 }, (_, index) => ({ period_number: index + 1, class_name: '' })));
    const [dynamicPeriods, setDynamicPeriods] = useState([]);

    const handleStaticChange = (index, event) => {
        const values = [...staticPeriods];
        values[index][event.target.name] = event.target.value;
        setStaticPeriods(values);
    };

    const handleDynamicChange = (index, event) => {
        const values = [...dynamicPeriods];
        values[index][event.target.name] = event.target.value;
        setDynamicPeriods(values);
    };

    const handleAddField = () => {
        const newPeriodNumber = dynamicPeriods.length + 7;
        const newDynamicPeriods = [...dynamicPeriods, { period_number: newPeriodNumber, class_name: '' }];
        setDynamicPeriods(newDynamicPeriods);
    };

    const handleImageChange = (imageData) => {
        setProfileImage(imageData);
        setImageUploaded(true);
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file);
        }
        // if (file) {
        //     const reader = new FileReader();
        //     reader.onloadend = () => {
        //         setProfileImage(reader.result);
        //     };
        //     reader.readAsDataURL(file);
        // }
    }

    const submitTeacherData = async () => {
        const periods = [...staticPeriods, ...dynamicPeriods].filter(period => period.class_name !== '');
        let formData = new FormData();
        formData.append('school_id', useremail);
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('gender', gender);
        formData.append('contact', contact);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('confirm_password', confirm_password);
        formData.append('subjects', subject);
        formData.append('image', profileImage);
        formData.append('periods', JSON.stringify(periods));

        const res = await _fetch(`${api_url}teacher/register/`, "ImagePost", formData, {});

        if (res?.status === 200) {
            toasted.success(res?.message);
            navigate('/allteachers');

        } else if (res?.status == 400) {
            toasted.error(res?.message);
        }
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [confirmPassword2, setConfirmPassword2] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };


    return (
        <div className='px-3'>
            <Nav />
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className='top-head d-flex'>
                            <h3 className='top-heading'>Add a New Teacher</h3>
                            <input type='file' onChange={handleImage} />
                            {/* <AddImg profileImage={profileImage} imageUploaded={imageUploaded} onImageChange={handleImageChange} /> */}
                        </div>
                    </Col>
                    <Col lg={12}>
                        <form action="" className='teacher-from'>
                            <div className='form-head mb-5'>
                                <h5 className='form-heading'>Individual Details</h5>
                            </div>
                            <Row>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>First Name </label>
                                    <input type="text" placeholder="Enter First Name" className="form-control" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Last Name </label>
                                    <input type="text" placeholder="Enter Last Name" className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Gender </label>
                                    <select className='form-control' onChange={(e) => setGender(e.target.value)} >
                                        <option value>Please Select Gender </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Contact </label>
                                    <input type="number" className="form-control" placeholder='Enter Contact Number' onChange={(e) => setContact(e.target.value)} value={contact} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Email </label>
                                    <input type="mail" className="form-control" placeholder='Enter Email Address' onChange={(e) => setEmail(e.target.value)} value={email} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group t-filed'>
                                    <label>Password </label>
                                    <input type={showPassword ? "text" : "password"} className="form-control" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                                    {showPassword ? (<RemoveRedEyeIcon className='password-icon-t' onClick={togglePasswordVisibility} />) : (<VisibilityOffIcon className='password-icon-t' onClick={togglePasswordVisibility} />)}
                                </Col>
                                {/* <div className="input-filed position-relative">
                                    <Form.Control  placeholder="Password" className='password-filed' name='password'  />
                                  
                                </div> */}
                                <Col xl={4} lg={6} className='form-group '>
                                    <label>Confirm Password </label>
                                    <input
                                        type={showPassword2 ? "text" : "password"}
                                        className="form-control"
                                        placeholder='Enter Confirm Password'
                                        onChange={(e) => setConfirmPassword2(e.target.value)}
                                        value={confirmPassword2}
                                    />
                                    {showPassword2 ? (
                                        <RemoveRedEyeIcon className='password-icon-t' onClick={togglePasswordVisibility2} />
                                    ) : (
                                        <VisibilityOffIcon className='password-icon-t' onClick={togglePasswordVisibility2} />
                                    )}
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Subject </label>
                                    <input type="text" placeholder="Enter Subject Name" className="form-control" onChange={(e) => setSubject(e.target.value)} value={subject} />
                                </Col>

                                {staticPeriods?.map((field, index) => (
                                    <Col key={index} xl={4} lg={6} className='form-group'>
                                        <label>Period {field?.period_number} </label>
                                        <select className='form-control' name="class_name" onChange={(e) => handleStaticChange(index, e)} value={field?.class_name}>
                                            <option value>Select Class </option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </Col>
                                ))}

                                {dynamicPeriods?.map((field, index) => (
                                    <Col key={index} xl={4} lg={6} className='form-group'>
                                        <label>Period {field?.period_number} </label>
                                        <select className='form-control' name="class_name" onChange={(e) => handleDynamicChange(index, e)} value={field?.class_name}>
                                            <option value>Select Class </option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </Col>
                                ))}

                                <div className='form-group d-flex gap-3'>
                                    <button type='button' className='btn-submit' onClick={() => submitTeacherData()}>Submit</button>
                                    <button type='button' className='add-btn' onClick={handleAddField}>
                                        <AddCircleOutlineSharpIcon />Add Period
                                    </button>
                                </div>

                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddTeacher
