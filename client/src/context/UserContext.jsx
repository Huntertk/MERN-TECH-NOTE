import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import axios from "axios";

const UserContext = createContext()
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

const initialState = {
    token:token,
    user:user? JSON.parse(user) :  null,
    isLoading: false,
}




const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)


  const addUserToLocalStorage = ({user, token}) => {
        localStorage.setItem( 'user', JSON.stringify(user))
        localStorage.setItem( 'token', token)
    }

      const removeUserToLocalStorage = () => {
        localStorage.removeItem( 'user')
        localStorage.removeItem( 'token')
    }
    return(
        <UserContext.Provider value={{
          ...state,
          dispatch,
          addUserToLocalStorage,
          removeUserToLocalStorage
        }}>
            {children}
        </UserContext.Provider>
    )
}


const useUserContext = () => useContext(UserContext)

export {useUserContext, UserContextProvider}