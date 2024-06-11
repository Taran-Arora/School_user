import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/LoginLayout/Login';
import Forgot from './Components/LoginLayout/Forget';
import './Style/Style.scss';
import Dashboard from './Components/Dashboard';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AllTeachers from './Components/AllTeachers';
import DashLayout from './Components/DashLayout';
import AllStudents from './Components/AllStudents';
import SchoolData from './Components/SchoolData';
import AboutStudent from './Components/AboutStudent'
import { ToggleProvider } from './Components/ToggleContext';
import AddTeacher from './Components/AddTeacher';
import AddClass from './Components/AddClass';
import AboutTeacher from './Components/AboutTeacher';
import ClassDetails from './Components/ClassDetails';
import AddStudent from './Components/AddStudent';
import PrivateRoutes from "./routes/PrivateRoutes";
import ClassData from './Components/ClassData';

function App() {

  return (
    <>
      <ToggleProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/forgot" element={<Forgot />} />

            <Route element={<PrivateRoutes />}>
            <Route element={<DashLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/allteachers" element={<AllTeachers />} />
              <Route path='/allstudents' element={<AllStudents />} />
              <Route path='/schooldata' element={<SchoolData />} />
              <Route path='/aboutstudent' element={<AboutStudent />} />
              <Route path="/addteacher" element={<AddTeacher />} />
              <Route path='/addclass' element={<AddClass />} />
              <Route path='/aboutteacher' element={<AboutTeacher />} />
              <Route path='/classdetails' element={<ClassDetails />} />
              <Route path='/classdata' element={<ClassData />} />
             
              <Route path='/addstudent' element={<AddStudent />} />
            </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ToggleProvider>

      <ToastContainer />
    </>


  );
}

export default App;
