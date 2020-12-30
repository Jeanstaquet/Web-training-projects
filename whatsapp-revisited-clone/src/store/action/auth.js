import axios from "axios";
import db, {auth, provider} from "../../firebase";
import firebase from "firebase";

export const authStart = () => {
    return {
        type: "AUTH_START"
    }
}

export const authSuccess = (token, userId, pseudo, expirationTime) => {
    return {
        type: "AUTH_SUCCESS",
        token: token,
        userId: userId,
        pseudo: pseudo,
        expirationTime: expirationTime
    }
}

export const authFail = (message) => {
    return {
        type: "AUTH_FAIL",
        message: message
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}

export const authReset = () => {
    return {
        type: "AUTH_RESET"
    }
}

export const authEP = (email, password, pseudo, isRegister) => {
    return dispatch => {
        dispatch(authStart());
        const data = {
            email: email,
            password: password, 
            pseudo: pseudo
        }
        let url = ""
        if(isRegister) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmXjwaVbRraK5e8ZLQu-P5d-NuO85ramQ";

        }
        
        if(!isRegister) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCmXjwaVbRraK5e8ZLQu-P5d-NuO85ramQ"
        }

        axios.post(url, data)
            .then(res => {
                if(isRegister) {
                    db.collection("Users").doc(res.data.localId).set({
                        userId: res.data.localId,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        email: email,
                        pseudo: pseudo,
                        password: password
                    });
                }
                dispatch(authSuccess(res.data.idToken, res.data.localId, pseudo, 60))
            })
            .catch(error => {
                dispatch(authFail(error.response.data.error.message))
                setTimeout(() => {
                    dispatch(authReset())
                }, 5000);
        })
    }
}

// export const loginMethod = () => {
//     return {
//         type: "LOGIN_METHOD"
//     }
// }

// export const registerMethod = () => {
//     return {
//         type: "REGISTER_METHOD"
//     }
// }

export const googleAuth = (token, userId, photo, isNew, email) => {
    return {
        type: "SIGN_WITH_GOOGLE",
        token: token,
        userId: userId,
        photo: photo,
        isNew: isNew,
        email: email
    }
}

export const signWithGoogle = () => {
    return dispatch => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch(googleAuth(result.credential.idToken, 
                                result.additionalUserInfo.profile.id, 
                                result.additionalUserInfo.profile.picture, 
                                result.additionalUserInfo.isNewUser,
                                result.additionalUserInfo.profile.email));
            if(result.additionalUserInfo.isNew) {
                db.collection("Users").add({
                    userId: result.additionalUserInfo.profile.id,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    email: result.additionalUserInfo.profile.email,
                    password: "googleConnection"
                });
            }
            
        })
    }
}

export const roomNameHandler = (roomName, contact, details) => {
    return {
        type: "ROOM_NAME_HANDLER",
        roomName: roomName,
        contact: contact,
        details: details
    }
}

export const contactDetails = (details) => {
    return {
        type: "CONTACT_DATA",
        details: details
    }
}