import { Container } from 'react-bootstrap';
import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { ToggleContext } from './ToggleContext';

export default function DashLayout() {
    const { toggle } = useContext(ToggleContext);

    return (
        <Container fluid className="dash min-vh-100">
            <div className="row">
                <div
                    className={`col-12 col-md-4 col-lg-3 col-xl-2  vh-100 position-fixed sidebar ${toggle ? 'sidebar-visible' : 'sidebar-hidden'}`}
                    style={{ transition: 'transform 0.5s ease', transform: toggle ? 'translateX(0)' : 'translateX(-100%)' }}
                >
                    <Sidebar />
                </div>
                <div className={`col bg-full ${toggle ? 'col-md-8 col-lg-9 col-xl-10 offset-md-4 offset-lg-3 offset-xl-2' : ''}`}>
                    <Outlet />
                </div>
            </div>
        </Container>
    );
}
