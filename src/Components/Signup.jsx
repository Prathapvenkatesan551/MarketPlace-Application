import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'
const Signup = () => {
    const nav=useNavigate();
  return (
    <div className='signupPopup'>
      <form action="" >
        <h2 className='signupText'>Create an Account !</h2>
        <div className='inp'>
        <input type="text" name="" id="" />
        <div className='lablediv'>Name</div>
        </div>
        <div className='inp'>
        <input type="email" name="" id="" />
        <div className='lablediv'>Email</div>
        </div>
        <div className='inp'>
        <input type="text" name="" id="" />
        <div className='lablediv'>New Password</div>
        </div>
        <div className='inp'>
        <input type="text" name="" id="" />
        <div className='lablediv'>Mobile Number</div>
        </div>
        <button>Sign up</button>
      </form>
    </div>
  )
}

export default Signup
