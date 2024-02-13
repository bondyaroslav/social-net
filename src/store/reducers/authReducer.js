const initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

const SET_USER_EMAIL = "SET_USER_EMAIL"
const SET_USER_ID = "SET_USER_ID"
const SET_USER_LOGIN = "SET_USER_LOGIN"
const SET_IS_AUTH = "SET_IS_AUTH"

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_EMAIL:
            return  {
                ...state, email: action.email
            }

        case SET_USER_ID:
            return  {
                ...state, id: action.id
            }

        case SET_USER_LOGIN:
            return  {
                ...state, login: action.login
            }

        case SET_IS_AUTH:
            return {
                ...state, isAuth: action.payload
            }
        default: return state
    }
}

export const setUserEmailAC = (email) => ({type: SET_USER_EMAIL, email})
export const setUserIdAC = (id) => ({type: SET_USER_ID, id})
export const setUserLoginAC = (login) => ({type: SET_USER_LOGIN, login})
export const setIsAuthAC = (payload) => ({type: SET_IS_AUTH, payload})

export default authReducer