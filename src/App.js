import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Links from './Components/Links';
import Register from './Components/Register';
import Forgot from './Components/Forget';
import './Style/Style.scss';
import { LinkSharp } from '@mui/icons-material';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/"/>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Links />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
