import React, { useState } from 'react'
// import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MailIcon from '@mui/icons-material/Mail';

import { NavLink } from 'react-router-dom'

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className="container">
                <div className="login_box">
                    <h1 className='login-reg-heading '> Admin Login</h1>
                    <div className="input_box">
                        <input type="text" required />
                        <label htmlFor="">Email</label>
                        <MailIcon className="icon"/>
                    </div>
                    <div className="input_box">
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                        />
                        <label>Password</label>
                        {showPassword ? (
                            <RemoveRedEyeIcon className="icon" onClick={togglePasswordVisibility} />
                        ) : (
                            <VisibilityOffIcon className="icon" onClick={togglePasswordVisibility} />
                        )}
                    </div>
                    <div className="login">
                        <button>Login</button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}
