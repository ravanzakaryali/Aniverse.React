import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UserItemButtons from './UserItemsButtons/UserItemButtons';

function UserItem(props) {
 return (
  <>
   <div className="container user-all">
    <div className="row users-row">
     {props.users.length ? (
      props.users.map((user) =>
       props.userAuth.username !== user.username ? (
        <div className="col-12  col-sm-4 col-lg-3" key={user.id}>
         <Link to={`/user/${user.username}`}>
          <div className="user-card">
           <img
            alt="Profile"
            className="user-profile-img"
            src={
             user.profilPicture == null
              ? `../../img/user.png`
              : `${user.profilPicture}`
            }
           />
           <div className="user-about">
            <p className="user-name">
             {user.firstname} {user.lastname}
            </p>
           </div>
           <div className="user-card-footer">
            <UserItemButtons />
           </div>
          </div>
         </Link>
        </div>
       ) : (
        ''
       ),
      )
     ) : (
      <div className="nothing">
       <p>There is no one to show.</p>
      </div>
     )}
    </div>
   </div>
  </>
 );
}

const mapStateToProps = (state) => {
 return {
  userAuth: state.userNavbarReducer,
 };
};

export default connect(mapStateToProps)(UserItem);
