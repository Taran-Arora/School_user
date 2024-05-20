import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Links from './Components/Links';
import Register from './Components/Register';
import Forgot from './Components/Forget';
import './Style/Style.scss';
import Dashboard from './Components/Dashboard';
import AllStudents from './Components/AllStudents';
import AboutStudent from './Components/AboutStudent';
import Sidebar from './Components/Sidebar';




function App() {


  return (
    <>

    <AboutStudent/>
    {/* <AllStudents/> */}
      {/* <BrowserRouter>

        <Routes>


          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Links />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/dashboard" element={<Dashboard />} > 
        
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>

  );
}

export default App;
