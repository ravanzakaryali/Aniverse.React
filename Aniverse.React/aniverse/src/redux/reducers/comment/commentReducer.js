import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';

export function commentReducer(state = initialState.commentsCreate, action) {
    switch (action.type) {
        case actionTypes.COMMENT_CREATE_SUCCESS:
            return state.payload
        case actionTypes.COMMENT_CREATE_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function commentPostReducer(state = initialState.comments, action) {
    switch (action.type) {
        case actionTypes.GET_COMMENT_SUCCESS:
            return action.payload
        default:
            return state;
    }
}