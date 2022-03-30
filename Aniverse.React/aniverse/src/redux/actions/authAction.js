import axios from 'axios'
import * as actionTypes from './actionTypes'
import { header, baseUrl, headerRegister } from './axiosConfiguration';

export function registerLoading() {
    return { type: actionTypes.USER_REGISTER_LOADING }
}
export function registerSuccess(data) {
    return { type: actionTypes.USER_REGISTER_SUCCESS, payload: data }
}
export function registerError(error) {
    return { type: actionTypes.USER_REGISTER_ERROR, payload: error }
}

export function authRegister(registerState) {
    return async function (dispatch) {
        dispatch(registerLoading());
        let url = `${baseUrl}/authenticate/register`;
        axios.post(url, registerState, headerRegister)
            .then((res) => {
                dispatch(registerSuccess(res.data));
            }).catch((error) => {
                console.log(error);
                dispatch(registerError(error));
            })
    }
}

export function loginSuccess(data) {
    return { type: actionTypes.USER_LOGIN_SUCCESS, payload: data }
}
export function loginError(error) {
    return { type: actionTypes.USER_LOGIN_ERROR, payload: error }
}
export function authLogin(loginState) {
    return async function (dispatch) {
        let url = `${baseUrl}/authenticate/login`;
        axios.post(url, loginState, header)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("loginUser", JSON.stringify({
                    id: res.data.user.id,
                    username: res.data.user.username,
                    email: res.data.user.email
                }))
                dispatch(loginSuccess(res.data));
            }).catch((error) => {
                dispatch(loginError(error));
            })
    }
}
export function logOutSuccess() {
    return { type: actionTypes.USER_LOGOUT }
}
export const logOut = () => {
    return async function (dispatch) {
        localStorage.clear();
        window.location.reload();
        dispatch(logOutSuccess())
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
