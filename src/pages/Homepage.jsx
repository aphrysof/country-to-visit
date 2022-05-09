import React from 'react'
import Mainsection from '../components/Mainsection'
import Sidenavbar from '../components/Sidenavbar'

const Homepage = () => {
  return (
    <div className = "flex relative">
        <Sidenavbar />
        <Mainsection />
        
    </div>
  )
}

export default Homepage