
import React, { createContext, useState, useEffect } from 'react';

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
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
        <ToggleContext.Provider value={{ toggle, Toggle }}>
            {children}
        </ToggleContext.Provider>
    );
};
