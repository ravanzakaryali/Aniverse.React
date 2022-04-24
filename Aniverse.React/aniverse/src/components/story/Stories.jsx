import React, { useEffect } from 'react';
import LightGallery from 'lightgallery/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowSize } from '@react-hook/window-size';
import StoryController from './StoryController';
import Loading from '../common/Loading';
import { toast, ToastContainer } from 'react-toastify';

function Stories(props) {
 let sliderPerView = 1;
 const [width] = useWindowSize();

 //#region
 if (props.stories.data.length >= 4) {
  if (width > 992) {
   sliderPerView = 5;
  } else if (width > 768) {
   sliderPerView = 3;
  } else if (width > 576) {
   sliderPerView = 3;
  } else {
   sliderPerView = 3;
  }
 } else if (props.stories.data.length >= 3) {
  sliderPerView = 2;
 } else {
  sliderPerView = 1;
 }
 //#endregion
 useEffect(() => {
  if (props.stories.error && window.location.pathname === '/') {
   toast('It is possible to share one story in a day', {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: true,
    pauseOnHover: false,
   });
  }
 }, [props]);
 const userLogin = JSON.parse(localStorage.getItem('loginUser'));
 if (props.stories.loading) {
  return <Loading />;
 } else {
 }

 return (
  <div
   className={`row ${
    window.location.pathname === '/' ? 'col-10' : 'col-12'
   } stoires-row`}>
   <Swiper slidesPerView={sliderPerView}>
    {props.stories.data.map((story) => (
     <SwiperSlide key={story.id}>
      <LightGallery speed={500}>
       <a href={story.imageSrc}>
        <div className="story-col">
         <img
          alt={story.content ? story.content : ''}
          className="story-img"
          src={story.imageSrc}
         />
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
       <StoryController storyId={story.id} />
      ) : (
       ''
      )}
     </SwiperSlide>
    ))}
   </Swiper>
   <ToastContainer theme="dark" limit={3} />
  </div>
 );
}

export default Stories;
