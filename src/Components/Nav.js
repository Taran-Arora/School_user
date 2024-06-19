import React, { useContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SegmentIcon from '@mui/icons-material/Segment';
import { ToggleContext } from './ToggleContext';
import _fetch from '../config/api';
import { api_url } from '../config/config';
import { Link } from 'react-router-dom';
import Profile from '../Images/profile.png'

const Nav = () => {

    const whoLogin = localStorage.getItem('whologin');
    const userEmail = localStorage.getItem('useremail');

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [teacherImage, setTeacherImage] = useState();
    const [teacherData, setTeacherData] = useState();
    
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.round-image')) {
            setIsDropdownVisible(false);
        }
    };

    useEffect(() => {
        if (whoLogin === 'is_teacher') {
            getIsTeacherdata();
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const getIsTeacherdata = async () => {
        let res = await _fetch(`${api_url}teacherimagedata/?teacher_email=${userEmail}`, 'GET', {}, {});
        if (res?.status === 200) {
            setTeacherImage(res?.data[0]?.image);
            setTeacherData(res?.data[0]?.teacher);
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

            {whoLogin != 'is_school' && whoLogin != 'is_student' ?
                <div className="round-image" onClick={toggleDropdown}>
                    <img
                        src={`data:image/jpeg;base64,${teacherImage}`}
                        alt="Round"
                        className="round-img"
                    />
                    {isDropdownVisible && (
                        <ul className="custom-dropdown-menu">
                            <li className='user-id'>{teacherData?.email}</li>
                            <li>
                                <img src={`data:image/jpeg;base64,${teacherImage}`} alt="" className="round-img" />
                            </li>
                            <li>
                                <h4>Hi, {teacherData?.first_name}</h4>
                            </li>
                            <li className='drop-links'>
                                <Link to='/profile'>View Profile</Link>
                            </li>
                            <li className='drop-links'>
                                <button>Sign Out</button>
                            </li>
                        </ul>
                    )}
                </div>
                : ""
            }
        </nav>
    );
};

export default Nav;
