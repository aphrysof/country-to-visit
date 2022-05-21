import React from 'react'
import SignupImage from '../images/signup3.jpg'
import googleIcon from '../logo/image 2.png'
import { Link } from 'react-router-dom'
import {FaRegEnvelope, FaLock } from 'react-icons/fa'
import {SignInWithGoogle} from '../services/firebase'

const Login = () => {
  return (
    <>
    <div className ="flex"> 
        <div>
            <img src={SignupImage} alt='signupimage' className="bg-cover bg-no-repeat h-[100vh] w-[40vw]"  />
        </div>
        <div className = "w-[60vw]">
            <form className='flex flex-col gap-5 mx-40 mt-16'>
                    <h1 className='text-4xl font-bold text-center text-[#14C704] py-3'>Sign In</h1>
                    <div className='flex flex-col gap-7 pb-5'>
               <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
                <FaRegEnvelope className = "w-5 h-5 absolute ml-3 pointer-events-none"/>
               <input
                type = "Email"
                 placeholder='Email' 
                 name = "Email" 
                 autoComplete='off'
                 aria-label='Email'
                 className='pr-3 pl-10 py-2 w-full border rounded-md'

                 />
               </div>
               <div className='relative flex items-center text-gray-400'>
                <FaLock className='w-5 h-5 absolute ml-3 pointer-events-none' />
               <input 
               type = "password"
               placeholder='Password'
               name='password'
               className='pr-3 pl-10 py-2 w-full border rounded-md'
               />
               </div>
               </div>    
                  <button className='bg-[#14C704] py-2 w-full rounded-md font-semibold text-white'>Sign In</button>
            </form>
            <p className = "uppercase text-center my-3">or</p>
                        <button className='flex items-center m-auto border px-40 gap-2 py-2 rounded-md font-semibold'
                        onClick = {SignInWithGoogle}>
                        <img src = {googleIcon} alt = 'icon'/>
                        Sign In with Google</button>
                    <div className = "flex gap-1 mb-2 justify-center items-center pt-4">
                        <p className='font-semibold'>Don't have an account</p><Link to = {'/Signup'}><span className='text-[#14C704]'>Sign in</span></Link>
                    </div>
        </div>
    </div>
       
    </>
  )
}

export default Login;