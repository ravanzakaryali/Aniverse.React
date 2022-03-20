import * as actionTypes from "./actionTypes"
import axios from "axios"
import { header, baseUrl, headerPicture } from "./axiosConfiguration"

export function getFriendAllPostSuccess(animals) {
    return { type: actionTypes.GET_FRIEND_ALL_POSTS_SUCCESS, payload: animals }
}
export function getFriendAllPostError(error) {
    return { type: actionTypes.GET_FRIEND_ALL_POSTS_ERROR, payload: error }
}
export function getFriendAllPost(page, size) {
    return async function (dispatch) {
        let url = `${baseUrl}/post/friend?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getFriendAllPostSuccess(res.data));
            }).catch((error) => {
                dispatch(getFriendAllPostError(error));
            })
    }
}

export function getAllPostSuccess(post) {
    return { type: actionTypes.GET_ALL_POSTS_SUCCESS, payload: post }
}
export function getAllPostError(error) {
    return { type: actionTypes.GET_ALL_POSTS_ERROR, payload: error }
}
export function getAllPosts(page, size) {
    return async function (dispatch) {
        let url = `${baseUrl}/post?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getAllPostSuccess(res.data));
            }).catch((error) => {
                dispatch(getAllPostError(error));
            })
    }
}

export function getAnimalPostSuccess(animalPost) {
    return { type: actionTypes.GET_ANIMAL_POST_SUCCESS, payload: animalPost }
}
export function getAnimalPostError(error) {
    return { type: actionTypes.GET_ANIMAL_POST_ERROR, payload: error }
}
export function getAnimalPosts(animalname) {
    return function (dispatch) {
        let url = `${baseUrl}/animal/post/${animalname}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getAnimalPostSuccess(res.data));
            }).catch((error) => {
                dispatch(getAnimalPostError(error));
            })
    }
}

export function getUserPostsSuccess(data) {
    return { type: actionTypes.GET_USER_POST_SUCCESS, payload: data }
}
export function getUserPostsError(error) {
    return { type: actionTypes.GET_USER_POST_ERROR, payload: error }
}
export function getPost(username) {
    return async function (dispatch) {
        let url = `${baseUrl}/post/${username}`;
        axios.get(url, header).then((res) => {
            dispatch(getUserPostsSuccess(res.data));
        }).catch((error) => {
            dispatch(getUserPostsError(error));
        })
    }
}

export function postCreateSuccess(data) {
    return { type: actionTypes.POST_CERATE_SUCCESS, payload: data }
}
export function postCreateError(error) {
    return { type: actionTypes.POST_CERATE_ERROR, payload: error }
}
export function createPost(postData) {
    return async function (dispatch) {
        let url = `${baseUrl}/post`;
        axios.post(url, postData, headerPicture)
            .then((res) => {
                dispatch(postCreateSuccess(res));
            }).catch((error) => {
                dispatch(postCreateError(error));
            })
    }
}

export function likePostSuccess(data) {
    return { type: actionTypes.LIKE_POST_SUCCESS, payload: data }
}
export function likePostError(error) {
    return { type: actionTypes.LIKE_POST_SUCCESS, payload: error }
}
export function likePost(likeData) {
    return async function (dispatch) {
        let url = `${baseUrl}/post/like`;
        axios.post(url, likeData, header)
            .then((res) => {
                dispatch(likePostSuccess(res));
            }).catch((error) => {
                dispatch(likePostError(error));
            })
    }
}

export function postSaveSuccess() {
    return { type: actionTypes.POST_SAVE_SUCCESS }
}
export function postSaveError() {
    return { type: actionTypes.POST_SAVE_ERROR }
}
export function postSave(postSave) {
    return function (dispatch) {
        let url = `${baseUrl}/post/save`
        axios.post(url, postSave, header)
            .then((res) => {
                dispatch(postSaveSuccess(res));
            }).catch((error) => {
                dispatch(postSaveError(error));
            })
    }
}

export function postDeleteSuccess(data) {
    return { type: actionTypes.POST_DELETE_SUCCESS, payload: data }
}
export function postDeleteError(error) {
    return { type: actionTypes.POST_DELETE_ERROR, payload: error }
}
export function postDelete(id) {
    return function (dispatch) {
        let url = `${baseUrl}/post/delete/${id}`;
        axios.patch(url, {}, header)
            .then((res) => {
                dispatch(postDeleteSuccess(res));
            }).catch((error) => {
                dispatch(postDeleteError(error));
            })
    }
}
export function postArchiveSuccess(data) {
    return { type: actionTypes.POST_ARCHIVE_SUCCESS, payload: data }
}
export function postArchiveError(error) {
    return { type: actionTypes.POST_ARCHIVE_ERROR, payload: error }
}
export function postArchive(id) {
    return function (dispatch) {
        let url = `${baseUrl}/post/archive/${id}`;
        axios.patch(url, {}, header)
            .then((res) => {
                dispatch(postArchiveSuccess(res));
            }).catch((error) => {
                dispatch(postArchiveError(error));
            })
    }
}
export function getArchivePostSuccess(data) {
    return { type: actionTypes.GET_POST_ARCHIVE_SUCCESS, payload: data }
}
export function getArchivePostError(error) {
    return { type: actionTypes.GET_POST_ARCHIVE_ERROR, payload: error }
}
export function getArchivePost(page, size) {
    return function (dispatch) {
        let url = `${baseUrl}/post/archive?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getArchivePostSuccess(res.data));
            }).catch((error) => {
                dispatch(getArchivePostError(error));
            })
    }
}

export function getRecyclePostSuccess(data) {
    return { type: actionTypes.GET_POST_RECYCLE_SUCCESS, payload: data }
}
export function getRecyclePostError(error) {
    return { type: actionTypes.GET_POST_RECYCLE_ERROR, payload: error }
}
export function getRecyclePost(page, size) {
    return function (dispatch) {
        let url = `${baseUrl}/post/recycle?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getRecyclePostSuccess(res.data));
            }).catch((error) => {
                dispatch(getRecyclePostError(error));
            })
    }
}

export function getSavePostSuccess(data) {
    return { type: actionTypes.GET_POST_SAVE_SUCCESS, payload: data }
}
export function getSavePostError(error) {
    return { type: actionTypes.GET_POST_SAVE_ERROR, payload: error }
}
export function getSavePost(page, size) {
    return function (dispatch) {
        let url = `${baseUrl}/post/save?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getSavePostSuccess(res.data));
            }).catch((error) => {
                dispatch(getSavePostError(error));
            })
    }
}