import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='loginPopup'>
      <form action="" >
        <h2 className='loginText'>If Already Have an account !</h2>
        <div className='inp'>
        <input type="email" name="" id="" />
        <div className='lablediv'>Email</div>
        </div>
        <div className='inp'>
        <input type="text" name="" id="" />
        <div className='lablediv'>Password</div>
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
