import logo from './logo.svg';
import './App.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Register from './Components/Register';
import './Style/Style.scss';

function App() {
  return (
    <>
      {/* <Register /> */}

      <Outlet />
  
    </>

  );
}

export default App;
