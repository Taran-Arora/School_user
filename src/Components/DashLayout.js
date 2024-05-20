import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

export default function DashLayout() {
    const [toggle, setToggle] = useState(true);
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 1200) {
            setToggle(false);
        }
    }, []);

    const Toggle = () => {
        setTransitioning(true);
        setToggle(!toggle);
    };

    useEffect(() => {
        if (transitioning) {
            const timeout = setTimeout(() => {
                setTransitioning(false);
            }, 200);
            return () => clearTimeout(timeout);
        }
    }, [toggle, transitioning]);
    return (
        <>

            <Container fluid className="dash min-vh-100">
                <div className="row">
                    <div
                        className={`col-12 col-md-4 col-lg-3 col-xl-2 bg-white vh-100 position-fixed z-1 ${toggle ? 'sidebar-visible' : 'sidebar-hidden'}`}
                        style={{ transition: 'transform 0.5s ease', transform: toggle ? 'translateX(0)' : 'translateX(-100%)' }}
                    >
                        <Sidebar />
                    </div>
                    {toggle && <div className="col-4 col-md-2"></div>}
                    <div className="col">
                        <Outlet />
                    </div>
                </div>
            </Container>

        </>
    )
}
