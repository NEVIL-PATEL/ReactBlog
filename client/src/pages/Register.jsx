import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="auth">
            <h1>Register</h1>
            <form action="">
                <input required type="text" name="" id="" placeholder='UserName' />
                <input required type="email" name="" id="" placeholder='Email' />
                <input required type="password" name="" id="" placeholder='Password' />
                <button>Login</button>
                <p>This is an error!</p>
                <span>Do you have an account? <Link style={{ textDecoration: "none" }} to='/login'>Login</Link></span>
            </form>
        </div>
  )
}

export default Register