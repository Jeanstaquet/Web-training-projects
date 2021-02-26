const initalState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirect: "/",
    email: null,
    name: null,
    image: null
}
const reducer = (state = initalState, action) => {
    switch(action.type) {
        case "AUTH_START":
            return {
                ...state,
                loading: false,
                error: null
            }
        case "AUTH_SUCCESS":
            return {
                ...state,
                loading: false,
                token: action.token,
                userId: action.userId, 
                email: action.email,
                error: null
            }
        case "AUTH_ERROR":
            return {
                ...state,
                loading: false,
                error: action.message
            }
        case "AUTH_LOGOUT":
            return {
                ...state,
                loading: false,
                userId: null,
                token: null,
                email: null,
                image: null,
                name: null
            }

        default: 
            return {
                ...state
            }
    }
}

export default reducer