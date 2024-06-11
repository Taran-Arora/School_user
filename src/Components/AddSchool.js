import React, { useState } from 'react'
import Nav from './Nav'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import _fetch from '../config/api';
import { api_url } from '../config/config';
import toasted from '../config/toast';


const AddSchool = () => {

    const [schoolName, setSchoolName] = useState('');
    const [schoolEmail, setSchoolEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const registerSchool = async () => {
        let data = {
            'school_name': schoolName,
            'school_id': schoolEmail,
            'password': password,
            'confirm_password': confirmPassword,
        }
        let res = await _fetch(`${api_url}school/register/`, 'POST', data, {});
        console.log('res', res);
        if (res?.status === 200) {
            toasted.success(res?.msg);
        }
        else {
            toasted.error(res?.msg);
        }
    }

    return (
        <div className='px-3'>
            <Nav />
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className='top-head d-flex'>
                            <h3 className='top-heading'>Add a New School</h3>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <form action="" className='teacher-from'>
                            <div className='form-head mb-5'>
                                <h5 className='form-heading'>Enter School Details Below</h5>
                            </div>

                            <Row>
                                <Col xl={6} lg={6} className='form-group'>
                                    <label>Enter School Name  </label>
                                    <input type="text" placeholder="Enter School Name" className="form-control" onChange={(e) => setSchoolName(e.target.value)} value={schoolName} />
                                </Col>
                                <Col xl={6} lg={6} className='form-group'>
                                    <label>School Email</label>
                                    <input type="mail" placeholder="School Email" className="form-control" onChange={(e) => setSchoolEmail(e.target.value)} value={schoolEmail} />
                                </Col>
                                <Col xl={6} lg={6} className='form-group'>
                                    <label>Password</label>
                                    <input type="password" placeholder="Enter Password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
                                </Col>
                                <Col xl={6} lg={6} className='form-group'>
                                    <label>Confirm Password</label>
                                    <input type="password" placeholder="Confirm Password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                                </Col>

                                <Col lg={12} className='form-group'>
                                    <button type='button' className='btn-submit' onClick={registerSchool} >Submit</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddSchool
