const initalState = {
    token: null,
    userId: null,
    expirationTime: null,
    pseudo: {userId: ".",
             email: ".",
             pseudo: ".",
             password: ".",
             timestamp: "."},
    name: null,
    photo: null, 
    isAdmin: false,
    loading: false,
    error: null, 
    isNew: null,
    roomName: null, 
    contact: null,
    fail: false,
    contactDetails: null
}

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case "AUTH_START":
            return {
                ...state,
                loading: true,
                error: null
            }

        case "AUTH_SUCCESS": 
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                expirationTime: action.expirationTime,
                loading: false,
            }
        
        case "AUTH_FAIL":
            return {
                ...state,
                error: action.message,
                fail: true,
                loading: false
            }
        case "AUTH_RESET":
            return {
                ...state,
                fail: false,
                error: null
            }
        case "LOGOUT":
            return {
                ...state,
                token: null,
                userId: null,
                expirationTime: null,
            }
        case "LOGIN_METHOD":
            return {
                ...state,
                isNew: false
            }
        case "REGISTER_METHOD":
            return {
                ...state,
                isNew: true
            }
        case "SIGN_WITH_GOOGLE":
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                photo: action.photo,
                loading: false,
                expirationTime: 60,
                isNew: action.isNew, 
                email: action.email
            }
        case "ROOM_NAME_HANDLER":
            return {
                ...state,
                roomName: action.roomName,
                contact: action.contact, 
                contactDetails: action.details
            }
        case "ROOM_DELETE_HANDLER": 
            return {
                ...state,
                roomName: null,
                contact: null,
                contactDetails: null
            }
        case "CONTACT_DATA":
            return {
                ...state,
                contactDetails: action.details
            }
        case "PSEUDO_HANDLER":
            return {
                ...state,
                pseudo: action.pseudo
            }
        case "LOGOUT_HANDLER":
            return {
                ...state,
                token: null,
                userId: null,
                expirationTime: null,
                pseudo: {userId: ".",
                         email: ".",
                         pseudo: ".",
                         password: ".",
                         timestamp: "."},
                name: null,
                photo: null, 
                isAdmin: false,
                loading: false,
                error: null, 
                isNew: null,
                roomName: null, 
                contact: null,
                fail: false,
                contactDetails: null
            }
        default: 
            return {
                ...state
            }
    }
}

export default reducer;