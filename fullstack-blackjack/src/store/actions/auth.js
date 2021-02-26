import axios from "axios";

export const authStart = () => {
    return {
        type: "AUTH_START"
    }
}

export const authSuccess = (userId, token, email) => {
    return {
        type: "AUTH_SUCCESS",
        userId: userId,
        token: token,
        email: email
    }
}

export const authFail = (message) => {
    return {
        type: "AUTH_ERROR",
        error: message
    }
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmhvYiZbaWvXzf0poLYLmSW__qk1G63V8"
        const authData = {
            email: email,
            password: password,
            returnSecureToken : true
        }
        axios.post(url, authData)
                    .then(response => {
                        dispatch(authSuccess(response.data.localId, response.data.idToken, response.data.email))
                        console.log(response)
                    })
                    .catch(error => {
                        dispatch(authFail(error.response.data.error))
                    })
    }
}

export const logout = () => {
    return {
        type: "AUTH_LOGOUT"
    }
}
