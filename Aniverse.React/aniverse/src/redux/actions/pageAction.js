import * as actionTypes from "./actionTypes"
import axios from 'axios';
import { header, baseUrl } from "./axiosConfiguration"

export function getAllPageSuccess(data) {
    return { type: actionTypes.GET_ALL_PAGE_SUCCESS, payload: data }
}
export function getAllPageError(error) {
    return { type: actionTypes.GET_ALL_PAGE_ERROR, payload: error }
}
export function getAllPage(page, size) {
    return async function (dispatch) {
        let url = `${baseUrl}/page?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getAllPageSuccess(res.data));
            }).catch((error) => {
                dispatch(getAllPageError(error));
            })
    }
}

export function userPageFollowSuccess(data) {
    return { type: actionTypes.GET_USER_FOLLOW_PAGE_SUCCESS, payload: data }
}
export function userPageFollowError(error) {
    return { type: actionTypes.GET_USER_FOLLOW_PAGE_ERROR, payload: error }
}
export function userPageFollow(id) {
    return async function (dispatch) {
        let url = `${baseUrl}/user/${id}/follow/pages`
        axios.get(url, header)
            .then((res) => {
                dispatch(userPageFollowSuccess(res.data));
            }).catch((error) => {
                dispatch(userPageFollowError(error));
            })
    }
}

export function getPageLoading() {
    return { type: actionTypes.GET_PAGE_LOADING }
}
export function getPageSuccess(data) {
    return { type: actionTypes.GET_PAGE_SUCCESS, payload: data }
}
export function getPageError(error) {
    return { type: actionTypes.GET_PAGE_ERROR, payload: error }
}

export function getPage(pagename) {
    return async function (dispatch) {
        dispatch(getPageLoading());
        let url = `${baseUrl}/page/${pagename}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getPageSuccess(res.data));
            }).catch((error) => {
                dispatch(getPageError(error));
            })
    }
}

export function getPagePhotosSuccess(data) {
    return { type: actionTypes.GET_PAGE_PHOTOS_SUCCESS, payload: data }
}
export function getPagePhotosError(error) {
    return { type: actionTypes.GET_PAGE_PHOTOS_ERROR, payload: error }
}

export function getPagePhotos(pagename, page, size) {
    return async function (dispatch) {
        let url = `${baseUrl}/page/photos/${pagename}?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getPagePhotosSuccess(res.data));
            }).catch((error) => {
                dispatch(getPagePhotosError(error));
            })
    }
}

export function pageCreateLoading() {
    return { type: actionTypes.PAGE_CREATE_LOADING }
}
export function pgaeCreateSuccess() {
    return { type: actionTypes.PAGE_CREATE_SUCCESS }
}
export function pageCreateError(error) {
    return { type: actionTypes.PAGE_CREATE_ERROR, payload: error }
}

export function pageCreate(pageData) {
    return async function (dispatch) {
        dispatch(pageCreateLoading);
        let url = `${baseUrl}/page/create`;
        axios.post(url, pageData, header)
            .then((res) => {
                dispatch(pgaeCreateSuccess());
            }).catch((error) => {
                dispatch(pageCreateError(error));
            })
    }
}

export function getPageAllLoading() {
    return { type: actionTypes.GET_PAGE_POST_LOADING }
}
export function getPageAllSuccess(data) {
    return { type: actionTypes.GET_PAGE_POST_SUCCESS, payload: data }
}
export function getPageAllError(error) {
    return { type: actionTypes.GET_PAGE_ALL_POST_ERROR, payload: error }
}

export function getPageAll(page, size, pagename) {
    return async function (dispatch) {
        dispatch(getPageAllLoading());
        let url = `${baseUrl}/page/posts/${pagename}?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getPageAllSuccess(res.data));
            }).catch((error) => {
                dispatch(getPageAllError(error));
            })
    }
}

export function pageChangeProfileSuccess(data) {
    return { type: actionTypes.PAGE_PROFILE_CHANGE_SUCCESS, payload: data }
}
export function pageChangeProfileError(error) {
    return { type: actionTypes.PAGE_PROFILE_CHANGE_ERROR, payload: error }
}
export function pageChangeProfile(id, imageData, imgSrc) {
    return async function (dispatch) {
        let url = `${baseUrl}/page/profilPicture/${id}`
        axios.post(url, imageData, header)
            .then((res) => {
                dispatch(pageChangeProfileSuccess(imgSrc));
            }).catch((error) => {
                dispatch(getPageAllError(error));
            })
    }
}

export function pageChangeCoverSuccess(data) {
    return { type: actionTypes.PAGE_COVER_CHANGE_SUCCESS, payload: data }
}

export function pageChangeCoverError(error) {
    return { type: actionTypes.PAGE_COVER_CHANGE_ERROR, payload: error }
}
export function pageChangeCover(id, imageData, imgSrc) {
    return async function (dispatch) {
        let url = `${baseUrl}/page/coverPicture/${id}`
        axios.post(url, imageData, header)
            .then((res) => {
                dispatch(pageChangeCoverSuccess(imgSrc));
            }).catch((error) => {
                dispatch(pageChangeCoverError(error));
            })
    }
}

export function getPageFollowersUserSuccess(data) {
    return { type: actionTypes.GET_PAGE_FOLLOWERS_USERS_SUCCESS, payload: data }
}
export function getPageFollowersUserError(error) {
    return { type: actionTypes.GET_PAGE_FOLLOWERS_USERS_ERROR, payload: error }
}

export function getPageFollowersUser(id, page, size) {
    return async function (dispatch) {
        let url = `${baseUrl}/page/${id}/followers?page=${page}&size=${size}`
        axios.get(url, header)
            .then((res) => {
                dispatch(getPageFollowersUserSuccess(res.data));
            }).catch((error) => {
                dispatch(getPageFollowersUserError(error));
            })
    }
}


export function pageFollowSuccess(data) {
    return { type: actionTypes.PAGE_FOLLOW_SUCCESS, payload: data }
}
export function pageFollowError(error) {
    return { type: actionTypes.PAGE_FOLLOW_ERROR, payload: error }
}
export function pageFollow(id, userId) {
    return async function (dispatch) {
        let url = `${baseUrl}/page/follow/${id}`
        axios.post(url, {}, header)
            .then((res) => {
                dispatch(pageFollowSuccess(userId));
            }).catch((error) => {
                dispatch(pageFollowError(error));
            })
    }
}

export function pageUnfollowSuccess(data) {
    return { type: actionTypes.PAGE_UNFOLLOW_SUCCESS, payload: data }
}
export function pageUnfollowError(error) {
    return { type: actionTypes.PAGE_UNFOLLOW_ERROR, payload: error }
}
export function pageUnfollow(id, userId) {
    return async function (dispatch) {
        let url = `${baseUrl}/page/unfollow/${id}`
        axios.post(url, {}, header)
            .then((res) => {
                dispatch(pageUnfollowSuccess(userId));
            }).catch((error) => {
                dispatch(pageUnfollowError(error));
            })
    }
}

export function pageProfileUpdateSuccess(data) {
    return { type: actionTypes.PAGE_UPDATE_SUCCESS, payload: data }
}
export function pageProfileUpdateError(data) {
    return { type: actionTypes.PAGE_UPDATE_ERROR, payload: data }
}
export function pageProfileUpdate(id, formData) {
    return async function (dispatch) {
        let url = `${baseUrl}/page/update/${id}`
        axios.post(url, formData, header)
            .then((res) => {
                dispatch(pageProfileUpdateSuccess(formData));
            }).catch((error) => {
                dispatch(pageProfileUpdateError(error));
            })
    }
}
