import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [err, setError] = useState(null)

  const navigate = useNavigate(); 

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login")
    } catch (err) {
      setError(err.response.data)
    }
  }
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input required type="text" name="username" id="username" placeholder='UserName' onChange={handleChange} />
        <input required type="email" name="email" id="email" placeholder='Email' onChange={handleChange} />
        <input required type="password" name="password" id="password" placeholder='Password' onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Do you have an account? <Link className='link' to='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register