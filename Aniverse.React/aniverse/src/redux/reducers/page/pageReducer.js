import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';


export function pageAllReducer(state = initialState.pageAll, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_PAGE_SUCCESS:
            return action.payload
        case actionTypes.GET_ALL_PAGE_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function pageGetReducer(state = initialState.pageGet, action) {
    switch (action.type) {
        case actionTypes.GET_PAGE_SUCCESS:
            return action.payload
        case actionTypes.GET_PAGE_ERROR:
            return action.payload
        default:
            return state;
    }
}

export function pageGetPhotosReducer(state = initialState.pagePhotos, action) {
    switch (action.type) {
        case actionTypes.GET_PAGE_PHOTOS_SUCCESS:
            return action.payload
        case actionTypes.GET_PAGE_PHOTOS_ERROR:
            return action.payload
        default:
            return state;
    }
}