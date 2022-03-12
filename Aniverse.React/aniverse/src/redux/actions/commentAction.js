import * as actionTypes from './actionTypes';
import axios from 'axios';

export function commentSuccess() {
    return { type: actionTypes.POST_POST_CREATE_SUCCESS }
}
export function commentError(error) {
    return { type: actionTypes.POST_POST_CREATE_EROOR, payload: error }
}
export function getCommentSuccess(comments) {
    return { type: actionTypes.GET_COMMENT_SUCCESS, payload: comments }
}
export function commentCreate(comment) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/comment`;
        axios.post(url, comment, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(commentSuccess(res.data));
        }).catch((error) => {
            console.log(error);
        })
    }
}
export function getCommentPost(id) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/comment/${id}`;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getCommentSuccess(res.data))
        }).catch((error) => {
            console.log(error);
        })
    }
}