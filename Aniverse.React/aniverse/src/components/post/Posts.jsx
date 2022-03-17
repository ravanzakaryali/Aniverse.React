import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLoginUser } from '../../redux/actions/userActions';
import { Swiper, SwiperSlide } from 'swiper/react';
import { likePost } from '../../redux/actions/postAction';
import ReactTimeAgo from 'react-time-ago';
import PostMenu from './PostMenu';
import Like from './Like';
import CommentAdd from './CommentAdd';
import LikeCommentView from './LikeCommentView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Posts(props) {
 const { loginUser } = props;
 const { comRender, setComRender } = props;
 const [currentPage, setCurrentPage] = useState(1);
 const [sizePost, setSizePost] = useState(20);

 useEffect(() => {
  loginUser();
 }, [sizePost, currentPage, comRender]);

 const { posts } = props;
 return (
  <>
   <div className="col-12">
    {posts.map((post) => (
     <div className="post" key={post.id}>
      <div className="post-title row">
       <div className="profile-img-parent">
        <img
         alt={`${post.user.firstname} profile`}
         className="post-profile-img"
         src={
          post.user.profilPicture == null
           ? `../../img/user.png`
           : `${post.user.profilPicture}`
         }
        />
       </div>
       <div className="col-8  ">
        <p className="user-name">
         {post.animal ? (
          <>
           <Link to={`/animal/${post.animal.name}`}>{post.animal.name}</Link>
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
        <p className="hasTag">{post.hasTag}</p>
       </div>
       <PostMenu
        setComRender={setComRender}
        comRender={comRender}
        userId={post.user.id}
        postId={post.id}
        isSave={post.isSave}
       />
       <div className="post-content col-12">{post.content}</div>
      </div>
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
      <LikeCommentView
       comRender={comRender}
       setComRender={setComRender}
       post={post}
      />
     </div>
    ))}
   </div>
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
