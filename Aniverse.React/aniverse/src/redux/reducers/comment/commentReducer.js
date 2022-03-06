import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';

export default function commentReducer(state = initialState.commentsCreate, action) {
    switch (action.type) {
        case actionTypes.POST_COMMENT_CREATE_SUCCESS:
            return state
        case actionTypes.POST_COMMENT_CREATE_ERROR:
            return action.payload
        default:
            return state;
    }
}