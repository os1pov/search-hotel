export const SET_USER = "SET_USER"
export const DELETE_USER = "DELETE_USER"

const initState = {
    isAuth: false,
    userLogin: ""
}

export const authReducer = (state= initState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isAuth: true,
                userLogin: action.payload.userLogin
            }

        case DELETE_USER:
            return initState

        default:
            return state
    }
}

export const setUser = user => ({type: SET_USER, payload: user})

export const deleteUser = () => ({type: DELETE_USER})