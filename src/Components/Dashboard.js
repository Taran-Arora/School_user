import React, { useState, useEffect } from 'react'
import Home from './Home';
import Sidebar from './Sidebar';

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
                    <Sidebar />
                </div>}
                {toggle && <div className="col-4 col-md-2"></div>}
                <div className="col">
                    <Home Toggle={Toggle} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
