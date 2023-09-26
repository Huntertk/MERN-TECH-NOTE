
export const REGISTER_USER_BEGIN = 'REGISTER_USER_BEGIN'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR'

export const LOGIN_USER_BEGIN = 'LOGIN_USER_BEGIN'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'

export const LOGOUT_USER = 'LOGOUT_USER'




export const reducer = (state, action) => {
    switch (action.type) {
        case REGISTER_USER_BEGIN:
            return{
                ...state,
                isLoading: true
            }
        case REGISTER_USER_SUCCESS:
        return{
            ...state,
            isLoading: false,
        }
          case REGISTER_USER_ERROR:
        return{
            ...state,
            isLoading: false,
        }
        case LOGIN_USER_BEGIN:
            return{
                ...state,
                isLoading: true
            }
        case LOGIN_USER_SUCCESS:
        return{
            ...state,
            isLoading: false,
            user: action.payload.user
        }    
        case LOGIN_USER_ERROR:
        return{
            ...state,
            isLoading: false,
        }

        case LOGOUT_USER:
            return{
                ...state,
                token:null,
                user: null,
                isLoading: false
            }
        default:
           return state
    }
}