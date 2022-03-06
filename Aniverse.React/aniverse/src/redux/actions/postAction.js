import * as actionTypes from "./actionTypes"
import axios from "axios"

export function getAllPostSuccess(animals) {
    return { type: actionTypes.GET_ALL_POSTS_SUCCESS, payload: animals }
}
export function getPostSuccess(post) {
    return { type: actionTypes.GET_USER_POST_SUCCESS, payload: post }
}
export function postCreateSuccess() {
    return { type: actionTypes.POST_POST_CREATE_SUCCESS }
}
export function likePostSuccess() {
    return { type: actionTypes.LIKE_POST_SUCCESS }
}
export function unLikePostSuccess() {
    return { type: actionTypes.UNLIKE_POST_SUCCESS }
}
export function getAnimalPostSuccess(animalPost) {
    return { type: actionTypes.GET_ANIMAL_POST_SUCCESS, payload: animalPost }
}

export function getPosts(page, size) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/user/friend/post?page=${page}&size=${size}`;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getAllPostSuccess(res.data));
        }).catch((error) => {
            console.log(error);
        })
    }
}
export function getPost(username) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/post/${username}`;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getPostSuccess(res.data))
        }).catch((error) => {
            console.log(error);
        })
    }
}
export function createPost(postData) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/post`;
        axios.post(url, postData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': '*/*',
            },
        }).then((res) => {
            dispatch(postCreateSuccess());
        }).catch((error) => {
            console.log(error);
        })
    }
}
export function likePost(likeData) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/post/like`;
        axios.post(url, likeData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(likePostSuccess());
        }).catch((error) => {
            console.log(error);
        })
    }
}
export function getAnimalPosts(animalname) {
    return function (dispatch) {
        let url = `${actionTypes.baseUrl}/animal/post/${animalname}`;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getAnimalPostSuccess(res.data))
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}