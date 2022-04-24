import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';

export function productCategoryReducer(state = initialState.productCategory, action) {
    switch (action.type) {

        case actionTypes.GET_PRODUCT_CATEGORY_LOADING:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_PRODUCT_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actionTypes.GET_PRODUCT_CATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
export function productsReducer(state = initialState.products, action) {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actionTypes.GET_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_SAVE_PRODUCTS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_SAVE_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return state;
    }
}
export function allProductReducer(state = initialState.allProducts, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_PRODUCT_LOADING:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actionTypes.GET_ALL_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}