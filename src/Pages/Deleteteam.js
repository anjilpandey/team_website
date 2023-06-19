import React from 'react'
import Design from '../Layout/Design'
import Sidebar from '../Layout/Sidebar'
import { FaFilter, FaUsers, FaUsersCog } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsQrCode } from 'react-icons/bs'

const Deleteteam = () => {
  return (
    <>
      <div className='sidebar1'>
        <h1 className='textsb'>Sidebar</h1>
      </div>

      <div className='content1'>
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
        <div className='mid-content1'>
          <div className='deletebox'>
            <div className='inside_deletebox'>
              <div className='delete_image'>
                <h3 style={{fontFamily:"sans-serif"}}>Delete Team</h3>
                <div>
                  <button style={{ width: "25px", paddingRight: "20px", paddingTop: "2px",backgroundColor:"#F71E1E1A", borderWidth:"1px",borderStyle:"solid",borderColor:"#F71E1E1A" }}><img style={{ width: "15px", height: "15px" }} src='./image/Group 19334 (2).png'></img></button>
                </div>
              </div>

                <div className='pdiv'>
                        <p style={{fontSize:"13px",color:"#656669", width:"320px",fontFamily:"sans-serif"}}>
                          Are you sure you want to delete <b style={{color:"black"}}>Fabrication Team 1</b> from the list?
                        </p>

                 <div className='delcan'>
                  <button style={{width:"80px",backgroundColor:"#F71E1E",color:"white",height:"28px",border:"none",borderRadius:"5px"}}>Delete</button>
                  <Link to="/"><button style={{width:"80px",backgroundColor:"#1E83F7",color:"white",height:"28px",border:"none",borderRadius:"5px",cursor:"pointer"}}>Cancel</button></Link>
                  </div>       

                </div>

            </div>
          </div>
          
          <div className='table-top'>
            <h3 className='table-top-team'>Teams</h3>
            <Link to='/employee' style={{ textDecoration: "none" }}><h3 className='table-top-employee1'>Employees</h3></Link>
          </div>
          <hr className='hrtag'></hr>


          <div style={{ "display": "flex" }} className='searchitem'>
            <div className='button_grp'>
              <button className='btnback'>
                <img src='./image/filter.png' />
                <input className='search_input' placeholder="Search Item" />
              </button>

              <button className='filter'><FaFilter /> <span>Filter</span> </button>

            </div>
            <Link to='/addteam' style={{ textDecorationLine: "none" }}><button className='addteam'><AiOutlinePlus style={{ "color": "white" }} /><h4 className='addteams'>Add Team</h4></button></Link>
          </div>


          <table>
            <tr>
              <th>Team Name</th>
              <th>Members</th>
              <th className='qrdetails'>QR Details</th>
              <th>Total Man Hours</th>
              <th>Actions</th>
            </tr>

            <tbody>
                        <tr>
                            <td>Fabrication Team 1</td>
                            <td>Lucas White , Thomas Wilson & <b>15 more</b></td>
                            <td className='qrcode'><BsQrCode /> </td>
                            <td>27000</td>
                            <td><Link to="/editteam"><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /></Link><Link to='/deleteteam'><img src="./image/Group 19334.png" style={{ width: "20px" }} /></Link></td>
                        </tr>
                        <tr>
                            <td>Licensing Team 1</td>
                            <td>Charlie Brown, Thomas Clark & <b>15 more</b></td>
                            <td className='qrcode'><BsQrCode /> </td>
                            <td>27000</td>
                            <td><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /><img src="./image/Group 19334.png" style={{ width: "20px" }}/> </td>
                        </tr>
                        <tr>
                            <td>Assembly Team 1</td>
                            <td>Mia White, Lucas Anderson & <b>15 more</b></td>
                            <td className='qrcode'><BsQrCode /> </td>
                            <td>27000</td>
                            <td><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /><img src="./image/Group 19334.png" style={{ width: "20px" }} /></td>
                        </tr>
                        <tr>
                            <td>Licensing Team 2</td>
                            <td>Lily Martin, Hudson Jones & <b>15 more</b></td>
                            <td className='qrcode'><BsQrCode /> </td>
                            <td>27000</td>
                            <td><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /><img src="./image/Group 19334.png" style={{ width: "20px" }} /></td>
                        </tr>
                        <tr>
                            <td>Invoicing Team 1</td>
                            <td>Levi Roberts, Luca Hall & <b>15 more</b></td>
                            <td className='qrcode'><BsQrCode /> </td>
                            <td>27000</td>
                            <td><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /><img src="./image/Group 19334.png" style={{ width: "20px" }} /></td>
                        </tr>
                        <tr>
                            <td>Invoicing Team 2</td>
                            <td>Lucas White , Thomas Wilson & <b>15 more</b></td>
                            <td className='qrcode'><BsQrCode /> </td>
                            <td>27000</td>
                            <td><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /><img src="./image/Group 19334.png" style={{ width: "20px" }} /></td>
                        </tr>
                        <tr>
                            <td>Fabrication Team 2</td>
                            <td>Lucas White , Thomas Wilson & <b>15 more</b></td>
                            <td className='qrcode'><BsQrCode /> </td>
                            <td>27000</td>
                            <td><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /><img src="./image/Group 19334.png" style={{ width: "20px" }} /></td>
                        </tr>
                    </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Deleteteam