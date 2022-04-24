import axios from 'axios';
import * as actionTypes from './actionTypes';
import { header, baseUrl } from "./axiosConfiguration"


export function addFriendSuccess(data) {
    return { type: actionTypes.ADD_FRIEND_SUCCESS, payload: data }
}
export function addFriendError(error) {
    return { type: actionTypes.ADD_FRIEND_ERROR, payload: error }
}
export function addFriendLoading(error) {
    return { type: actionTypes.ADD_FRIEND_LOADING, payload: error }
}
export function addFriend(id) {
    return async function (dispatch) {
        dispatch(addFriendLoading())
        let url = `${baseUrl}/friend/add/${id}`;
        axios.post(url, {}, header).then((res) => {
            dispatch(addFriendSuccess(id));
        }).catch((error) => {
            dispatch(addFriendError(error));
        })
    }
}

export function unFriendSuccess(data) {
    return { type: actionTypes.UN_FRIEND_SUCCESS, payload: data }
}
export function unFriendError(error) {
    return { type: actionTypes.UN_FRIEND_ERROR, payload: error }
}
export function unFriend(id) {
    return async function (dispatch) {
        let url = `${baseUrl}/friend/delete/${id}`;
        axios.post(url, {}, header)
            .then((res) => {
                dispatch(unFriendSuccess(id));
            }).catch((error) => {
                dispatch(unFriendError(error));
            })
    }
}

export function declinedFriendSuccess(data) {
    return { type: actionTypes.DECLINED_FRIEND_SUCCESS, payload: data }
}
export function declinedFriendError(error) {
    return { type: actionTypes.DECLINED_FRIEND_ERROR, payload: error }
}
export function declinedFriend(id) {
    return async function (dispatch) {
        let url = `${baseUrl}/friend/delete/${id}`;
        axios.post(url, {}, header)
            .then((res) => {
                dispatch(declinedFriendSuccess(id));
            }).catch((error) => {
                dispatch(declinedFriendError(error));
            })
    }
}

export function blockFriendSuccess(data) {
    return { type: actionTypes.BLOCK_FRIEND_SUCCESS, payload: data }
}
export function blockFriendError(error) {
    return { type: actionTypes.BLOCK_FRIEND_ERROR, payload: error }
}
export function blockFriend(id) {
    return async function (dispatch) {
        let url = `${baseUrl}/friend/block/${id}`;
        axios.post(url, {}, header).then((res) => {
            dispatch(blockFriendSuccess(id));
        }).catch((error) => {
            dispatch(blockFriendError(error));
        })
    }
}

export function confirmFriendSuccess(data) {
    return { type: actionTypes.CONFIRM_FRIEND_SUCCESS, payload: data }
}
export function confirmFriendError(error) {
    return { type: actionTypes.CONFIRM_FRIEND_ERROR, payload: error }
}
export function confirmFriend(id) {
    return async function (dispatch) {
        let url = `${baseUrl}/friend/confirm/${id}`;
        axios.post(url, {}, header).then((res) => {
            dispatch(confirmFriendSuccess(id));
        }).catch((error) => {
            dispatch(confirmFriendError(error));
        })
    }
}

export function getAllFriendLoading() {
    return { type: actionTypes.GET_ALL_FRIENDS_LOADING }
}
export function getAllFriendSuccess(data) {
    return { type: actionTypes.GET_ALL_FRIENDS_SUCCESS, payload: data }
}
export function getAllFriendError(error) {
    return { type: actionTypes.GET_ALL_FRIENDS_ERROR, payload: error }
}
export function getAllFriends(username, page, size) {
    return async function (dispatch) {
        dispatch(getAllFriendLoading())
        let url = `${baseUrl}/friend/${username}?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getAllFriendSuccess(res.data));
            }).catch((error) => {
                dispatch(getAllFriendError(error));
            });
    }
}

export function getFriendRequestLoading() {
    return { type: actionTypes.GET_FRIEND_REQUEST_LOADING }
}
export function getFriendRequestSuccess(data) {
    return { type: actionTypes.GET_FRIEND_REQUEST_SUCCESS, payload: data }
}
export function getFriendRequestError(data) {
    return { type: actionTypes.GET_FRIEND_REQUEST_ERROR, payload: data }
}
export function getFriendRequest(page, size) {
    return async function (dispatch) {
        dispatch(getFriendRequestLoading())
        let url = `${baseUrl}/friend/request?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getFriendRequestSuccess(res.data));
            }).catch((error) => {
                dispatch(getFriendRequestError(error));
            });
    }
}