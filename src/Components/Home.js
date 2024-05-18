import React from 'react'
import Nav from './Nav'
import Students from '../assets/Images/graduation.png'
import Parents from '../assets/Images/parents.png'
import Teacher from '../assets/Images/teacher.png'
import Earning from '../assets/Images/salary.png'

const Home = ({ Toggle }) => {
    return (
        <div className='px-3'>
            <Nav Toggle={Toggle} />
            <div className="container-fluid cards">
                <div className="row g-3 my-2">
                    <div className="col-lg-3 col-md-6 p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className='fs-2'>15000</h3>
                                <p className='fs-5'>Students</p>
                            </div>
                            <img src={Students} alt="" className='img-fluid cards-img bg-green' />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className='fs-2'>2250</h3>
                                <p className='fs-5'>Teachers</p>
                            </div>
                            <img src={Teacher} alt="" className='img-fluid cards-img bg-blue' />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className='fs-2'>5900</h3>
                                <p className='fs-5'>Parents</p>
                            </div>
                            <img src={Parents} alt="" className='img-fluid cards-img bg-yellow' />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-1">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className='fs-2'>$232323</h3>
                                <p className='fs-5'>Earning</p>
                            </div>
                            <img src={Earning} alt="" className='img-fluid cards-img bg-pink' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
            <div className="table-responsive">
                <table className="table">
                    <thead><h3 className='table-heading'>All Schools</h3></thead>
                    <tbody>
                        <tr>
                            <th scope="col">S. No.</th>
                            <th scope="col">School Name</th>
                            <th scope="col">School Email</th>
                            <th scope="col"></th>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>School@gmail.com</td>
                            <td className='d-flex justify-content-evenly'>
                                <a href="" className='btn-login'>Login</a>
                                <a href="" className='btn-view'>View</a>
                                <a href="" className='btn-block'>Block</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td className='d-flex justify-content-evenly'>
                                <a href="" className='btn-login'>Login</a>
                                <a href="" className='btn-view'>View</a>
                                <a href="" className='btn-block'>Block</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry the Bird</td>
                            <td>School@gmail.com</td>
                            <td className='d-flex justify-content-evenly'>
                                <a href="" className='btn-login'>Login</a>
                                <a href="" className='btn-view'>View</a>
                                <a href="" className='btn-block'>Block</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Larry the Bird</td>
                            <td>School@gmail.com</td>
                            <td className='d-flex justify-content-evenly'>
                                <a href="" className='btn-login'>Login</a>
                                <a href="" className='btn-view'>View</a>
                                <a href="" className='btn-block'>Block</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Larry the Bird</td>
                            <td>School@gmail.com</td>
                            <td className='d-flex justify-content-evenly'>
                                <a href="" className='btn-login'>Login</a>
                                <a href="" className='btn-view'>View</a>
                                <a href="" className='btn-block'>Block</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Larry the Bird</td>
                            <td>School@gmail.com</td>
                            <td className='d-flex justify-content-evenly'>
                                <a href="" className='btn-login'>Login</a>
                                <a href="" className='btn-view'>View</a>
                                <a href="" className='btn-block'>Block</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}

export default Home
