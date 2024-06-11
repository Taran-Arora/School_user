import React, { useState, } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Forget() {

    return (
        <div>
            <div className="form-section">
                <Container className='custom-container'>
                    <Form>
                        <div className="main-form">
                            <div className="form-heading">
                                <h1> Forget Password </h1>
                            </div>
                            <div className="input-filed position-relative">
                                <Form.Control type="email" placeholder="Email" />
                                <AlternateEmailIcon />
                            </div>
                            <button className='signIn-btn form-control'>  Send OTP </button>
                        </div>
                    </Form>

                </Container>
            </div>

        </div>
    )
}
