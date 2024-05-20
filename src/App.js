import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Forgot from './Components/Forget';
import './Style/Style.scss';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import AllTeachers from './Components/AllTeachers';
import DashLayout from './Components/DashLayout';
import AllSchools from './Components/AllSchools';
import AllStudents from './Components/AllStudents';



function App() {


  <DashLayout/>

  return (
    <>

    {/* <AboutStudent/> */}
    {/* <AllStudents/> */}
      <BrowserRouter>

        <Routes>


          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route element={<DashLayout />}>
            <Route path="/allschools" element={<AllSchools />} />
            <Route path="/allteachers" element={<AllTeachers />} />
            <Route path='/allstudents' element={<AllStudents/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
