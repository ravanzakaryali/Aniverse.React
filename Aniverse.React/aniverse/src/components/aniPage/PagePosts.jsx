import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import Loading from '../loading/Loading';
import { Swiper, SwiperSlide } from 'swiper/react';
import PostMenu from '../post/PostMenu';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LikeCommentView from '../post/LikeCommentView';
import AnimalPPStyle from '../Animal/AnimalPPStyle';

function PagePosts(props) {
 const { posts } = props;
 console.log(props);
 if (posts.loading) return <Loading />;
 return (
  <>
   <div className="col-12">
    {posts.data.map((post) => (
     <div className="post" key={post.id}>
      {post.page ? (
       <div className="post-title row">
        <div className="profile-img-parent">
         <AnimalPPStyle
          profilPicture={post.page.profilPicture}
          className="post-profile-img"
          alt="Animal"
         />
        </div>
        <div className="col-8  ">
         <p className="user-name">
          <Link to={`/user/${post.page.pagename}`}>
           {post.page.name}
           {post.page.isOfficial ? (
            <>
             <span className="circle circle-post">
              <FontAwesomeIcon icon="fa-solid fa-circle-check" />
             </span>
            </>
           ) : (
            ''
           )}
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
        <PostMenu userId={post.userId} post={post} />
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
  </>
 );
}

export default PagePosts;
