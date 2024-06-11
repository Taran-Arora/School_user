import React, { useContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SegmentIcon from '@mui/icons-material/Segment';
import { ToggleContext } from './ToggleContext';
import Profile from '../Images/profile.png'

const Nav = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.round-image')) {
            setIsDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const { Toggle } = useContext(ToggleContext);
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent px-3">
            <SegmentIcon className='toggler fs-1' onClick={Toggle}></SegmentIcon>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className='bi bi-justify'></i>
            </button>
            <div className="round-image" onClick={toggleDropdown}>
                <img
                    src={Profile}
                    alt="Round"
                    className="round-img"
                />
                {isDropdownVisible && (
                    <ul className="custom-dropdown-menu">
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Nav;
