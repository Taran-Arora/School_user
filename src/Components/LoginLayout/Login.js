import React from 'react';
import { Container, Col, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import _fetch from '../../config/api';
import { api_url } from '../../config/config';
import toasted from '../../config/toast';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import 'bootstrap/js/dist/dropdown';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import Select from "react-select";

export default function Login() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [allFields, setAllFields] = useState({});

    const inputFieldsData = (event) => {
        setAllFields({
            ...allFields,
            [event.target.name]: event.target.value,
        });
    }

    const loginSubmit = async () => {

        let res = await _fetch(`${api_url}login/`, 'POST', allFields, {});

        if (res?.status === 200) {
            toasted.success(res?.message);
            localStorage.setItem('token', res?.access);
            localStorage.setItem('auth', 'true');
            localStorage.setItem('useremail', allFields?.username);
            localStorage.setItem('whologin',  allFields?.who);
            if(allFields?.who === 'is_school') {
                navigate('/dashboard');
            }
            else if(allFields?.who === 'is_teacher') {
                navigate('/classdetails');
            }
            // else if(allFields?.who === 'is_student') {
            //     navigate('/classdetails');
            // }
        }
        else {
            toasted.error(res?.message);
        }
    }

    // const colourOptions = [
    //     { value: "is_student", label: "Is Student" },
    //     { value: "is_school", label: "Is School" },
    //     { value: "is_teacher", label: "Is Teacher" }
    // ];
    // const colourStyles = {
    //     option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    //         // const color = chroma(data.color);
    //         console.log({ data, isDisabled, isFocused, isSelected });
    //         return {
    //             ...styles,
    //             backgroundColor: isFocused ? "#999999" : null,
    //             color: "#333333"
    //         };
    //     }
    // };

    return (
        <div>
            <div className="form-section">
                <Container className='custom-container'>
                    <Col lg={12}>
                        <Form>
                            <div className="main-form">
                                <div className="form-heading">
                                    <h1 className='text-center'> Sign In </h1>
                                    {/* <div className="dropdown dropup my-3 text-end">
                                        <button
                                            className="btn btn-secondary dropdown-toggle"
                                            type="button"
                                            id="dropdownMenuButton"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            is School
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li><a className="dropdown-item" href="#action1">is Teacher</a></li>
                                            <li><a className="dropdown-item" href="#action2">is Student</a></li>
                                        </ul>
                                    </div> */}
                                </div>
                                <div className="input-filed position-relative">
                                    <span className='select'>Please Select *</span>
                                    <Form.Select aria-label="Default select example" name='who' class="selector" onChange={inputFieldsData} >
                                        <option value=''>Select Option</option>
                                        <option value='is_school'>Is School</option>
                                        <option value="is_teacher">Is Teacher</option>
                                        <option value="is_student">Is Student</option>
                                    </Form.Select>
                                    {/* <Select aria-label="Default select example" name='who' class="selector" onChange={inputFieldsData}
                                        defaultValue={colourOptions[1]}
                                        label="Single select"
                                        options={colourOptions}
                                        styles={colourStyles}
                                    ></Select> */}
                                </div>
                                <div className="input-filed position-relative">
                                    <Form.Control type="email" name='username' placeholder="Email" onChange={inputFieldsData} value={allFields?.username} />
                                    <AlternateEmailIcon />
                                </div>
                                <div className="input-filed position-relative">
                                    <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" className='password-filed' name='password' onChange={inputFieldsData} value={allFields?.password} />
                                    {showPassword ? (<RemoveRedEyeIcon className='password-icon' onClick={togglePasswordVisibility} />) : (<VisibilityOffIcon className='password-icon' onClick={togglePasswordVisibility} />)}
                                </div>
                                <NavLink to='/forgot' className="forget-link">Forget password ?</NavLink>
                                <button type='button' onClick={loginSubmit} className='signIn-btn form-control'> Sign In </button>
                            </div>
                        </Form>
                    </Col>
                </Container>
            </div>
        </div>
    );
}
