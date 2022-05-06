import React from 'react'
import Toggle from '../logo/Outline.png'
import Notification from '../logo/notifications.png'
import profile from '../logo/Rectangle 8.png'

const Navbar = () => {
  return (
   <>
   <div className = "flex flex-row justify-between items-center p-0 m-6">
      <div className = 'uppercase tracking-wider font-normal text-xl text-[#212121]'>
          <p>my list</p>
      </div>
      <div className = "flex flex-row justify-center items-center">
          <div className = 'flex mx-4 items-center'>
            <p className = 'mx-4 uppercase tracking-wider font-normal text-sm'>dark mode</p>
            <img src = {Toggle} alt = "darkmode" className = "w-6 h-6"/>
          </div>
          <div className = 'mx-4'>
            <img src = {Notification} alt = 'notification bell' />
          </div>
          <div className = 'flex items-center'>
              <p className = 'mx-4 tracking-wider font-normal text-xs text-[#999999]'>Hey,<span className='text-[#212121] ml-1'>Jane</span></p>
              <img src = {profile} alt = 'profile' />
          </div>
      </div>
   </div>
   </>
  )
}

export default Navbar