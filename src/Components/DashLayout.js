
import { Container } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { ToggleContext } from './ToggleContext';

export default function DashLayout() {
    const { toggle , Toggle } = useContext(ToggleContext);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  

    const handleResize = () => {
        setIsMobile(window.innerWidth < 1200);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {
        if(isMobile && toggle) {
            Toggle(); 
        }
    }

    return (
        <>

            <Container fluid className="dash min-vh-100">
                <div className="row">
                    <div
                        className={`sidebar ${isMobile ? 'position-fixed ' : 'position-fixed'} ${toggle ? 'show' : 'hide'}`}
                        style={{

                            width: isMobile ? '270px' : (toggle ? '270px' : '110px'),
                            transform: isMobile && !toggle ? 'translateX(-100%)' : 'translateX(0)',
                            height: '100%',
                            top: 0,
                            left: 0,
                            paddingRight: "30px",
                            zIndex: "99",
                            transition: "0.5s all"
                        }}
                    >
                        <Sidebar />
                    </div>
                    <div className="col px-md-5 main-content" style={{
                        marginLeft: isMobile ? '0' : (toggle ? '270px' : '110px'),
                        transition: "0.5s all"

                    }}
                    onClick={handleClick}
                    >
                        <Outlet />
                    </div>
                </div>
            </Container>

        </>
    );
}
