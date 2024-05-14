import React from 'react'

export default function Login() {
    return (
        <div>
            <div className="container">
                <div className="login_box">
                    <h1>Login</h1>
                    <div className="input_box">
                        <input type="text" required />
                        <label htmlFor="">Email</label>
                        <ion-icon className="icon" name="mail-outline"></ion-icon>
                    </div>
                    <div className="input_box">
                        <input type="password" required />
                        <label htmlFor="">password</label>
                        <ion-icon className="icon" name="lock-closed-outline"></ion-icon>
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
