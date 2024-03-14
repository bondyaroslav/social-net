const initialState = {
    news: null
}

const SET_NEWS = "SET_NEWS"

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: action.news
            }
        default: return state
    }
}

export const setNewsAC = (news) => ({type: SET_NEWS, news})

export default newsReducer