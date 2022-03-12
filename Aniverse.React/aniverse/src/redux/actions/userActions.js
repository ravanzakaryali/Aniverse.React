import axios from "axios"
import initialState from "../reducers/initialState"
import * as actionTypes from "./actionTypes"
import { getAnimalFollowSuccess } from "./animalAction"

export function getUsersSuccess(users) {
    return { type: actionTypes.GET_USERS_SUCCESS, payload: users }
}
export function getUserNavbarSuccess(userNavbar) {
    return { type: actionTypes.GET_USER_NAVBAR_SUCCESS, payload: userNavbar }
}
export function getUserSuccess(user) {
    return { type: actionTypes.GET_USER_SUCCESS, payload: user }
}
export function getUserFriendSuccess(userFriend) {
    return { type: actionTypes.GET_USER_FRIEND_SUCCESS, payload: userFriend }
}
export function getFriendRequestSuccess(userFriend) {
    return { type: actionTypes.GET_USER_FRIEND_REQUEST_SUCCESS, payload: userFriend }
}
export function postFriendConfirmSuccess() {
    return { type: actionTypes.POST_FRIEND_CONFIRM_SUCCESS }
}
export function changeProfileSuccess() {
    return { type: actionTypes.PROFILE_CREATE_SUCCESS }
}
export function getUserPhotosSuccess(photos) {
    return { type: actionTypes.GET_PHOTOS_SUCCESS, payload: photos }
}
export function getBlockUsersSuccess(users) {
    return { type: actionTypes.GET_BLOCK_USERS_SUCCESS, payload: users }
}
export function getLoginUserSuccess(loginUser) {
    return { type: actionTypes.GET_USER_LOGIN_SUCCESS, payload: loginUser }
}
export function getUserFollowsAnimalSuccess(animals) {
    return { type: actionTypes.GET_USER_FOLLOWS_ANIMAL, payload: animals }
}
export function getLoginUser() {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/user/login`
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getLoginUserSuccess(res.data));
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}

export function getUsers() {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/user`;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getUsersSuccess(res.data));
        }).catch((error) => {
            console.log(error);
        })
    }
}
export function getUser(id) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/user/${id}`;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getUserSuccess(res.data));
        }).catch((error) => {
            console.log(error);
        })
    }
}
export function getUserNavbar(id) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/user/${id}`;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getUserNavbarSuccess(res.data));
        }).catch((error) => {
            console.log(error);
        });
    }
}
export function getUserFriend(username) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/friend/${username}`;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getUserFriendSuccess(res.data));
        }).catch((error) => {
            console.log(error.response.data);
        });
    }
}
export function getFriendRequest() {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/friend/request`;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getFriendRequestSuccess(res.data));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function postFriendConfirm(friendConfirm) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/friend/requestconfirm`;
        axios.put(url, friendConfirm, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(postFriendConfirmSuccess());
        }).catch((error) => {
            console.log(error);
        })
    }
}
export function chagePorfile(imageData) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/user/profile`;
        axios.post(url, imageData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': '*/*',
            },
        }).then((res) => {
            changeProfileSuccess()
        }).catch((error) => {
            console.log(error);
        })
    }
}
export function chageCover(imageData) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/user/cover`;
        axios.post(url, imageData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': '*/*',
            },
        }).then((res) => {
            changeProfileSuccess()
        }).catch((error) => {
            console.log(error);
        })
    }
}
export function getUserPhotos(username, page, size) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/user/photos/${username}?page=${page}&size=${size}`;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
            .then((res) => {
                dispatch(getUserPhotosSuccess(res.data));
            }).catch((error) => {
                console.log(error);
            })
    }
}
export function getBlcokUsers() {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/user/block`
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getBlockUsersSuccess(res.data));
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}

export function getUserFollowsAnimal(username) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/user/${username}/follows/animal`
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getUserFollowsAnimalSuccess(res.data))
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}