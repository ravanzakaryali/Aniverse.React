import * as actionTypes from "./actionTypes"
import axios from "axios"
import { header, baseUrl, headerPicture } from "./axiosConfiguration"

export function getProductCategorySuccess(data) {
    return { type: actionTypes.GET_PRODUCT_CATEGORY_SUCCESS, payload: data }
}
export function getProductCategoryError(error) {
    return { type: actionTypes.GET_PRODUCT_CATEGORY_ERROR, payload: error }
}
export function getProductCategoryLoading() {
    return { type: actionTypes.GET_PRODUCT_CATEGORY_LOADING }
}
export function getProductCategory() {
    return async function (dispatch) {
        dispatch(getProductCategoryLoading())
        let url = `${baseUrl}/product/category`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getProductCategorySuccess(res.data));
            }).catch((error) => {
                dispatch(getProductCategoryError(error));
            })
    }
}

export function createProduct(productState) {
    return async function (dispatch) {
        dispatch(getProductCategoryLoading())
        let url = `${baseUrl}/product/create`;
        axios.post(url, productState, header)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            })
    }
}

export function getProductsSuccess(data) {
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data }
}
export function getProductsError(error) {
    return { type: actionTypes.GET_PRODUCTS_ERROR, payload: error }
}
export function getProductsLoading() {
    return { type: actionTypes.GET_PRODUCTS_LOADING }
}
export function getProducts(page, size, id) {
    return async function (dispatch) {
        dispatch(getProductsLoading())
        let url = `${baseUrl}/product/${id}?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getProductsSuccess(res.data))
            }).catch((error) => {
                dispatch(getProductsError(error));
            })
    }
}

export function getAllProductLoading() {
    return { type: actionTypes.GET_ALL_PRODUCT_LOADING }
}
export function getAllProductSuccess(data) {
    return { type: actionTypes.GET_ALL_PRODUCT_SUCCESS, payload: data }
}
export function getAllProductError(data) {
    return { type: actionTypes.GET_ALL_PRODUCT_ERROR, payload: data }
}
export function getAllProdct(page, size) {
    return async function (dispatch) {
        dispatch(getAllProductLoading())
        let url = `${baseUrl}/product?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getAllProductSuccess(res.data))
            }).catch((error) => {
                dispatch(getAllProductLoading(error));
            })
    }
}

export function saveProduct(id) {
    return async function (dispatch) {
        let url = `${baseUrl}/product/${id}/save`;
        axios.post(url, {}, header)
            .then((res) => {
                console.log("Success")
            }).catch((error) => {
                console.log("Error");
            })
    }
}
export function unSaveProduct(id) {
    return async function (dispatch) {
        let url = `${baseUrl}/product/${id}/unsave`;
        axios.post(url, {}, header)
            .then((res) => {
                console.log("Success")
            }).catch((error) => {
                console.log("Error");
            })
    }
}


export function getSaveProductsLoading() {
    return { type: actionTypes.GET_SAVE_PRODUCTS_LOADING }
}
export function getSaveProductsSuccess(data) {
    return { type: actionTypes.GET_SAVE_PRODUCTS_SUCCESS, payload: data }
}
export function getSaveProductsError(data) {
    return { type: actionTypes.GET_SAVE_PRODUCTS_ERROR, payload: data }
}
export function getSaveProducts(page, size) {
    return async function (dispatch) {
        dispatch(getSaveProductsLoading())
        let url = `${baseUrl}/product/save?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getSaveProductsSuccess(res.data))
            }).catch((error) => {
                dispatch(getSaveProductsError(error));
            })
    }
}