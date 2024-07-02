// import { Container } from 'react-bootstrap';
// import React, { useContext } from 'react';
// import Sidebar from './Sidebar';
// import { Outlet } from 'react-router-dom';
// import { ToggleContext } from './ToggleContext';

// export default function DashLayout() {
//     const { toggle } = useContext(ToggleContext);

//     return (
//         <Container fluid className="dash min-vh-100">
//             <div className="row">
//                 <div
//                     className={`col-12 col-md-4 col-lg-3 col-xl-2  vh-100 position-fixed sidebar ${toggle ? 'sidebar-visible' : 'sidebar-hidden'}`}
//                     style={{ transition: 'transform 0.5s ease', transform: toggle ? 'translateX(0)' : 'translateX(-100%)' }}
//                 >
//                     <Sidebar />
//                 </div>
//                 <div className={`col bg-full ${toggle ? 'col-md-8 col-lg-9 col-xl-10 offset-md-4 offset-lg-3 offset-xl-2' : ''}`}>
//                     <Outlet />
//                 </div>
//             </div>
//         </Container>
//     );
// }


//sachin 

// import { Container } from 'react-bootstrap';
// import React, { useContext, useEffect, useState } from 'react';
// import Sidebar from './Sidebar';
// import { Outlet } from 'react-router-dom';
// import { ToggleContext } from './ToggleContext';

// export default function DashLayout() {
//     const { toggle } = useContext(ToggleContext);
//     const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

//     const handleResize = () => {
//         setIsMobile(window.innerWidth < 1200);
//     };

//     useEffect(() => {
//         window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return (
//         <Container fluid className="dash min-vh-100">
//             <div className="row">
//                 <div
//                     className={`sidebar ${isMobile ? 'position-fixed z-99' : 'position-fixed'} ${toggle ? 'show' : 'hide'}`}
//                     style={{
//                         transition: 'transform 0.5s ease, width 0.5s ease',
//                         width: isMobile ? '270px' : (toggle ? '270px' : '110px'),
//                         transform: isMobile && !toggle ? 'translateX(-100%)' : 'translateX(0)',
//                         height: '100%',
//                         top: 0,
//                         left: 0,
//                     }}
//                 >
//                     <Sidebar />
//                 </div>
//                 <div className="col p-0" style={{
//                     marginLeft: isMobile ? '0' : (toggle ? '270px' : '90px'),
//                     transition: 'margin-left 0.5s ease',
//                 }}>
//                     <Outlet />
//                 </div>
//             </div>
//         </Container>
//     );
// }



import { Container } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { ToggleContext } from './ToggleContext';

export default function DashLayout() {
    const { toggle } = useContext(ToggleContext);
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

    return (
        <Container fluid className="dash min-vh-100">
            <div className="row">
                <div
                    className={`sidebar ${isMobile ? 'position-fixed z-1' : 'position-fixed'} ${toggle ? 'show' : 'hide'}`}
                    style={{
                        
                        width: isMobile ? '270px' : (toggle ? '270px' : '110px'),
                        transform: isMobile && !toggle ? 'translateX(-100%)' : 'translateX(0)',
                        height: '100%',
                        top: 0,
                        left: 0,
                        paddingRight:"30px"
                    }}
                >
                    <Sidebar />
                </div>
                <div className="col p-0" style={{
                    marginLeft: isMobile ? '0' : (toggle ? '270px' : '90px'),
                    transition: 'margin-left 0.5s ease',
                }}>
                    <Outlet />
                </div>
            </div>
        </Container>
    );
}
