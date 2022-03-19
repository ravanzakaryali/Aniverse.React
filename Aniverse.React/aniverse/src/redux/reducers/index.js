import { combineReducers } from 'redux'
import {
    postReducer,
    postCreateReducer,
    postArchiveReducer,
    postRecycleReducer
} from './post/postReducer'
import {
    authReducer,
    loginReducer,
    registerReducer
} from './Auth/authReducer';
import {
    storyFriendReducer,
    storyReducer,
    storiesReducer,
    storiesAllReducer,
    storyArchiveReducer,
    storyRecycleReducer
} from './story/storyReducer';
import {
    friendReducer,
    friendRequestReducer,
    getFriendRequestReducer
} from './friend/friendReducer'
import {
    userReducer,
    animalFollowsReducer,
    userOnlyPhotosReducer,
    userLoginReducer,
    seachUsersReducer,
    usersAllReducer
} from './user/userReducer';
import {
    animalPostReducer,
    getAnimalReducer,
    animalReducer,
    animalCategoryReducer,
    selectAnimalReducer,
    friendsAnimalReducer,
    getAnimalPhototsReducer,
    animalChangePictureReducer,
    animalProfileUpdateReducer,
    allAnimalsReducer
} from './animal/aimalReducer';
import { commentPostReducer } from './comment/commentReducer';


const rootReducer = combineReducers({
    userReducer,
    friendReducer,
    animalReducer,
    postReducer,
    storyReducer,
    authReducer,
    storyFriendReducer,
    friendRequestReducer,
    getAnimalReducer,
    animalPostReducer,
    userOnlyPhotosReducer,
    animalCategoryReducer,
    selectAnimalReducer,
    commentPostReducer,
    userLoginReducer,
    animalFollowsReducer,
    storiesReducer,
    friendsAnimalReducer,
    seachUsersReducer,
    getFriendRequestReducer,
    getAnimalPhototsReducer,
    animalChangePictureReducer,
    animalProfileUpdateReducer,
    allAnimalsReducer,
    loginReducer,
    registerReducer,
    postCreateReducer,
    usersAllReducer,
    storiesAllReducer,
    postArchiveReducer,
    postRecycleReducer,
    storyArchiveReducer,
    storyRecycleReducer
})
export default rootReducer;