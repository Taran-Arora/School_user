import React, { useState, useEffect } from 'react'
import Home from './AllSchool';
import Sidebar from './Sidebar';
import { Route } from 'react-router-dom';
import AllSchool from './AllSchool';
import AboutStudent from './AboutStudent';

const Dashboard = () => {
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        if (window.innerWidth < 1200) {
            setToggle(false);
        }
    }, []);

    const Toggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="container-fluid dash min-vh-100">
            <div className="row">
                {toggle && <div className="col-10 col-md-4 col-lg-3 col-xl-2 bg-white vh-100 position-fixed z-1">
                    <Sidebar/> 
                        {/* <Route path='/allschool' element={<AllSchool/>}/> */}
                </div>}
                {toggle && <div className="col-4 col-md-2"></div>}
                <div className="col">
                    <Home Toggle={Toggle} />
                </div>
                {/* <div className="col">
                <AboutStudent Toggle={Toggle}/>

                </div> */}
            </div>
        </div>
    )
}

export default Dashboard
