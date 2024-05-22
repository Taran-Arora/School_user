import React, { useState } from 'react'
import Nav from './Nav'
import { Col, Container, Row } from 'react-bootstrap'
import AddImg from './AddImg';
import { Link } from 'react-router-dom'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';

const AddTeacher = () => {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [gender, setGender] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [contact, setContact] = useState();
    const [periodOne, setPeriodOne] = useState();
    const [periodTwo, setPeriodTwo] = useState();
    const [periodThree, setPeriodThree] = useState();
    const [periodFour, setPeriodFour] = useState();
    const [periodFive, setPeriodFive] = useState();
    const [periodSix, setPeriodsix] = useState();

// const submitTeacherData = async() => {
//     const data = {
//     }   
// }

    return (
        <div className='px-3'>
            <Nav />
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className='top-head d-flex'>
                            <h3 className='top-heading'>Add a New Teacher</h3>
                            <AddImg />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <form action="" className='teacher-from'>
                            <div className='form-head mb-5'>
                                <h5 className='form-heading'>Individual Details</h5>
                            </div>
                            <Row>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>First Name *</label>
                                    <input type="text" placeholder="Enter First Name" className="form-control" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Last Name *</label>
                                    <input type="text" placeholder="Enter Last Name" className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Gender *</label>
                                    <select className='form-control' onChange={(e) => setGender(e.target.value)} >
                                        <option value>Please Select Gender *</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Contact *</label>
                                    <input type="number" className="form-control" placeholder='Enter Contact Number'/>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Email *</label>
                                    <input type="mail" className="form-control" placeholder='Enter Email Address'/>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Subject *</label>
                                    <input type="text" placeholder="Enter Subject Name" className="form-control" onChange={(e) => setSubject(e.target.value)} value={subject} />
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Period 1st *</label>
                                    <select className='form-control' onChange={(e) => setPeriodOne(e.target.value)} >
                                        <option value>Select Class *</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Period 2nd *</label>
                                    <select className='form-control' onChange={(e) => setPeriodTwo(e.target.value)} >
                                        <option value>Select Class *</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Period 3rd *</label>
                                    <select className='form-control' onChange={(e) => setPeriodThree(e.target.value)}  > 
                                        <option value>Select Class *</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group' >
                                    <label>Period 4th *</label>
                                    <select className='form-control' onChange={(e) => setPeriodFour(e.target.value)}  >
                                        <option value>Select Class *</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Period 5th *</label>
                                    <select className='form-control' onChange={(e) => setPeriodFive(e.target.value)}  >
                                        <option value>Select Class *</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </Col>
                                <Col xl={4} lg={6} className='form-group'>
                                    <label>Period 6th *</label>
                                    <select className='form-control' onChange={(e) => setPeriodsix(e.target.value)}  >
                                        <option value>Select Class *</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </Col>
                                <Col lg={12} className='form-group d-flex gap-3'>
                                    <button type='submit' className='btn-submit'>Submit</button>
                                    <Link to="/addteacher" className='add-btn'>
                                        <AddCircleOutlineSharpIcon />Add Period
                                    </Link>
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
