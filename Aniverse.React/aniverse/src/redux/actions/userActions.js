import axios from "axios"
import * as actionTypes from "./actionTypes"
import { header, baseUrl, headerPicture } from "./axiosConfiguration"


export function getSearchUsersSuccess(data) {
    return { type: actionTypes.GET_SEARCH_SUCCESS, payload: data }
}
export function getSearchUsersError(error) {
    return { type: actionTypes.GET_SEARCH_ERROR, payload: error }
}
export function getUsersSearch(search) {
    return async function (dispatch) {
        let url = `${baseUrl}/user/search?search=${search}`
        axios.get(url, header)
            .then((res) => {
                dispatch(getSearchUsersSuccess(res.data));
            }).catch((error) => {
                dispatch(getSearchUsersError(error));
            })
    }
}

export function getAllUsersLoading(users) {
    return { type: actionTypes.GET_All_USERS_LOADING, payload: users }
}
export function getAllUsersSuccess(users) {
    return { type: actionTypes.GET_All_USERS_SUCCESS, payload: users }
}
export function getAllUsersError(error) {
    return { type: actionTypes.GET_All_USERS_ERROR, payload: error }
}
export function getAllUsers() {
    return async function (dispatch) {
        dispatch(getAllUsersLoading())
        let url = `${baseUrl}/user`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getAllUsersSuccess(res.data));
            }).catch((error) => {
                dispatch(getAllUsersError(error));
            })
    }
}

export function getUserLoading() {
    return { type: actionTypes.GET_USER_LOADING }
}
export function getUserSuccess(user) {
    return { type: actionTypes.GET_USER_SUCCESS, payload: user }
}
export function getUserError(error) {
    return { type: actionTypes.GET_USER_ERROR, payload: error }
}
export function getUser(id) {
    return async function (dispatch) {
        dispatch(getUserLoading());
        let url = `${baseUrl}/user/${id}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getUserSuccess(res.data));
            }).catch((error) => {
                dispatch(getUserError(error));
            })
    }
}

export function getUserPhotosSuccess(photos) {
    return { type: actionTypes.GET_USER_PHOTOS_SUCCESS, payload: photos }
}
export function getUserPhotosError(photos) {
    return { type: actionTypes.GET_USER_PHOTOS_ERROR, payload: photos }
}
export function getUserPhotos(username, page, size) {
    return async function (dispatch) {
        let url = `${baseUrl}/user/photos/${username}?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getUserPhotosSuccess(res.data));
            }).catch((error) => {
                dispatch(getUserPhotosError(error));
            })
    }
}
export function getOnlyUserPhotosSuccess(photos) {
    return { type: actionTypes.GET_ONLY_USER_PHOTOS_SUCCESS, payload: photos }
}
export function getOnlyUserPhotosError(error) {
    return { type: actionTypes.GET_ONLY_USER_PHOTOS_ERROR, payload: error }
}
export function getOnlyUserPhotos(username, page, size) {
    return async function (dispatch) {
        let url = `${baseUrl}/user/only/photos/${username}?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getOnlyUserPhotosSuccess(res.data));
            }).catch((error) => {
                dispatch(getOnlyUserPhotosError(error));
            })
    }
}
export function getBlockUsersSuccess(users) {
    return { type: actionTypes.GET_BLOCK_USERS_SUCCESS, payload: users }
}
export function getBlockUsersError(error) {
    return { type: actionTypes.GET_BLOCK_USERS_ERROR, payload: error }
}
export function getBlcokUsers() {
    return async function (dispatch) {
        let url = `${baseUrl}/user/block`
        axios.get(url, header)
            .then((res) => {
                dispatch(getBlockUsersSuccess(res.data));
            }).catch((error) => {
                dispatch(getBlockUsersError(error))
            })
    }
}

export function getLoginUserSuccess(loginUser) {
    return { type: actionTypes.GET_USER_LOGIN_SUCCESS, payload: loginUser }
}
export function getLoginUserError(error) {
    return { type: actionTypes.GET_USER_LOGIN_ERROR, payload: error }
}
export function getLoginUser() {
    return async function (dispatch) {
        let url = `${baseUrl}/user/login`
        axios.get(url, header)
            .then((res) => {
                dispatch(getLoginUserSuccess(res.data));
            }).catch((error) => {
                dispatch(getLoginUserError(error));
            })
    }
}

export function getUserFollowsAnimalSuccess(animals) {
    return { type: actionTypes.GET_USER_FOLLOWS_ANIMAL_SUCCESS, payload: animals }
}
export function getUserFollowsAnimalError(error) {
    return { type: actionTypes.GET_USER_FOLLOWS_ANIMAL_ERROR, payload: error }
}
export function getUserFollowsAnimal(username) {
    return async function (dispatch) {
        let url = `${baseUrl}/user/${username}/follows/animal`
        axios.get(url, header)
            .then((res) => {
                dispatch(getUserFollowsAnimalSuccess(res.data));
            }).catch((error) => {
                dispatch(getUserFollowsAnimalError(error));
            })
    }
}

export function changeProfileSuccess(data) {
    return { type: actionTypes.PROFILE_CREATE_SUCCESS, payload: data }
}
export function changeProfileError(error) {
    return { type: actionTypes.PROFILE_CREATE_ERROR, payload: error }
}
export function chagePorfile(imageData, imageSrc) {
    return async function (dispatch) {
        let url = `${baseUrl}/user/profile`;
        axios.post(url, imageData, headerPicture)
            .then((res) => {
                dispatch(changeProfileSuccess(imageSrc));
            }).catch((error) => {
                dispatch(changeProfileError(error));
            })
    }
}

export function changeCoverSuccess(data) {
    return { type: actionTypes.COVER_CREATE_SUCCESS, payload: data }
}
export function changeCoverError(error) {
    return { type: actionTypes.COVER_CREATE_ERROR, payload: error }
}
export function chageCover(imageData, imageSrc) {
    return async function (dispatch) {
        let url = `${baseUrl}/user/cover`;
        axios.post(url, imageData, header)
            .then((res) => {
                dispatch(changeCoverSuccess(imageSrc));
            }).catch((error) => {
                dispatch(changeCoverError(error));
            })
    }
}

export function changeBioLoading() {
    return { type: actionTypes.BIO_CHANGE_LOADING }
}
export function changeBioSuccess(data) {
    return { type: actionTypes.BIO_CHANGE_SUCCESS, payload: data }
}
export function changeBioError(error) {
    return { type: actionTypes.BIO_CHANGE_ERROR, payload: error }
}
export function changeBio(bio) {
    return async function (dispatch) {
        dispatch(changeBioLoading());
        let url = `${actionTypes.baseUrl}/user/bio`;
        axios.patch(url, bio, header)
            .then((res) => {
                dispatch(changeBioSuccess(bio[0].value));
            }).catch((error) => {
                dispatch(changeBioError(error));
            })
    }
}

export function getUserPagesLoading() {
    return { type: actionTypes.GET_USER_PAGES_LOADING }
}
export function getUserPagesSuccess(data) {
    return { type: actionTypes.GET_USER_PAGES_SUCCESS, payload: data }
}
export function getUserPagesError(error) {
    return { type: actionTypes.GET_USER_PAGES_ERROR, payload: error }
}

export function getUserPages(id) {
    return async function (dispatch) {
        dispatch(changeBioLoading());
        let url = `${actionTypes.baseUrl}/user/${id}/pages`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getUserPagesSuccess(res.data));
            }).catch((error) => {
                dispatch(getUserPagesError(error));
            })
    }
}