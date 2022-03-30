import { combineReducers } from 'redux'
import {
    postsReducer,
    postModalReducer
} from './post/postReducer'
import {
    authReducer,
    loginReducer,
    registerReducer
} from './Auth/authReducer';
import {
    storyReducer,
    storiesReducer,
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
    usersAllReducer,
    userPagesReducer
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
// import { commentPostReducer } from './comment/commentReducer';
import {
    pageAllReducer,
    pageReducer,
    pageGetPhotosReducer,
    pageFollowersReducer
} from './page/pageReducer';

import {
    productCategoryReducer,
    productsReducer,
    allProductReducer
} from './product/productReducer';
const rootReducer = combineReducers({
    userReducer,
    friendReducer,
    animalReducer,
    postsReducer,
    storyReducer,
    authReducer,
    friendRequestReducer,
    getAnimalReducer,
    animalPostReducer,
    userOnlyPhotosReducer,
    animalCategoryReducer,
    selectAnimalReducer,
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
    usersAllReducer,
    storyArchiveReducer,
    storyRecycleReducer,
    pageAllReducer,
    postModalReducer,
    pageReducer,
    pageGetPhotosReducer,
    productCategoryReducer,
    productsReducer,
    pageFollowersReducer,
    userPagesReducer,
    allProductReducer
})
export default rootReducer;