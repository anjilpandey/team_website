import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { Link } from 'react-router-dom'
import Sidebar from '../Layout/Sidebar'

const Editteam = () => {
  const [values, setValues] = useState([])
  const handleSelect = (e) => {
    console.log(e.target.value);
    setValues([...values, e.target.value])
  }
  const handleReset = (val) => {
    const newValues = values.filter((el) => el !== val);

    setValues([...newValues]);
  }
  console.log('values', values)
  return (
    <>
      <Sidebar />
      <div className='contentteam'>
        <nav className='nav centered'>
          <div className='nav_container'>
            <Link className='arrow' to='/'><img src='./image/arrow.jpg.jpg'></img></Link>
            <h1 className='ntext'>Navigation Bar</h1>
          </div>
        </nav>
        <div className='ndown'>
          Manage Users <img src='./image/Group 19460.jpg' height='16px' width='16px'></img> Teams <img src='./image/Group 19460.jpg' height='16px' width='16px'></img> Edit Team
        </div>
        <h1 className='ateam'>Edit Team</h1>
        <div className='mainbox'>
          <div className='box'>
            <div className='boxinside1'>
              <div className='bin'> Basic Information</div>
              <div className='mem'> Members</div>
              <div className='teamqr'> Team QR</div>
            </div>

            <div className='box2'>
              <div className='boxinside2'>
                <div className='textarea'>
                  <div className='text1'>
                    <div className='teamname'><h5>Team Name</h5>
                      <input className='teamnamewidth' type='text' placeholder='Enter Team Name' />
                    </div>
                  </div>

                  <div className='text1'>
                    <div className='teamname'><h5>Team Password</h5>
                      <div><input className='teamnamewidth' type='text' placeholder='Team Password'></input></div>
                    </div>
                  </div>


                </div>
              </div>
              {/* <div className='newtext'> */}
              <div className='boxinside3'>
                {/* <div className='textarea2'> */}
                <div className='text1'>
                  <div ><h5 className='teammem1'>Team Members</h5>
                    <div className='dropdownmenu'>
                      {/* <label for="cars">Select Employees</label> */}

                      <select onChange={handleSelect} className='selectemp' name="cars" id="cars">
                        {/* <option >Select Employees</option> */}
                        <label>Select Employees</label>
                        <option value="" disabled selected>Select Employees</option>
                        <option value="John Doe">John Doe</option>
                        <option value="Marcus Brownlee">Marcus Brownlee</option>
                        <option value="Jane Jackson">Jane Jackson</option>
                        <option value="Thomas Humfrey">Thomas Humfrey</option>
                      </select>
                      <div className='valuewrap'>
                        {values.map((value) => <div className='chip'>{value} <button className='btnreset' onClick={() => handleReset(value)}><ImCross /></button> </div>)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='text1'>
                  <div><h5 className='billa'>Billable Hours</h5>
                    <div><input className='btnwid' type='text' placeholder='Enter Billable Hours'></input>
                      <button className='bluebutton'>Hours</button>
                    </div>
                  </div>
                </div>

                {/* </div> */}
              </div>
              <div className='boxinside4'>
                <div className='qr'>
                  <img src='./image/Image 4@2x.png' width='80px'></img>
                </div>
                <div className='rightqr'>
                  <button className='print'><img src='./image/Group 19545.png' width='13px'></img>Print</button>

                  <button className='print2'><img src='./image/Group 19548.png' width='15px'></img>Download</button>

                </div>
              </div>
            </div>
            {/* </div> */}



            {/* <div className='basic'>Basic Information </div>
                        {/* <div className='teamname'>Team Name
                        <div className='typee'>
                            <input type='text' placeholder='Enter team name'/>
                            </div> 
                            </div>
                        <div className='teamname'>Team Password 
                        <div className='typee'>
                        <input type='text' placeholder='Enter team password'/>
                            </div></div>
                        
                    </div> */}
            {/* <div className='box-2'>
                        <div className='basic'>Members </div> */}
            {/* <div className='teamname'>Team Members
                        <div className='typee'>
                            <input type='text'></input>
                            </div> 
                            </div> */}
            {/* <div className='teamname'>Team Password 
                        <div className='typee'>
                        <input type='text' placeholder='Enter team password'/>
                            </div></div> */}

          </div>
          {/* <div className='boxinside3'>
                        <div> QR code</div>
                    </div> */}

        </div>


        <div className='footer'>
          <button className='save'><h5 className='savetext'>Save</h5></button>

        </div>
      </div >
    </>
  )
}

export default Editteam