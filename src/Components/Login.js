import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import _fetch from '../../src/config/api';
import { api_url } from '../../src/config/config';
import toasted from '../../src/config/toast';
import MailIcon from '@mui/icons-material/Mail';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [allFields, setAllFields] = useState({
        'username': '',
        'password': ''
      });

      const inputFieldsData = (event) => {
        setAllFields({
          ...allFields,
          [event.target.name]: event.target.value
        })
      }

      const loginSubmit = async () => {

        let res = await _fetch(`${api_url}admin/login/`, 'POST', allFields, {});
    
        if (res?.status == 200) {
            toasted.success(res?.message);
            localStorage.setItem('token', res?.access);
            localStorage.setItem('auth', 'true');
            localStorage.setItem('useremail', allFields?.username);
            navigate('/dashboard');
          }
        else if (res?.message) {
          toasted.error(res?.message);
        }
      }

    return (
        <div>
            <div className="form-container">
                <div className="login_box">
                    <h1 className='login-reg-heading '> Admin Login</h1>
                    <div className="input_box">
                        <input type="Email" placeholder='Email' required name='username' onChange={inputFieldsData} value={allFields?.username}  />
                        <MailIcon className="icon" />
                    </div>
                    <div className="input_box">
                        <input
                            type={showPassword ? "text" : "password"}
                            required name='password' onChange={inputFieldsData} value={allFields?.password}
                            maxLength={8} placeholder='Password'
                        />
                        {showPassword ? (
                            <RemoveRedEyeIcon className="icon" onClick={togglePasswordVisibility} />
                        ) : (
                            <VisibilityOffIcon className="icon" onClick={togglePasswordVisibility} />
                        )}
                    </div>
                    <div className="login">
                        <button type='button' className='sign-log-button' onClick={loginSubmit}>Login</button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>

    )
}
