import * as actionTypes from './actionTypes';
import axios from 'axios';
import { baseUrl, header } from './axiosConfiguration';

export function commentError(error) {
    return { type: actionTypes.COMMENT_CREATE_ERROR, payload: error }
}
export function commentSuccess(data) {
    return { type: actionTypes.COMMENT_CREATE_SUCCESS, payload: data }
}
export function commentLoading() {
    return { type: actionTypes.COMMENT_CREATE_LOADING }
}
export function commentCreate(comment) {
    return async function (dispatch) {
        let url = `${baseUrl}/comment`;
        axios.post(url, comment, header)
            .then((res) => {
                dispatch(commentSuccess(res.data));
            }).catch((error) => {
                dispatch(commentError(error));
            })
    }
}

export function getCommentSuccess(comments) {
    return { type: actionTypes.GET_COMMENT_SUCCESS, payload: comments }
}

export function getCommentPost(id) {
    return async function (dispatch) {
        let url = `${baseUrl}/comment/${id}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getCommentSuccess(res.data))
            }).catch((error) => {
                console.log(error);
            })
    }
}