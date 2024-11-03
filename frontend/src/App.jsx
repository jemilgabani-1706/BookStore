import React from 'react'
import Home from './home/Home.jsx'
import { Route, Routes } from "react-router-dom"
import Courses from './courses/courses.jsx'
import Signup from './components/Signup.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/course' element={<Courses></Courses>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
      </Routes>
    </>
  )
}

export default App