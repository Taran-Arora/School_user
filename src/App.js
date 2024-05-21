import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Forgot from './Components/Forget';
import './Style/Style.scss';
import Dashboard from './Components/Dashboard';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AllTeachers from './Components/AllTeachers';
import DashLayout from './Components/DashLayout';
import AllSchools from './Components/AllSchools';
import AllStudents from './Components/AllStudents';

// import AboutStudent from './Components/AboutStudent';
import SchoolData from './Components/SchoolData';
import AboutStudent from './Components/AboutStudent'
import { ToggleProvider } from './Components/ToggleContext';
import AddTeacher from './Components/AddTeacher';




function App() {

  return (
    <>
      <ToggleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route element={<DashLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/allschools" element={<AllSchools />} />
              <Route path="/allteachers" element={<AllTeachers />} />
              <Route path='/allstudents' element={<AllStudents />} />
              <Route path='/schooldata' element={<SchoolData />} />
              <Route path='/aboutStudent' element={<AboutStudent/>}/>
              <Route path="/addteacher" element={<AddTeacher />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ToggleProvider>

    {/* <AboutStudent/> */}
    {/* <AllStudents/> */}
      {/* <BrowserRouter>

        <Routes>


          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route element={<DashLayout />}>
            <Route path="/allschools" element={<AllSchools />} />
            <Route path="/allteachers" element={<AllTeachers />} />
            <Route path='/allstudents' element={<AllStudents/>}/>
            <Route path='/aboutStudent' element={<AboutStudent/>}/>
          </Route>
        </Routes> 
      </BrowserRouter> */}


      {/* <ToastContainer /> */}
    </>


  );
}

export default App;
