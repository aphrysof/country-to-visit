import React from 'react'
import { Link } from 'react-router-dom'
import SignupImage from '../images/signup3.jpg'
import googleIcon from '../logo/image 2.png'
import {SignInWithGoogle} from '../services/firebase'


const Signup = () => {
  return (
    <>
    <div className ="flex"> 
        <div>
            <img src={SignupImage} alt='signupimage' className="bg-cover bg-no-repeat h-[100vh] w-[40vw]"  />
        </div>
        <div className = "w-[60vw]">
            <form className='flex flex-col gap-1 mx-40 my-2'>
                    <h1 className='text-4xl font-bold text-[#14C704]'>Sign Up</h1>
                    <div className = "flex flex-row justify-between">
                        <div className = "flex flex-col gap-3">
                            <label htmlFor = 'firstname' className='font-semibold'>First Name</label>
                            <input type= 'text'
                             name='firstname'
                             autoComplete='off'
                             spellCheck = {false} 
                            className='border rounded-md py-2 px-6' />
                        </div>
                        <div className = "flex flex-col gap-3">
                        <label htmlFor  = 'lastname' className='font-semibold'>Last Name</label>
                        <input type= 'text' 
                        name='lastname'
                         autoComplete='off'
                         spellCheck = {false} 
                        className='border rounded-md py-2 px-6' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor  = 'email' className='font-semibold'>Email</label>
                            <input type = 'email' 
                            name='email'
                            size="64"
                            maxLength="64"
                            placeholder="email@gmail.com"
                            required
                            className='border rounded-md py-2 px-2'/>
                        <label htmlFor  = 'password' className='font-semibold'>Password</label>
                            <input type= 'password'
                             name='password'
                            minLength="4"
                            maxLength="8"
                            autoComplete = "current-password"
                            required
                            className='border rounded-md py-2 px-2' />
                        <label htmlFor  = 'confirmpassword' className='font-semibold'>Re-enter Password</label>
                            <input type= 'password' 
                            name = 'confirmpassword'
                             minLength="4"
                             maxLength="8"
                             autoComplete = "current-password"
                             required
                            className='border rounded-md py-2 px-2' />
                    </div>
                    <div className= "flex mt-2 gap-2 items-center pb-3">
                        <input type = 'checkbox' name='confirm'/>
                        <span className='font-semibold leading-none'>I've read and agree to the terms and Services and our <br/>privacy policy</span>
                        </div>
                    <div className= ''>
                        <button className='bg-[#14C704] py-2 w-full rounded-md font-semibold text-white'>Sign Up</button>
                    </div>
            </form>
            <p className = "uppercase text-center py-2">or</p>
                        <button className='flex items-center m-auto border px-40 gap-2 py-2 rounded-md font-semibold'
                        onClick = {SignInWithGoogle}>
                        <img src = {googleIcon} alt = 'icon'/>
                        Sign In with Google</button>
                    <div className = "flex gap-1 mb-2 justify-center items-center pt-4">
                        <p className='font-semibold'>Already have an account</p><Link to = {'/Login'}><span className='text-[#14C704]'>Sign in</span></Link>
                    </div>
        </div>
    </div>
       
           
           
    </>
  )
}
export default Signup