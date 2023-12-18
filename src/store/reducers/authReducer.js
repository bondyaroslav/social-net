const initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

const SET_USER_DATA = "SET_USER_DATA"
const SET_IS_AUTH = "SET_IS_AUTH"

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.data
            }

        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        default: return state
    }
}

export const setAuthUserDataAC = (email, userId, login) => ({type: SET_USER_DATA, data: {email, userId, login}})
export const setIsAuthAC = (payload) => ({type: SET_IS_AUTH, payload})

export default authReducer