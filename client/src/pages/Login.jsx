import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div className="auth">
            <h1>Login</h1>
            <form action="">
                <input required type="text" name="" id="" placeholder='UserName' />
                <input required type="password" name="" id="" placeholder='Password' />
                <button>Login</button>
                <p>This is an error!</p>
                <span>Dont't you have an account? <Link style={{ textDecoration: "none" }} to='/register'>Register</Link></span>
            </form>
        </div>
    )
}

export default Login