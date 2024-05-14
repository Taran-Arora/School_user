import logo from './logo.svg';
import './App.css';
import { NavLink, Outlet } from 'react-router-dom';
import Register from './Components/Register';
import './Style/Style.scss';

function App() {
  return (
    <>
      {/* <Register /> */}
      <Outlet />
      <NavLink to='./register'> Regiser form </NavLink>
      <br />
      <br />
      <NavLink to="./login"> Login page form </NavLink>
    </>

  );
}

export default App;
