import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPageFollowersUser } from '../../../redux/actions/pageAction';

function Followers(props) {
 const { id } = props.page.data;
 const { getFolowers, followUsers } = props;
 useEffect(() => {
  if (id) {
   getFolowers(id, 1, 30);
  }
 }, []);
 return (
  <div className="users-section">
   <h3 className="section-title">Followers</h3>
   {followUsers.data.map((user) => (
    <div className="sidebar-user col-12" key={user.id}>
     <Link to={`/user/${user.username}`} className="account-profile col-12">
      <img
       className="users-profile"
       src={
        user.profilPicture == null
         ? `../../img/user.png`
         : `${user.profilPicture}`
       }
       alt=""
      />
      <p className="users-name">
       {user.firstname} {user.lastname}
      </p>
     </Link>
    </div>
   ))}
  </div>
 );
}

const mapStateToProps = (state) => {
 return {
  posts: state.postsReducer,
  page: state.pageReducer,
  followUsers: state.pageFollowersReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  getFolowers: (pageId, page, size) => {
   dispatch(getPageFollowersUser(pageId, page, size));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
