import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { connect } from 'react-redux';
import { pageFollow, pageUnfollow } from '../../redux/actions/pageAction';

function PageMenuList(props) {
 const { follow, unfollow, userLoginId } = props;
 const [isFollow, setIsFollow] = useState(true);
 const location = useLocation();
 const pagename = useParams().pagename;
 const { id, pageFollow } = props.page.data;

 useEffect(() => {
  if (pageFollow && userLoginId) {
   if (pageFollow.find((p) => p.userId === userLoginId.id)) {
    setIsFollow(false);
   }
  }
 }, [isFollow]);

 const submitFollow = (e) => {
  e.preventDefault();
  if (id) {
   if (isFollow) {
    follow(id, userLoginId.id);
   } else {
    unfollow(id, userLoginId.id);
   }
  }
  setIsFollow(!isFollow);
 };
 console.log(isFollow);
 return (
  <div className="menu-row page">
   <div className="col-9">
    <ul className="profile-menu">
     <li>
      <Link
       to={`/page/${pagename}`}
       className={location.pathname === `/page/${pagename}` ? 'active' : ''}>
       Home
      </Link>
     </li>
     <li>
      <Link
       to={`/page/${pagename}/about`}
       className={
        location.pathname === `/page/${pagename}/about` ? 'active' : ''
       }>
       About
      </Link>
     </li>
     <li>
      <Link
       to={`/page/${pagename}/photos`}
       className={
        location.pathname === `/page/${pagename}/photos` ? 'active' : ''
       }>
       Photos
      </Link>
     </li>

     <li>
      <Link
       to={`/page/${pagename}/shop`}
       className={
        location.pathname === `/page/${pagename}/shop` ? 'active' : ''
       }>
       Shop
      </Link>
     </li>
    </ul>
   </div>
   <div className="col-3">
    <ul className="profile-menu justify-content-end">
     <li className="setting">
      <form onSubmit={submitFollow}>
       <button type="submit" className="btn btn-opacity-primary">
        {isFollow ? (
         <>
          <AiFillLike className="icon" />
          Follow
         </>
        ) : (
         <>
          <AiOutlineLike className="icon" />
          Unfollow
         </>
        )}
       </button>
      </form>
     </li>
    </ul>
   </div>
  </div>
 );
}
const mapStateToProps = (state) => {
 return {
  posts: state.postsReducer,
  page: state.pageReducer,
  userLoginId: state.userLoginReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  follow: (id, userId) => {
   dispatch(pageFollow(id, userId));
  },
  unfollow: (id, userId) => {
   dispatch(pageUnfollow(id, userId));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageMenuList);
