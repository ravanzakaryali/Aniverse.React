import * as actionTypes from './actionTypes';
import axios from 'axios';

export function commentSuccess() {
    return { type: actionTypes.POST_POST_CREATE_SUCCESS }
}
export function commentError(error) {
    return { type: actionTypes.POST_POST_CREATE_EROOR, payload: error }
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