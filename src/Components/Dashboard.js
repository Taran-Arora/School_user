import React, {useState} from 'react'
import Home from './Home';
import Sidebar from './Sidebar';

const Dashboard = () => {
    const [toggle, setToggle] = useState(true)
    const Toggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className="container-fluid bg-secondary min-vh-100">
            <div className="row">
                {toggle && <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
                    <Sidebar />
                </div>}
                {toggle && <div className="col-4 col-md-2"></div>}
                <div className="col">
                    <Home Toggle={Toggle} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
