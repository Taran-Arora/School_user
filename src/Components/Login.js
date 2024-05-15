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
          navigate('/');
        }
        else if (res?.message) {
          toasted.error(res?.message);
        }
      }

    return (
        <div>
            <div className="container">
                <div className="login_box">
                    <h1 className='login-reg-heading '> Admin Login</h1>
                    <div className="input_box">
                        <input type="text" required name='username' onChange={inputFieldsData} value={allFields?.username}  />
                        <label htmlFor="">Email</label>
                        <MailIcon className="icon"/>
                    </div>
                    <div className="input_box">
                        <input
                            type={showPassword ? "text" : "password"}
                            required name='password' onChange={inputFieldsData} value={allFields?.password} 
                        />
                        <label>Password</label>
                        {showPassword ? (
                            <RemoveRedEyeIcon className="icon" onClick={togglePasswordVisibility} />
                        ) : (
                            <VisibilityOffIcon className="icon" onClick={togglePasswordVisibility} />
                        )}
                    </div>
                    <div className="login">
                        <button type='button' onClick={loginSubmit}>Login</button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}
