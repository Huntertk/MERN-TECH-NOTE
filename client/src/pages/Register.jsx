import React, { useEffect, useState } from 'react'
import '../styles/login.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useUserContext } from '../context/UserContext'
import toast from 'react-hot-toast'
import { LOGIN_USER_ERROR, REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS } from '../context/reducer'


const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {registerUser, user, isLoading, dispatch} = useUserContext()
  
  const navigate = useNavigate()
  
 
  const onSubmit = async (e) => {
    e.preventDefault();  

    dispatch({type: REGISTER_USER_BEGIN})
      try {
        const res = await axios.post('http://localhost:4000/api/v1/auth/register',{name, email, password})
        toast.success("User Created Successfully")
        navigate("/login")
        dispatch({type: REGISTER_USER_SUCCESS})
      } catch (error) {
        toast.error(error.response.data.message)
        console.log(error);
        dispatch({type: LOGIN_USER_ERROR})
      }

  }
  
  useEffect(() => {
    if(user){
      navigate("/")
    }
  },[user, navigate])
  return (
   <section className='loginMainContainer'>
        <form className="formMainContainer" onSubmit={onSubmit}>
            <h1>Register</h1>
            <input 
            type="text" 
            placeholder='John Doe...' 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input 
            type="email" 
            placeholder='john@doe.com' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input 
            type="password" 
            placeholder='xxxxxxxxxxx' 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' disabled={isLoading}>Register</button>
            <p>Already have account ? <Link to="/login">Login</Link></p>
        </form>

    </section>
  )
}

export default Register