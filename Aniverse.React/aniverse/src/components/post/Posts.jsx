import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLoginUser } from '../../redux/actions/userActions';
import { Swiper, SwiperSlide } from 'swiper/react';
import { likePost } from '../../redux/actions/postAction';
import ReactTimeAgo from 'react-time-ago';
import PostMenu from './PostMenu';
import LikeCommentView from './LikeCommentView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../loading/Loading';
import PostModal from './PostModal';
import ProfilePictureStyle from '../user/ProfilePictureStyle';
import Restore from './Restore';
import Nothing from '../common/Nothing';
import { Parallax } from 'swiper';

function Posts(props) {
 const { loginUser } = props;

 useEffect(() => {
  loginUser();
 }, [loginUser]);

 const { posts } = props;
 if (posts.loading) return <Loading />;
 if (posts.data.length === 0) return <Nothing />;
 console.log(posts.data.length === 0);
 return (
  <>
   <div className="col-12 posts-col">
    {posts.data.map((post) => (
     <div className="post" key={post.id}>
      {post.user ? (
       <div className="post-title row">
        <div className="profile-img-parent">
         <ProfilePictureStyle
          profilPicture={post.user.profilPicture}
          className="post-profile-img"
          alt={`${post.user.firstname} profile`}
         />
        </div>
        <div className="col-8  ">
         <p className="user-name">
          {post.animal ? (
           <>
            <Link to={`/animal/${post.animal.animalname}`}>
             {post.animal.name}
            </Link>
            <span>with</span>
           </>
          ) : (
           ''
          )}
          <Link to={`/user/${post.user.username}`}>
           {post.user.firstname} {post.user.lastname}
          </Link>
         </p>
         <p className="create-date">
          <ReactTimeAgo
           date={Date.parse(post.creationDate)}
           timeStyle="twitter"
           locale="az-AZ"
          />
         </p>
        </div>
        <PostMenu userId={post.user.id} post={post} />
        <div className="post-content col-12">{post.content}</div>
       </div>
      ) : (
       ''
      )}
      <div className="post-body item">
       {post.pictures ? (
        <Swiper slidesPerView={1}>
         {post.pictures.map((picture) => (
          <SwiperSlide key={picture.id}>
           <div className="item">
            <img className="post-img" src={picture.imageName} />
           </div>
          </SwiperSlide>
         ))}
        </Swiper>
       ) : (
        ''
       )}
      </div>
      <div className="post-footer">
       <div className="post-result">
        <span className="index like">
         <Link to="/">
          <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
          <span className="count">{post.likes.length}</span>
         </Link>
        </span>
        <span className="index comment">
         <Link to="/sds">
          <FontAwesomeIcon icon="fa-solid fa-comment" />
          <span className="count">{post.comments.length}</span>
         </Link>
        </span>
       </div>
      </div>
      <LikeCommentView post={post} />
     </div>
    ))}
   </div>
   <PostModal />
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  userAuth: state.authReducer,
  user: state.userLoginReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  likePost: (likeData) => {
   dispatch(likePost(likeData));
  },
  loginUser: () => {
   dispatch(getLoginUser());
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
