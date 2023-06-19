import React from 'react'
import Sidebar from '../Layout/Sidebar'
import { FaFilter, FaUsers, FaUsersCog } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsQrCode } from 'react-icons/bs'


const Filterteam = () => {
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
              <FaUsersCog/>
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
        <div className='mid-content2'>
          <div className='filterteam'>
            <div className='filterrelative'>
              <div className='filterslide'>
                <button style={{height:"16px",width:"18px",borderRadius:"10px",border:"none",backgroundColor:"#F7921E"}}></button>
              </div>
              <div className='highlighter'><button style={{width:"122px",border:"none",backgroundColor:"#656669",height:"5px"}}></button></div>
              <div className='nonhigh'><button style={{border:"none",backgroundColor:"#F1F1F1",height:"5px",width:"222px"}}></button></div>
            <div className='innerfilter'>
            <div><h3 style={{fontFamily:"sans-serif"}}>Filter</h3></div>
            <div style={{marginTop:"8px"}}><h5 style={{fontFamily:"sans-serif"}}>Choose man hour range</h5></div>

              <div style={{height:"110px",paddingTop:"5px",display:"flex",justifyContent:"space-between"}}>
                    <div>
                     <button style={{backgroundColor:'#F7921E',border:"none",height:"10px",borderRadius:"5px"}}></button> 
                    <h4 style={{marginTop:"12px",fontFamily:"sans-serif"}}>5000 Hours</h4>
                    </div>
                    <div>
                     <button style={{marginLeft:"95px",backgroundColor:'#F7921E',border:"none",height:"10px",borderRadius:"5px"}}></button> 
                    <h4 style={{marginTop:"12px", marginLeft:"11px",fontFamily:"sans-serif"}}>20000 Hours</h4>
                    </div>
              </div>
              <div className='buttonfilter'>
                    <button style={{backgroundColor:"#F7921E", color:"white",width:"90px",height:"25px",border:"none",borderRadius:"5px"}}><h4 style={{fontFamily:"sans-serif",fontWeight:"normal"}}>Apply</h4></button>
                    <Link to="/"><button style={{backgroundColor:"white", color:"#F7921E",width:"90px",height:"25px",border:"none",borderRadius:"5px",cursor:"pointer"}}><h4 style={{fontFamily:"sans-serif",fontWeight:"bold"}}>Clear Filter</h4></button></Link>
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

              <button className='filter'><FaFilter/><span>Filter</span></button>

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
                <td><img src='./image/pinter.png' style={{ marginRight: "9px", width: "20px" }} /><img src="./image/Group 19334.png" style={{ width: "20px" }} /> </td>
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

export default Filterteam