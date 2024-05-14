import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Links() {
  return (
    <div>
          <NavLink to='./register'> Regiser form </NavLink>
      <br />
      <br />
      <NavLink to="./login"> Login page form </NavLink>
    </div>
  )
}
