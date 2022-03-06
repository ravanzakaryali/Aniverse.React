import * as actionTypes from './actionTypes';
import axios from 'axios';

export function changeBioSuccess(bio) {
    return { type: actionTypes.BIO_CHANGE_SUCCESS, payload: bio }
}
export function changeBio(bio) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/user/bio`;
        axios.patch(url, bio, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        }).then((res) => {
            dispatch(changeBioSuccess(res.data));
        }).catch((error) => {
            console.log(error);
        })
    }
}