import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SegmentIcon from '@mui/icons-material/Segment';
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import SearchIcon from '@mui/icons-material/Search';
import { ToggleContext } from './ToggleContext';

const Nav = () => {
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
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <div class="input-group">
                    <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" class="form-control border-0 bg-light" />
                    <div class="input-group-append">
                        <button id="button-addon1" type="submit" class="btn position-absolute">
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
