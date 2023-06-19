import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addteam from './Pages/Addteam'
import Design from './Layout/Design'
import Employee from './Pages/Employee'
import Addemloyee from './Pages/Addemloyee'
import Employeedited from './Pages/Employeedited'
import Editteam from './Pages/Editteam'
import Deleteteam from './Pages/Deleteteam'
import Deleteemployee from './Pages/Deleteemployee'
import Viewteam from './Pages/Viewteam'
import Filterteam from './Pages/Filterteam'

const Myroutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Design />} />
        <Route path='/addteam' element={<Addteam />} />
        <Route path='/employee' element={<Employee/>}/>
        <Route path='/addemloyee' element={<Addemloyee/>}/>
        <Route path='/editedemployee' element={<Employeedited/>}/>
        <Route path='/editteam' element={<Editteam/>}/>
        <Route path='/deleteteam' element={<Deleteteam/>}/>
        <Route path='/delemployee' element={<Deleteemployee/>}/>
        <Route path='/viewemployee' element={<Viewteam/>}/>
        <Route path='/filterteam' element={<Filterteam/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default Myroutes