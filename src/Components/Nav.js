import React, { useContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SegmentIcon from '@mui/icons-material/Segment';
import SearchIcon from '@mui/icons-material/Search';
import { ToggleContext } from './ToggleContext';
import _fetch from '../config/api';
import { api_url } from '../config/config';

const Nav = () => {

    const whoLogin = localStorage.getItem('whologin');
    const userEmail = localStorage.getItem('useremail');

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [teacherImage, setTeacherImage] = useState();

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.round-image')) {
            setIsDropdownVisible(false);
        }
    };

    useEffect(() => {
        if(whoLogin === 'is_teacher') {
            getIsTeacherdata();
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const getIsTeacherdata = async () => {
        let res = await _fetch(`${api_url}teacherimagedata/?teacher_email=${userEmail}`, 'GET', {}, {});
        console.log('res', res);
        if (res?.status === 200) {
            setTeacherImage(res?.data[0]?.image);
        }
    }

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
            {/* <div className="collapse navbar-collapse" id="collapsibleNavId">
                <div className="input-group">
                    <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" className="form-control border-0 bg-light" />
                    <div className="input-group-append">
                        <button id="button-addon1" type="submit" className="btn position-absolute">
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </div> */}
            {whoLogin === 'is_teacher' ? 
            <div className="round-image" onClick={toggleDropdown}>
                <img
                    src={`data:image/jpeg;base64,${teacherImage}`}
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
            : ''
            }
        </nav>
    );
};

export default Nav;
