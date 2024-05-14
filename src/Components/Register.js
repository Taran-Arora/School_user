import React from 'react'

export default function Register() {
  return (
    <div className="container">
    <div className="login_box">
      <h1 className='login-reg-heading'>Register</h1>
      <div className="input_box">
        <input type="text" required />
        <label htmlFor="">School Name</label>
        <ion-icon className="icon" name="mail-outline"></ion-icon>
      </div>
      <div className="input_box">
        <input type="text" required />
        <label htmlFor="">School Id</label>
        <ion-icon className="icon" name="mail-outline"></ion-icon>
      </div>
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
      <div className="input_box">
        <input type="password" required />
        <label htmlFor=""> Confirm password</label>
        <ion-icon className="icon" name="lock-closed-outline"></ion-icon>
      </div>
      <div className="login">
        <button>Register</button>
      </div>
      <div>
 
      </div>
    </div>
  </div>
  
  )
}
