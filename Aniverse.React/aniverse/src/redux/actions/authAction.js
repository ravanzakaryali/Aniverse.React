import axios from 'axios'
import * as actionTypes from './actionTypes'

export function registerSuccess(authUser) {
    return { type: actionTypes.POST_REGISTER_SUCCESS, payload: authUser }
}
export function registerError(error) {
    return { type: actionTypes.POST_REGISTER_SUCCESS, payload: error }
}
export function loginSuccess(authUser) {
    return { type: actionTypes.POST_LOGIN_SUCCESS, payload: authUser }
}
export function loginError(error) {
    return { type: actionTypes.POST_REGISTER_FAIL, payload: error }
}

export function authRegister(registerState) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/authenticate/register`;
        axios.post(url, registerState, {
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(registerSuccess(res.data));
        }).catch((error) => {
            console.log(error);
        })
    }
}

export function authLogin(loginState) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/authenticate/login`;
        axios.post(url, loginState, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("loginUser", JSON.stringify({
                id: res.data.user.id,
                username: res.data.user.username,
                email: res.data.user.email
            }))
            dispatch(loginSuccess(res.data))
        }).catch((error) => {
            console.log(error);
        })
    }
}

export const loadUser = () => {
    return (dispatch, getState) => {
        const token = getState().authReducer.token
        if (token != null) {
            dispatch({
                type: actionTypes.USER_LOADDED,
                payload: token
            })
        } else {
            return null;
        };
    }
}
