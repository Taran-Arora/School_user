import React, { useState } from 'react'
import Nav from './Nav'
import { Col, Container, Row } from 'react-bootstrap'
import _fetch from '../config/api';
import { api_url } from '../config/config';
import toasted from '../config/toast';

const AddTeacher = () => {

    const [className, setClassName] = useState('');
    const [totalStudents, setTotalStudents] = useState('');

    const addClass = async () => {
        const data = {
            // school_id: schoolEmail,
            class_name: className,
            total_students: totalStudents,
        };

        try {
            const res = await _fetch(`${api_url}class/register/`, 'POST', {
                'Content-Type': 'application/json',
            }, JSON.stringify(data));

            console.log('res', res);

            if (res?.status === 200) {
                toasted.success(res?.msg || 'Class added successfully');
            } else {
                toasted.error(res?.msg || 'Failed to add class');
            }
        } catch (error) {
            console.error('Error:', error);
            toasted.error('An error occurred while adding the class');
        }
    };

    return (
        <div className='px-3'>
            <Nav />
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className='top-head d-flex'>
                            <h3 className='top-heading'>Add a New Class</h3>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <form action="" className='teacher-from'>
                            <div className='form-head mb-5'>
                                <h5 className='form-heading'>Individual Details</h5>
                            </div>
                            <Row>
                                <Col xl={6} lg={6} className='form-group'>
                                    <label>Enter Class Name  </label>
                                    <input type="text" placeholder="Enter Class Name" className="form-control" value={className} onChange={(e) => setClassName(e.target.value)}  />
                                </Col>
                                <Col xl={6} lg={6} className='form-group'>
                                    <label>Total Students</label>
                                    <input type="number" placeholder="Total Numbers of Students" className="form-control" value={totalStudents} onChange={(e) => setTotalStudents(e.target.value)}  />
                                </Col>
                                <Col lg={12} className='form-group'>
                                    <button type='button' onClick={addClass} className='btn-submit'>Submit</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddTeacher
