import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false)
    const togglePasswordvisibilty = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordvisibilty2 = () => {
        setShowPassword2(!showPassword2)
    }


    return (
        <div>
          {/* form section starts  */}
            <div className="form-section">
                <Container className='custom-container'>
                    <Form>
                        <div className="main-form">
                            <div className="form-heading">
                                <h1> Reset Password </h1>
                            </div>
                            <div className="input-filed position-relative">
                                <Form.Control type={showPassword ? "text" : "password"} placeholder="password " className='password-filed' />
                                {showPassword ? <VisibilityOffIcon className='pass-icon1' id="pass-icon" onClick={togglePasswordvisibilty} /> : <RemoveRedEyeIcon className='pass-icon1' onClick={togglePasswordvisibilty} />}
                            </div>
                            <div className="input-filed position-relative">
                                <Form.Control type={showPassword2 ? "text" : "password"} placeholder="Confirm Password " className='password-filed' />
                                {showPassword2 ? <VisibilityOffIcon className='pass-icon' id="pass-icon" onClick={togglePasswordvisibilty2} /> : <RemoveRedEyeIcon className='pass-icon' onClick={togglePasswordvisibilty2} />}
                            </div>

                            <button className='signIn-btn form-control'>  Submit  </button>
                        </div>
                    </Form>
                </Container>
            </div>
             {/* form section ends   */}

        </div>
    )
}


