import axios from "axios"
import * as actionTypes from "./actionTypes"
import { baseUrl, header, headerPicture } from "./axiosConfiguration"

export function getUserStoriesSuccess(story) {
    return { type: actionTypes.GET_USER_STORIES_SUCCESS, payload: story }
}
export function getUserStoriesError(story) {
    return { type: actionTypes.GET_USER_STORIES_ERROR, payload: story }
}
export function getUserStories(username) {
    return async function (dispatch) {
        let url = `${baseUrl}/story/${username}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getUserStoriesSuccess(res.data));
            }).catch((error) => {
                dispatch(getUserStoriesError(error));
            });
    }
}

export function getFriendStoriesSuccess(stories) {
    return { type: actionTypes.GET_FRIEND_STORIES_SUCCESS, payload: stories }
}
export function getFriendStoriesError(error) {
    return { type: actionTypes.GET_FRIEND_STORIES_ERROR, payload: error }
}
export function getFriendStory() {
    return async function (dispatch) {
        let url = `${baseUrl}/story/friend`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getFriendStoriesSuccess(res.data));
            }).catch((error) => {
                dispatch(getFriendStoriesError(error));
            });
    }
}

export function getAllStoriesSuccess(stories) {
    return { type: actionTypes.GET_ALL_STORIES_SUCCESS, payload: stories }
}
export function getAllStoriesError(error) {
    return { type: actionTypes.GET_ALL_STORIES_ERROR, payload: error }
}
export function getStories() {
    return async function (dispatch) {
        let url = `${baseUrl}/story`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getAllStoriesSuccess(res.data));
            }).catch((error) => {
                dispatch(getAllStoriesError(error));
            })
    }
}

export function storyCreateSuccess(data) {
    return { type: actionTypes.STORY_CREATE_SUCCESS, payload: data }
}
export function storyCreateError(error) {
    return { type: actionTypes.STORY_CREATE_ERROR, payload: error }
}

export function storyCreate(formData) {
    return async function (dispatch) {
        let url = `${baseUrl}/story`;
        axios.post(url, formData, headerPicture)
            .then((res) => {
                dispatch(storyCreateSuccess(res));
            }).catch((error) => {
                dispatch(storyCreateError(error));
            });
    }
}

export function deleteStorySuccess(data) {
    return { type: actionTypes.DELETE_STORY_SUCCESS, payload: data }
}
export function deleteStoryError(error) {
    return { type: actionTypes.DELETE_STORY_ERROR, payload: error }
}

export function deleteStory(id) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/story/delete/${id}`;
        axios.patch(url, {}, header)
            .then((res) => {
                dispatch(deleteStorySuccess(res));
            }).catch((error) => {
                dispatch(deleteStoryError(error));
            });
    }
}

export function archiveStorySuccess() {
    return { type: actionTypes.ARCHIVE_STORY_SUCCESS }
}
export function archiveStoryError() {
    return { type: actionTypes.ARCHIVE_STORY_ERROR }
}
export function archiveStory(id) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/story/archive/${id}`;
        axios.patch(url, {}, header)
            .then((res) => {
                dispatch(archiveStorySuccess(res));
            }).then((error) => {
                dispatch(archiveStoryError(error));
            })
    }
}  