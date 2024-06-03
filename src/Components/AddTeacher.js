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

const AddTeacher = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const username = location.state?.username;

    const [inputFields, setInputFields] = useState([7]);
    const [status, setStatus] = useState('');

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [gender, setGender] = useState();
    const [email, setEmail] = useState();
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
        console.log('file', file);
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
        console.log('profileImage',profileImage);
        const periods = [...staticPeriods, ...dynamicPeriods].filter(period => period.class_name !== '');
        let formData = new FormData();
        const data = {
            school_id: username,
            first_name: firstName,
            last_name: lastName,
            gender: gender,
            contact: contact,
            email: email,
            subjects: subject,
            image: profileImage,
            periods: periods
        };
        console.log('data',data);

        const res = await _fetch(`${api_url}teacher/register/`, "POST", data, {});

        if (res?.status === 200) {

            toasted.success(res?.message);
            navigate('/schooldata');


        } else if (res?.status == 400) {

            toasted.error(res?.message);
        }
    }

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
                                    <button type='button' className='btn-submit' onClick={submitTeacherData}>Submit</button>
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
