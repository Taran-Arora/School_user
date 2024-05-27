import React, { useEffect, useState } from 'react';
import Home from './Home';


const Dashboard = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            return (
                <Home />
            );
        }
    }, [token]);


};

export default Dashboard;
