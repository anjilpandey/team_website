import React from 'react'
import Sidebar from '../Layout/Sidebar'
import { FaUsers, FaUsersCog } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'

const Viewteam = () => {
  return (
    <>

      <Sidebar />
      <div className='leftview'>
        <div className='inside_leftview'>
          <h3 style={{ fontFamily: "sans-serif" }}>Employee Information</h3>
          <Link to="/employee"><button style={{ width: "25px", height: "25px", marginRight: "4px", paddingRight: "20px", paddingTop: "2px", backgroundColor: "#F71E1E1A", borderWidth: "1px", borderStyle: "solid", borderColor: "#F71E1E1A",cursor:"pointer" }}><img style={{ width: "15px", height: "15px" }} src='./image/Group 19334 (2).png'></img></button></Link>
        </div>

        <div className='inside_2'>
          <div style={{ position: "relative" }}><img src='./image/Ellipse 334.png' width='100px' height='100px'></img>
            <div style={{ position: "absolute", left: "70px", bottom: "7px", background: "#20BC08", borderRadius: "30px", width: "25px", height: "25px", border: "3px solid white" }}><img style={{ width: "18px", paddingLeft: "4px", paddingTop: "2px" }} src='./image/filter (3).png'></img></div>
          </div>

          <div className='pimagetext1'>Chadwick Boseman</div>
          <h5 style={{ color: "grey", fontFamily: "sans-serif", marginTop: "2px" }}>chad@gmail.com</h5>
          <div>
            <button className='pi_button2'>
              <div className='ppview'>Employee</div>
            </button>
          </div>

        </div>

        <div className='inside_3'>
          <div className='inside3text1'>
            <div style={{marginBottom:"20px"}}>
            <h4 style={{ color: "#656669",fontFamily:"sans-serif",fontSize:"13px",marginBottom:"5px" }}>Designation</h4>
            <h5 style={{color:"#24252A", fontFamily:"sans-serif",fontSize:"12px",fontWeight:"bold"}}>Fabricator</h5>
            </div>
          <div>
            <h4 style={{ color: "#656669",fontFamily:"sans-serif",fontSize:"13px",marginBottom:"5px" }}>Address</h4>
            <h5 style={{color:"#24252A", fontFamily:"sans-serif",fontSize:"12px",fontWeight:"bold"}}>Paramatta, Sydney, Australia</h5>
            </div>
            </div>
          <div className='inside3text' style={{marginLeft:"20px"}}>
            <h4 style={{ color: "#656669",fontFamily:"sans-serif",fontSize:"13px",marginBottom:"5px" }}>Contact</h4>
            <h5 style={{color:"#24252A", fontFamily:"sans-serif",fontSize:"12px",fontWeight:"bold"}}>0458 126 587</h5>
          </div>
        </div>

        <div className='inside_4'>
        <div className='inside3text1'>
            <div style={{marginBottom:"20px"}}>
            <h4 style={{ color: "#656669",fontFamily:"sans-serif",fontSize:"13px",marginBottom:"5px" }}>Start Date</h4>
            <h5 style={{color:"#24252A", fontFamily:"sans-serif",fontSize:"12px",fontWeight:"bold"}}>15/18/2022</h5>
            </div>
          <div>
            <h4 style={{ color: "#656669",fontFamily:"sans-serif",fontSize:"13px",marginBottom:"5px" }}>Billable Status</h4>
            <h5 style={{color:"#24252A", fontFamily:"sans-serif",fontSize:"12px",fontWeight:"bold"}}>User Is Billable</h5>
            </div>
            </div>
            <div className='inside3text1' style={{marginLeft:"98px"}}>
            <div style={{marginBottom:"20px"}}>
            <h4 style={{ color: "#656669",fontFamily:"sans-serif",fontSize:"13px",marginBottom:"5px" }}>Role</h4>
            <h5 style={{color:"#24252A", fontFamily:"sans-serif",fontSize:"12px",fontWeight:"bold"}}>Staff</h5>
            </div>
          <div>
            <h4 style={{ color: "#656669",fontFamily:"sans-serif",fontSize:"13px",marginBottom:"5px" }}>Billable Hours</h4>
            <h5 style={{color:"#24252A", fontFamily:"sans-serif",fontSize:"12px",fontWeight:"bold"}}>40 Hours/Week</h5>
            </div>
            </div>
        </div>

        
              <button className='viewbutton'><img src='./image/filter (3).png'></img><h4 style={{fontFamily:"sans-serif",fontWeight:"normal"}}>Edit Profile</h4></button>
        
      </div>
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
                <td><img src='./image/Group 19334.jpg' style={{ marginRight: "9px", width: "20px" }}></img><Link to="/editedemployee"><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /></Link><Link to="/delemployee"><img src="./image/Group 19334.png" style={{ width: "20px" }} /></Link></td>
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

export default Viewteam