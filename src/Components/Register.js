// import React from 'react';

// export default function Register() {
//   return (
//     <div className="form-container">
//       <div className="login_box">
//         <h1 className='login-reg-heading'> School Register</h1>
//         <div className="input_box">
//           <input type="text" required />
//           <label htmlFor="">School Name</label>
//         </div>
//         <div className="input_box">
//           <input type="text" required />
//           <label htmlFor="">School Id</label>
//         </div>
//         {/* <div className="input_box">
//           <input type="text" required />
//           <label htmlFor="">Email</label>
//           <ion-icon className="icon" name="mail-outline"></ion-icon>
//         </div> */}
//         <div className="input_box">
//           <input type="password" required />
//           <label htmlFor="">Password</label>
//         </div>
//         <div className="input_box">
//           <input type="password" required />
//           <label htmlFor=""> Confirm password</label>
//         </div>
//         <div className="login">
//           <a href='#' className='sign-log-button'>Register</a>
//         </div>
//         <div>
//         </div>
//       </div>
//     </div>

//   )
// }


import React from 'react';


export default function Register() {
  return (
    <div className="form-container">
      <div className="login_box">
        <h1 className='login-reg-heading'> School Register</h1>
        <div className="input_box">
          <input id="schoolName" type="text"  placeholder='School Name'required />
        </div>
        <div className="input_box">
          <input id="schoolId" type="text" placeholder='School Id' required />
        </div>
        {/* Other input fields */}
        <div className="input_box">
          <input type="password" placeholder='Password' required />
        </div>
        <div className="input_box">
          <input type="password" placeholder=' Confirm Password'  required />

        </div>
        <div className="login">
          <button type='button' className='sign-log-button'>Register</button>
        </div>
      </div>
    </div>
  );
}
