import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';

export function storyReducer(state = initialState.story, action) {
    switch (action.type) {
        case actionTypes.DELETE_STORY_SUCCESS:
            return state
        case actionTypes.ARCHIVE_STORY_SUCCESS:
            return state
        default:
            return state;
    }
}
export function storiesReducer(state = initialState.stories, action) {
    switch (action.type) {
        case actionTypes.GET_FRIEND_STORIES_LOADING:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case actionTypes.GET_FRIEND_STORIES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: ""
            }
        case actionTypes.GET_FRIEND_STORIES_ERROR:
            return {
                ...state,
                error: "Stories not found",
                loading: false,

            }
        case actionTypes.GET_ALL_STORIES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: ""
            }
        case actionTypes.GET_ALL_STORIES_ERROR:
            return {
                ...state,
                error: "",
                loading: false,
            }
        case actionTypes.STORY_CREATE_SUCCESS:
            return {
                ...state,
                data: [action.payload, ...state.data],
                loading: false,
                error: ""
            }
        case actionTypes.STORY_CREATE_ERROR:
            console.log(action.payload)
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case actionTypes.DELETE_STORY_SUCCESS:
            return {
                ...state,
                data: state.data.filter(s => s.id !== action.payload),
                loading: false,
                error: "",
            }
        case actionTypes.ARCHIVE_STORY_SUCCESS:
            return {
                ...state,
                data: state.data.filter(s => s.id !== action.payload),
                loading: false,
                error: ""
            }
        case actionTypes.ARCHIVE_STORY_ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}

export function storyArchiveReducer(state = initialState.storyArchive, action) {
    switch (action.type) {
        case actionTypes.GET_STORY_ARCHIVE_SUCCESS:
            return action.payload
        case actionTypes.GET_STORY_ARCHIVE_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function storyRecycleReducer(state = initialState.storyRecycle, action) {
    switch (action.type) {
        case actionTypes.GET_STORY_RECYCLE_SUCCESS:
            return action.payload
        case actionTypes.GET_STORY_RECYCLE_ERROR:
            return action.payload
        default:
            return state;
    }
}