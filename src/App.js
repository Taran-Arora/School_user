import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Links from './Components/Links';
import Register from './Components/Register';
import Forgot from './Components/Forget';
// import 'bootstrap-icons/font/fonts/boostrap-icons.css'
import './Style/Style.scss';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import { useState } from 'react';

function App() {

  const [toggle, setToggle] = useState(true)
  const Toggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      {/* <BrowserRouter>
      <div className="container-fluid">
      <Sidebar/>
      </div>
        <Routes>
          <Route path="/" />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Links />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter> */}

      <div className="container-fluid bg-secondary min-vh-100">
        <div className="row">
          {toggle && <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar />
          </div>}
          {toggle && <div className="col-4 col-md-2"></div> }
          <div className="col">
            <Home Toggle={Toggle} />
          </div>
        </div>
      </div>


    </>

  );
}

export default App;
