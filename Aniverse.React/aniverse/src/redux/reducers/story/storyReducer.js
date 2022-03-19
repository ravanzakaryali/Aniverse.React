import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';

export function storyReducer(state = initialState.story, action) {
    switch (action.type) {
        case actionTypes.STORY_CREATE_SUCCESS:
            return state
        case actionTypes.STORY_CREATE_ERROR:
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
        case actionTypes.GET_FRIEND_STORIES_SUCCESS:
            return action.payload
        case actionTypes.GET_FRIEND_STORIES_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function storiesReducer(state = initialState.stories, action) {
    switch (action.type) {
        case actionTypes.GET_USER_STORIES_SUCCESS:
            return action.payload
        case actionTypes.GET_USER_STORIES_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function storiesAllReducer(state = initialState.stories, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_STORIES_SUCCESS:
            return action.payload
        case actionTypes.GET_ALL_STORIES_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function storyArchiveReducer(state = initialState.storyArchive, action) {
    switch (action.type) {
        case actionTypes.GET_STORY_ARCHIVE_SUCCESS:
            return state.payload
        case actionTypes.GET_STORY_ARCHIVE_ERROR:
            return state.payload
        default:
            return state;
    }
}
export function storyRecycleReducer(state = initialState.storyRecycle, action) {
    switch (action.type) {
        case actionTypes.GET_STORY_RECYCLE_SUCCESS:
            return state.payload
        case actionTypes.GET_STORY_RECYCLE_ERROR:
            return state.payload
        default:
            return state;
    }
}