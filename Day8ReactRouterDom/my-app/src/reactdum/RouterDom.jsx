import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Internship from '../pages/Internship'
import Courses from '../pages/Courses'
import Placements from '../pages/Placements'
import Reviews from '../pages/Reviews'

function RouterDom() {
  return (
    <div>
        <Routes>
            <Route path= "/" element = {<Home/>} />
            <Route path = "/internship" element = {<Internship/>}/>
            <Route path = "/courses" element={<Courses/>} />
            <Route path = "/placement" element ={<Placements/>} />
            <Route path = "/reviews" element ={<Reviews/>} />
        </Routes>


    </div>
  )
}

export default RouterDom