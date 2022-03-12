import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';

export function storyReducer(state = initialState.story, action) {
    switch (action.type) {
        case actionTypes.POST_STORY_SUCCESS:
            return state
        case actionTypes.GET_STORY_SUCCESS:
            return action.payload
        case actionTypes.DELETE_STORY_SUCCESS:
            return state
        case actionTypes.ARCHIVE_STORY_SUCCESS:
            return state
        default:
            return state;
    }
}
export function storyFriendReducer(state = initialState.storyFriend, action) {
    switch (action.type) {
        case actionTypes.GET_FRIEND_STORY_SUCCESS:
            return action.payload
        default:
            return state;
    }
}