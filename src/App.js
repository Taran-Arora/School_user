import logo from './logo.svg';
import './App.css';
import { NavLink, Outlet } from 'react-router-dom';
import Register from './Components/Register';

function App() {
  return (
    <>
      {/* <Register /> */}
      <Outlet />
      <NavLink to='./register'> Regiser form </NavLink>
    </>

  );
}

export default App;
