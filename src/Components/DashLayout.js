import { Container } from 'react-bootstrap';
import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { ToggleContext } from './ToggleContext';

export default function DashLayout() {
    const { toggle, Toggle } = useContext(ToggleContext);

    return (
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
    );
}
