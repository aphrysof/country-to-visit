import React from 'react'
import Toggle from './Toogle'
import Notification from '../logo/notifications.png'
import { Link } from 'react-router-dom'
// import { SignInWithGoogle } from '../services/firebase'
// import { onAuthStateChanged } from 'firebase/auth'

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
            <Toggle />
          </div>
          <div className = 'mx-4'>
            <img src = {Notification} alt = 'notification bell' />
          </div>
  <Link to={'/Signup'}><button className='bg-[#14C704] px-3 text-white py-1 rounded-[10px]'>Sign up</button></Link>
  <Link to = {'/Login'}><button className='bg-[#14C704] px-3 text-white py-1 rounded-[10px] ml-2'>Sign in</button></Link>

   {/* <div className = 'flex items-center'>
   <p className = 'mx-4 tracking-wider font-normal text-xs text-[#999999]'>Hey,<span className='text-[#212121] ml-1'>{localStorage.getItem('name')}</span></p>
   <img src = {localStorage.getItem("photoImage")} alt = 'profile' className='rounded-full h-[40px]' />
 </div> */}

       
  {/* */}
      </div>
   </div>
   </>
  )
}

export default Navbar