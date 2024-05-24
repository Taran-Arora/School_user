import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Links() {
  return (
    <div>
          <NavLink to='./register'> Regiser form </NavLink>
      <br />
      <br />
      <NavLink to="./"> Login page form </NavLink>
      <br />
      <br />
      <NavLink to="./dashboard"> Dashboard </NavLink>
      <br />
      <NavLink to="./sidebar">sidebar</NavLink>
    </div>
  )
}
