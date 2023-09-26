import React from 'react'
import '../styles/header.scss'
import { Link } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'
import toast from 'react-hot-toast'
import { LOGOUT_USER } from '../context/reducer'

const Header = () => {
  const {user, dispatch, removeUserToLocalStorage} = useUserContext()
  console.log(user);

  const handleUserLogout = () => {
    dispatch({type: LOGOUT_USER})
    toast.success("User Logout Successfully")
    removeUserToLocalStorage()
  }
  return ( 
    <header>
        <nav>
            <Link to="/">Notes</Link>
            <ul>
              {user ? 
                <>
                  <button>@{user?.name}</button>
                  <button onClick={handleUserLogout}>Logout</button>
                </> : <>
                  <Link to="/login">Login</Link>  
                  <Link to="/contact">Contact Us</Link>
                </>
              }
            </ul>
        </nav>
    </header>
  )
}

export default Header