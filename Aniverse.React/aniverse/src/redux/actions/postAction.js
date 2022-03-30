import * as actionTypes from "./actionTypes"
import axios from "axios"
import { header, baseUrl, headerPicture } from "./axiosConfiguration"

export function getFriendAllPostSuccess(animals) {
    return { type: actionTypes.GET_FRIEND_ALL_POSTS_SUCCESS, payload: animals }
}
export function getFriendAllPostError(error) {
    return { type: actionTypes.GET_FRIEND_ALL_POSTS_ERROR, payload: error }
}
export function getFriendAllPostLoading() {
    return { type: actionTypes.GET_FRIEND_ALL_POSTS_LOADING }
}
export function getFriendAllPost(page, size) {
    return async function (dispatch) {
        dispatch(getFriendAllPostLoading())
        let url = `${baseUrl}/post/friend?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getFriendAllPostSuccess(res.data));
            }).catch((error) => {
                dispatch(getFriendAllPostError(error));
            })
    }
}

export function getAllPostLoading() {
    return { type: actionTypes.GET_ALL_POSTS_LOADING }
}
export function getAllPostSuccess(post) {
    return { type: actionTypes.GET_ALL_POSTS_SUCCESS, payload: post }
}
export function getAllPostError(error) {
    return { type: actionTypes.GET_ALL_POSTS_ERROR, payload: error }
}
export function getAllPosts(page, size) {
    return async function (dispatch) {
        dispatch(getAllPostLoading())
        let url = `${baseUrl}/post?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getAllPostSuccess(res.data));
            }).catch((error) => {
                dispatch(getAllPostError(error));
            })
    }
}

export function getAnimalPostLoading() {
    return { type: actionTypes.GET_ANIMAL_POST_LOADING }
}
export function getAnimalPostSuccess(animalPost) {
    return { type: actionTypes.GET_ANIMAL_POST_SUCCESS, payload: animalPost }
}
export function getAnimalPostError(error) {
    return { type: actionTypes.GET_ANIMAL_POST_ERROR, payload: error }
}
export function getAnimalPosts(animalname) {
    return function (dispatch) {
        dispatch(getAnimalPostLoading());
        let url = `${baseUrl}/animal/post/${animalname}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getAnimalPostSuccess(res.data));
            }).catch((error) => {
                dispatch(getAnimalPostError(error));
            })
    }
}

export function getUserPostsLoading() {
    return { type: actionTypes.GET_USER_POST_LOADING }
}
export function getUserPostsSuccess(data) {
    return { type: actionTypes.GET_USER_POST_SUCCESS, payload: data }
}
export function getUserPostsError(error) {
    return { type: actionTypes.GET_USER_POST_ERROR, payload: error }
}
export function getPost(page, size, username) {
    return async function (dispatch) {
        dispatch(getUserPostsLoading());
        let url = `${baseUrl}/post/${username}?page=${page}&size=${size}`;
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
export function postCreateLoading() {
    return { type: actionTypes.POST_CERATE_LOADING }
}
export function createPost(postData) {
    return async function (dispatch) {
        dispatch(postCreateLoading());
        let url = `${baseUrl}/post`;
        axios.post(url, postData, headerPicture)
            .then((res) => {
                dispatch(postCreateSuccess(res.data));
            }).catch((error) => {
                dispatch(postCreateError(error));
            })
    }
}

export function likePostSuccess(data) {
    return { type: actionTypes.LIKE_POST_SUCCESS, payload: data }
}
export function likeDeleteSuccess(data) {
    return { type: actionTypes.LIKE_DELETE_SUCCES, payload: data }
}
export function likePostError(error) {
    return { type: actionTypes.LIKE_POST_SUCCESS, payload: error }
}
export function likePost(likeData) {
    return async function (dispatch) {
        let url = `${baseUrl}/post/like`;
        axios.post(url, likeData, header)
            .then((res) => {
                if (likeData.isLike) {
                    dispatch(likePostSuccess({ userId: res.data, postId: likeData.postId }))
                } else {
                    dispatch(likeDeleteSuccess({ userId: res.data, postId: likeData.postId }))
                }
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
                dispatch(postDeleteSuccess(id));
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
                dispatch(postArchiveSuccess(id));
            }).catch((error) => {
                dispatch(postArchiveError(error));
            })
    }
}

export function getArchivePostLoading() {
    return { type: actionTypes.GET_POST_ARCHIVE_LOADING }
}
export function getArchivePostSuccess(data) {
    return { type: actionTypes.GET_POST_ARCHIVE_SUCCESS, payload: data }
}
export function getArchivePostError(error) {
    return { type: actionTypes.GET_POST_ARCHIVE_ERROR, payload: error }
}
export function getArchivePost(page, size) {
    return function (dispatch) {
        dispatch(getAllPostLoading());
        let url = `${baseUrl}/post/archive?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getArchivePostSuccess(res.data));
            }).catch((error) => {
                dispatch(getArchivePostError(error));
            })
    }
}

export function getRecyclePostLoading() {
    return { type: actionTypes.GET_POST_RECYCLE_LOADING }
}
export function getRecyclePostSuccess(data) {
    return { type: actionTypes.GET_POST_RECYCLE_SUCCESS, payload: data }
}
export function getRecyclePostError(error) {
    return { type: actionTypes.GET_POST_RECYCLE_ERROR, payload: error }
}
export function getRecyclePost(page, size) {
    return function (dispatch) {
        dispatch(getRecyclePostLoading());
        let url = `${baseUrl}/post/recycle?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getRecyclePostSuccess(res.data));
            }).catch((error) => {
                dispatch(getRecyclePostError(error));
            })
    }
}

export function getSavePostLoading() {
    return { type: actionTypes.GET_POST_SAVE_LOADING }
}
export function getSavePostSuccess(data) {
    return { type: actionTypes.GET_POST_SAVE_SUCCESS, payload: data }
}
export function getSavePostError(error) {
    return { type: actionTypes.GET_POST_SAVE_ERROR, payload: error }
}
export function getSavePost(page, size) {
    return function (dispatch) {
        dispatch(getSavePostLoading())
        let url = `${baseUrl}/post/save?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getSavePostSuccess(res.data));
            }).catch((error) => {
                dispatch(getSavePostError(error));
            })
    }
}

export function postEditSuccess(data) {
    return { type: actionTypes.POST_EDIT_SUCCESS, payload: data }
}
export function postEditError(error) {
    return { type: actionTypes.POST_EDIT_ERROR, payload: error }
}
export function postEdit(postId, postData) {
    return function (dispatch) {
        let url = `${baseUrl}/post/update/${postId}`;
        axios.put(url, postData, header)
            .then((res) => {
                dispatch(postEditSuccess({ content: postData.content, postId: postId }));
            }).catch((error) => {
                dispatch(postEditError(error));
            })
    }
}

export function postModalAction(post) {
    return { type: actionTypes.POST_MODAL, payload: post }
}
export function postModal(post) {
    return function (dispatch) {
        dispatch(postModalAction(post))
    }
}

export function postRestoreSuccess(id) {
    return { type: actionTypes.POST_RESTORE_SUCCESS, payload: id }
}
export function postRestoreError(error) {
    return { type: actionTypes.POST_RESTORE_ERROR, payload: error }
}
export function postRestore(id) {
    return function (dispatch) {
        let url = `${baseUrl}/post/restore/${id}`;
        axios.patch(url, {}, header)
            .then((res) => {
                dispatch(postRestoreSuccess(id));
            }).catch((error) => {
                dispatch(postRestoreError(error));
            })
    }
}