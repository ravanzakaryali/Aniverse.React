import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getFriendStory } from '../../redux/actions/storyAction';
import LightGallery from 'lightgallery/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowSize } from '@react-hook/window-size';
import StoryController from './StoryController';

function Stories(props) {
 let sliderPerView = 2;
 const [width] = useWindowSize();

 if (width > 992) {
  sliderPerView = 4;
 } else if (width > 768) {
  sliderPerView = 3;
 } else if (width > 576) {
  sliderPerView = 3;
 } else {
  sliderPerView = 2;
 }

 const { storiesRequest } = props;
 const userLogin = JSON.parse(localStorage.getItem('loginUser'));

 useEffect(() => {
  storiesRequest();
 }, [sliderPerView, props.stories]);

 return (
  <>
   <Swiper slidesPerView={sliderPerView}>
    {props.stories.map((story) => (
     <SwiperSlide key={story.id}>
      <LightGallery speed={500}>
       <a href={story.imageSrc}>
        <div className="story-col">
         <img alt={story.content} className="story-img" src={story.imageSrc} />
         <div className="profile">
          <img
           alt="Profile"
           className="profile-story-img"
           src={
            story.user.profilPicture == null
             ? `../../img/user.png`
             : `${story.user.profilPicture}`
           }
          />
         </div>
        </div>
       </a>
      </LightGallery>
      {userLogin.username === story.user.username ? <StoryController /> : ''}
     </SwiperSlide>
    ))}
   </Swiper>
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  stories: state.storyFriendReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  storiesRequest: () => {
   dispatch(getFriendStory());
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
