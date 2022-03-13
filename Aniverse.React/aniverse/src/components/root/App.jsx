import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from '../page/home/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import User from '../page/profile/User';
import { loadUser } from '../../redux/actions/authAction';
import '../../sass/main.scss';
import Navbar from '../navbar/Navbar';
import Profile from '../page/profile/Profile';
import UserFriend from '../page/profile/UserFriend';
import Auth from '../auth/Auth';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Animal from '../Animal/Animal';
import Chat from '../ChatHub/Chat';
import People from '../page/people/People';
import AllUser from '../page/people/AllUser';
import AllFriend from '../page/people/AllFriend';
import AllFriendRequest from '../page/people/AllFriendRequest';
import BlockUsers from '../page/people/BlockUsers';
import Explore from '../page/explore/Explore';
import About from '../page/profile/About';
import Follows from '../page/profile/Follows';
import Photos from '../page/profile/Photos';
import Pages from '../page/profile/Pages';
import FontAwesome from '../fontAwesome/FontAwesome';

function App() {
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(loadUser());
 }, [dispatch]);

 return (
  <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="people" element={<People />}>
     <Route path="friends" element={<AllFriend />} />
     <Route path="request" element={<AllFriendRequest />} />
     <Route path="block" element={<BlockUsers />} />
     <Route index element={<AllUser />} />
    </Route>
    <Route path="user/:username" element={<User />}>
     <Route path="friends" element={<UserFriend />} />
     <Route
      path="about"
      element={
       <>
        <About />
        <Follows />
       </>
      }
     />
     <Route path="photos" element={<Photos />} />
     <Route path="pages" element={<Pages />} />
     <Route path="chat" element={<Chat />} />
     <Route index element={<Profile />} />
    </Route>
    <Route path="animal/:animalname" element={<Animal />} />
    <Route path="/explore" element={<Explore />} />
    <Route path="auth/" element={<Auth />}>
     <Route path="login" element={<Login />} />
     <Route path="register" element={<Register />} />
    </Route>
   </Routes>
  </BrowserRouter>
 );
}

export default App;
