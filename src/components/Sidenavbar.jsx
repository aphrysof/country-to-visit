import React from 'react'
import logo from '../logo/BAG-Logo.png'
import { Link } from 'react-router-dom'


const Sidenavbar = () => {
  return (
    <div className = "w-56 h-screen border border-l-[#F2F2F2] sticky">
        <div className = "flex flex-col items-start relative top-7 left-9 p-0">
          <img src = {logo} alt = 'Logo'/>
          <div className = "relative top-14">
            <ul>
              <li><Link to={"/"}>MY LIST</Link></li>
              <li><Link to={"/Visited"}>VISITED</Link></li>
              <li><Link to={"/Tovisit"}>TO VISIT</Link></li>
            </ul>
          </div>
          <div className = "relative top-96">
            <ul>
              <li><Link to={"/Profile"}>PROFILE</Link></li>
              <li><Link to={"/Settings"}>SETTINGS</Link></li>
              <li><Link to={"/"}>LOGOUT</Link></li>
            </ul>
          </div>
        </div>   
    </div>
  )
}

export default Sidenavbar