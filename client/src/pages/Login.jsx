import React, { useEffect, useState } from 'react'
import '../styles/login.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useUserContext } from '../context/UserContext'
import { LOGIN_USER_BEGIN, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS } from '../context/reducer'
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {
    user, 
    isLoading, 
    dispatch, 
    addUserToLocalStorage
  } = useUserContext()

  const navigate = useNavigate()

  const handleLoginUser = async (e) => {
      e.preventDefault()
       dispatch({type: LOGIN_USER_BEGIN})
      try {
       const res = await axios.post('http://localhost:4000/api/v1/auth/login',{email, password})
       console.log(res);
       const user = res.data.user
       const token = res.data.token
       dispatch({type: LOGIN_USER_SUCCESS, payload:{user}})
       addUserToLocalStorage({user, token})
       toast.success('User Login Successfully');
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data.message);
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
        <form className="formMainContainer" onSubmit={handleLoginUser}>
            <h1>Login</h1>
            <input 
            type="email" 
            placeholder='john@doe.com' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            />
            <input 
            type="password" 
            placeholder='xxxxxxx' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            />
            <button type='submit' disabled={isLoading}>Login</button>
            <p>Don't have account ? <Link to="/register">Register</Link></p>
        </form>

    </section>
  )
}

export default Login