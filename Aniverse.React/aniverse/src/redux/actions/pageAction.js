import * as actionTypes from "./actionTypes"
import axios from 'axios';
import { header, baseUrl } from "./axiosConfiguration"

export function getAllPageSuccess(data) {
    return { type: actionTypes.GET_ALL_PAGE_SUCCESS, payload: data }
}
export function getAllPageError(error) {
    return { type: actionTypes.GET_ALL_PAGE_ERROR, payload: error }
}
export function getAllPage(page, size) {
    return async function (dispatch) {
        let url = `${baseUrl}/page?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getAllPageSuccess(res.data));
            }).catch((error) => {
                dispatch(getAllPageError(error));
            })
    }
}

export function getPageSuccess(data) {
    return { type: actionTypes.GET_PAGE_SUCCESS, payload: data }
}
export function getPageError(error) {
    return { type: actionTypes.GET_PAGE_ERROR, payload: error }
}

export function getPage(pagename) {
    return async function (dispatch) {
        let url = `${baseUrl}/page/${pagename}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getPageSuccess(res.data));
            }).catch((error) => {
                dispatch(getPageError(error));
            })
    }
}

export function getPagePhotosSuccess(data) {
    return { type: actionTypes.GET_PAGE_PHOTOS_SUCCESS, payload: data }
}
export function getPagePhotosError(error) {
    return { type: actionTypes.GET_PAGE_PHOTOS_ERROR, payload: error }
}

export function getPagePhotos(pagename) {
    return async function (dispatch) {
        let url = `${baseUrl}/page/photos/${pagename}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getPagePhotosSuccess(res.data));
            }).catch((error) => {
                dispatch(getPagePhotosError(error));
            })
    }
}


