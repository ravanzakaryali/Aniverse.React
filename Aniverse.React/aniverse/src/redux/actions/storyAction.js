import axios from "axios"
import * as actionTypes from "./actionTypes"

export function getFriendStorySuccess(storyFriend) {
    return { type: actionTypes.GET_FRIEND_STORY_SUCCESS, payload: storyFriend }
}
export function getStorySuccess(story) {
    return { type: actionTypes.GET_STORY_SUCCESS, payload: story }
}
export function postStorySuccess() {
    return { type: actionTypes.POST_STORY_SUCCESS }
}
export function getStory(username) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/story/${username}`;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getStorySuccess(res.data));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function getFriendStory(username) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/user/${username}/friend/story`;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getFriendStorySuccess(res.data))
        }).catch((error) => {
            console.log(error);
        });
    }
}
export function postStory(formData) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/story`;
        axios.post(url, formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': '*/*',
            },
        }).then((res) => {
            dispatch(postStorySuccess());
        }).catch((error)=>{
            console.log(error);
        });
    }
}