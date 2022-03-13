import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getFriendStory } from '../../redux/actions/storyAction';
import LightGallery from 'lightgallery/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowSize } from '@react-hook/window-size';
import StoryController from './StoryController';
import { Link } from 'react-router-dom';

function Stories(props) {
 let sliderPerView = 1;
 const [width] = useWindowSize();

 if (width > 992 && props.stories.length >= 4) {
  sliderPerView = 4;
 } else if (width > 768 && props.stories.length >= 3) {
  sliderPerView = 3;
 } else if (width > 576 && props.stories.length >= 2) {
  sliderPerView = 2;
 } else {
  sliderPerView = 1;
 }

 const { storiesRequest } = props;
 const { addStory } = props;

 const userLogin = JSON.parse(localStorage.getItem('loginUser'));

 useEffect(() => {
  storiesRequest();
 }, [addStory]);

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
      {userLogin.username === story.user.username ? (
       <StoryController
        addStory={props.addStory}
        setStory={props.setStory}
        storyId={story.id}
       />
      ) : (
       ''
      )}
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
