import { combineReducers } from 'redux'
import { postReducer } from './post/postReducer'
import { authReducer } from './Auth/authReducer';
import { storyFriendReducer, storyReducer } from './story/storyReducer';
import { friendReducer, friendRequestReducer } from './friend/friendReducer'
import { userReducer, userNavbarReducer, usersReducer, userPhotosReducer } from './user/userReducer';
import { animalPostReducer, animalGetReducer, animalReducer, animalCategoryReducer, selectAnimalReducer } from './animal/aimalReducer';


const rootReducer = combineReducers({
    usersReducer,
    userReducer,
    friendReducer,
    animalReducer,
    postReducer,
    storyReducer,
    authReducer,
    storyFriendReducer,
    userNavbarReducer,
    friendRequestReducer,
    animalGetReducer,
    animalPostReducer,
    userPhotosReducer,
    animalCategoryReducer,
    selectAnimalReducer
})
export default rootReducer;