import React from 'react'
import Design from '../Layout/Design'
import { Link } from 'react-router-dom'
import Sidebar from '../Layout/Sidebar'
import { FaFilter, FaUsers, FaUsersCog } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsQrCode } from 'react-icons/bs'

const Employee = () => {
    return (
        <>
            <Sidebar />
            <div className='content'>
                <nav className='nav centeredd'>
                    <h1 className='ntext'>Navigation Bar</h1>
                </nav>

                <div className='manageUser'>
                    <h3>Manage Users</h3>
                </div>

                <div className='banner'>
                    <div className='card'>
                        <div className='card__left'>
                            <div className='card__left-upper'>
                                <h5>Teams</h5>
                            </div>
                            <div className='card__left-lower'>
                                <h2>23</h2>
                            </div>
                        </div>
                        <div className='card__right'>
                            <FaUsersCog />
                        </div>
                    </div>

                    <div className='card' style={{ backgroundColor: "#FFAC1C" }}>
                        <div className='card__left'>
                            <div className='card__left-upper'>
                                <h5>Employees</h5>
                            </div>
                            <div className='card__left-lower'>
                                <h2>105</h2>
                            </div>
                        </div>
                        <div className='card__right'>
                            <FaUsers />
                        </div>
                    </div>
                </div>
                <div className='mid-content'>
                    <div className='table-top'>
                        <Link style={{ textDecoration: "none" }} to='/'><h3 className='table-top-team1'>Teams</h3></Link>
                        <h3 className='table-top-employee'>Employees</h3>
                    </div>
                    <hr className='hrtag'></hr>


                    <div style={{ "display": "flex" }} className='searchitem'>
                        <div className='button_grp'>
                            <button className='btnback'>
                                <img src='./image/filter.png' />
                                <input className='search_input' placeholder="Search Item" />
                            </button>

                            {/* <button className='filter'><FaFilter /> <span>Filter</span> </button> */}

                        </div>
                        <Link to='/addemloyee' style={{ textDecorationLine: "none" }}><button className='addteam'><AiOutlinePlus style={{ "color": "white" }} /><h4 className='addteams'>Add Employee</h4></button></Link>
                    </div>


                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Current Team</th>
                            <th>Mobile Number</th>
                            <th>Email Address </th>
                            {/* <th className='qrdetails'>QR Details</th> */}
                            <th>Designation</th>
                            <th>Billable Hours</th>
                            <th>Actions</th>
                        </tr>

                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>David Doe</td>
                                {/* <td className='qrcode'><BsQrCode /> </td> */}
                                <td>Fabrication Team 1</td>
                                <td>+61 8386 3482</td>
                                <td>david33@gmail.com</td>
                                <td>Electrical</td>
                                <td>40 hours/week</td>
                                <td><Link to="/viewemployee"><img src='./image/Group 19334.jpg' style={{ marginRight: "9px", width: "20px" }}></img></Link><Link to="/editedemployee"><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /></Link><Link to="/delemployee"><img src="./image/Group 19334.png" style={{ width: "20px" }} /></Link></td>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td>David Doe</td>
                                <td>Fabrication Team 1</td>
                                <td>+61 8386 3482</td>
                                <td>david33@gmail.com</td>
                                <td>Electrical</td>
                                <td>40 hours/week</td>
                                <td><img src='./image/Group 19334.jpg' style={{ marginRight: "9px", width: "20px" }}></img><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /><img src="./image/Group 19334.png" style={{ width: "20px" }} /></td>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td>David Doe</td>
                                <td>Fabrication Team 1</td>
                                <td>+61 8386 3482</td>
                                <td>david33@gmail.com</td>
                                <td>Electrical</td>
                                <td>40 hours/week</td>
                                <td><img src='./image/Group 19334.jpg' style={{ marginRight: "9px", width: "20px" }}></img><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /><img src="./image/Group 19334.png" style={{ width: "20px" }} /></td>
                            </tr>
                            <tr>
                                <td>04</td>
                                <td>David Doe</td>
                                <td>Fabrication Team 1</td>
                                <td>+61 8386 3482</td>
                                <td>david33@gmail.com</td>
                                <td>Electrical</td>
                                <td>40 hours/week</td>
                                <td><img src='./image/Group 19334.jpg' style={{ marginRight: "9px", width: "20px" }}></img><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /><img src="./image/Group 19334.png" style={{ width: "20px" }} /></td>
                            </tr>
                            <tr>
                                <td>05</td>
                                <td>David Doe</td>
                                <td>Fabrication Team 1</td>
                                <td>+61 8386 3482</td>
                                <td>david33@gmail.com</td>
                                <td>Electrical</td>
                                <td>40 hours/week</td>
                                <td><img src='./image/Group 19334.jpg' style={{ marginRight: "9px", width: "20px" }}></img><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /><img src="./image/Group 19334.png" style={{ width: "20px" }} /></td>
                            </tr>
                            <tr>
                                <td>06</td>
                                <td>David Doe</td>
                                <td>Fabrication Team 1</td>
                                <td>+61 8386 3482</td>
                                <td>david33@gmail.com</td>
                                <td>Electrical</td>
                                <td>40 hours/week</td>
                                <td><img src='./image/Group 19334.jpg' style={{ marginRight: "9px", width: "20px" }}></img><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /><img src="./image/Group 19334.png" style={{ width: "20px" }} /></td>
                            </tr>
                            <tr>
                                <td>07</td>
                                <td>David Doe</td>
                                <td>Fabrication Team 1</td>
                                <td>+61 8386 3482</td>
                                <td>david33@gmail.com</td>
                                <td>Electrical</td>
                                <td>40 hours/week</td>
                                <td><img src='./image/Group 19334.jpg' style={{ marginRight: "9px", width: "20px" }}></img><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /><img src="./image/Group 19334.png" style={{ width: "20px" }} /></td>
                            </tr>
                            <tr>
                                <td>08</td>
                                <td>David Doe</td>
                                <td>Fabrication Team 1</td>
                                <td>+61 8386 3482</td>
                                <td>david33@gmail.com</td>
                                <td>Electrical</td>
                                <td>40 hours/week</td>
                                <td><img src='./image/Group 19334.jpg' style={{ marginRight: "9px", width: "20px" }}></img><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /><img src="./image/Group 19334.png" style={{ width: "20px" }} /></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <p>HELLOO</p> */}
                </div>
            </div>



        </>
    )
}

export default Employee