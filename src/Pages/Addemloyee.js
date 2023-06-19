import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Layout/Sidebar'

const Addemloyee = () => {
    return (
        <>
            <div className='sidebar3'>
                <h1 className='textsb'>Sidebar</h1>
            </div>
            <div className='contentemp'>
                <nav className='nav centered'>
                    <div className='nav_container'>
                        <Link className='arrow' to='/employee'><img src='./image/arrow.jpg.jpg'></img></Link>
                        <h1 className='ntext'>Navigation Bar</h1>
                    </div>
                </nav>
                <div className='ndown'>
                    Manage Users <img src='./image/Group 19460.jpg' height='16px' width='16px'></img> Employees <img src='./image/Group 19460.jpg' height='16px' width='16px'></img> Add Employees
                </div>
                <h1 className='ateam'>Add Employee</h1>

                <div className='mainbox2'>
                    <div className='profilepicture'>
                        <div><img src='./image/Group 19553.png' width='120px' height='120px'></img></div>
                        <div className='pbdisplay'>
                            <div className='pimagetext'>Profile image</div>
                            <div>
                                <button className='pi_button'>
                                    <img src='./image/filter (2).png' style={{ marginLeft: "8px", marginTop: "3px", marginRight: '4px' }} height='20px' />
                                    <div className='pp'>Upload Profile Image</div>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className='basicinfo'>
                        <div className='bisize'>
                            Basic Information
                        </div>

                        <div className='nametext'>
                            <div className='nametextinside'>
                                <div >Name</div>
                                <div><input className="widthinput" type='text' placeholder='Enter Name' /></div>
                            </div>
                            <div className='nametextinside'>
                                <div>Middle Name</div>
                                <div><input className="widthinput" type='text' placeholder='Enter Middle Name' /></div>
                            </div>
                            <div className='nametextinside'>
                                <div>Surname</div>
                                <div><input className="widthinput" type='text' placeholder='Enter Surname' /></div>
                            </div> <div className='nametextinside'>
                                <div>Birth Date</div>
                                <div><input className="widthinput" type='text' placeholder='DD/MM/YYYY' /></div>
                            </div>
                            <div className='nametextinside'>
                                <div>Gender</div>
                                <div><select className="widthinput" style={{height:"22px"}} type='text' placeholder='Choose Gender'>
                                    <option selected disabled>Choose Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                    </select></div>
                            </div>
                            <div className='nametextinside'>
                                <div>Address</div>
                                <div><input className="widthinput" type='text' placeholder='Enter Address' /></div>
                            </div>
                            <div className='nametextinside'>
                                <div>Phone Number</div>
                                <div><input className="widthinput" type='text' placeholder='Enter Phone Number' /></div>
                            </div>
                            <div className='nametextinside'>
                                <div>Email Address</div>
                                <div><input className="widthinput" type='text' placeholder='Enter Email Address' /></div>
                            </div>


                        </div>
                    </div>
                    <div className='workinghoursflex1'>
                        <div className='whtext'>
                            Working Hours
                        </div>
                        <div className='whboxes'>
                            <div className='nametext'>
                                <div className='nametextinside'>
                                    <div >Starts At</div>
                                    <div><input className="widthinput" type='text' placeholder='HH-MM' /></div>
                                </div>
                                <div className='nametextinside'>
                                    <div>Ends In</div>
                                    <div><input className="widthinput" type='text' placeholder='HH-MM' /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='workinghoursflex2'>
                        <div className='whtext'>
                            Jobs
                        </div>
                        <div className='whboxes'>
                            <div className='nametext'>
                                <div className='nametextinside'>
                                    <div >Job Position</div>
                                    <div><input className="widthinput" type='text' placeholder='Enter Job Position' /></div>
                                </div>
                                <div className='nametextinside'>
                                    <div>Team</div>
                                    <div><select className="widthinput" style={{height:"22px"}} type='text' placeholder='Choose Team'>
                                        <option selected disabled>Choose Team</option>
                                        <option value='team1'>Team 1</option>
                                        <option value='team2'>Team 2</option>
                                        </select></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='workinghoursflex3'>
                        <div className='whtext'>
                            Billable Information
                        </div>
                        <div className='whboxes'>
                            <div className='nametextinside2'>
                                <div className='userbillable'><img src='./image/Group 19029.png' width='18px' style={{ verticalAlign: "top", marginRight: "5px" }}></img>This user is billable</div>
                            </div>
                            <div className='nametextinside3'>
                                <div>Billable Hours</div>
                                <div className='inputwidth'>
                                    <div className='btnhours'>
                                <input className='inputwidth2' type='text' placeholder='Enter Billable Hours'></input>
                                <button className='btnwidthinside'>Hours</button>
                                </div>
                                    <div><button className='btnwidth'>Enter</button></div>
                            </div>
                            </div>

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

                <div className='footer1'>
                    <button className='save'><h5 className='savetext'>Save</h5></button>

                </div>
            </div>
            {/* <div className='boxinside3'>
                        <div> QR code</div>
                    </div> */}


            {/* <div className='footer'>
                <button className='save'><h5 className='savetext'>Save</h5></button>

            </div>
 */}


        </>
    )
}

export default Addemloyee