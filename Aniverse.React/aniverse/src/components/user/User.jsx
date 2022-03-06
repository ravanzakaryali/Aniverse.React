import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getUser, getUserFriend } from '../../redux/actions/userActions';
import Intro from '../profile/Intro';
import FriendsIntro from '../friend/FriendsIntro';
import Posts from '../post/Posts';
import PostAdd from '../post/PostAdd';
import UserFriend from '../profile/UserFriend';
import UserCoverPicture from '../profile/UserCoverPicture';
import UserProfilePicture from '../profile/UserProfilePicture';

function User(props) {
	const { userMethod } = props;
	const { userFriendMethod } = props;
	const [userState, setUserState] = useState({});
	const params = useParams().username;
	useEffect(() => {
		setUserState(params);
		userMethod(params);
		userFriendMethod(userState);
	}, [userState]);
	const { firstname, lastname, username, id, profilPicture,coverPicture } = props.user,
		friends = props.userFriend;
	return (
		<>
			<div className="container user-profile-parent">
				<div className="cover-picture">
					<UserCoverPicture coverPicture={coverPicture} />
				</div>
				<div className="container-min">
					<div className="profile-row row">
						<div className="profile-picture-row col-8 d-flex">
							<UserProfilePicture profilPicture={profilPicture} />
							<div className="profil-content col-6">
								<h2 className="profile-name-surname">
									{firstname} {lastname}
								</h2>
								<span className="friend-count">
									{friends.length ? (
										<Link to={id + '/friends'}>{friends.length} friends</Link>
									) : (
										'Find new friends'
									)}
								</span>
								<div className="friends-pp">
									{friends.map((friend) => (
										<div key={friend.friend.id} className="ml-10">
											<Link to={`${friend.friend.username}`}>
												<img
													alt={`${
														friend.friend.firstname +
														friend.friend.lastname +
														's profile picture'
													}`}
													className="friend-img"
													src={
														friend.friend.profilPicture == null
															? `../../img/user.png`
															: `${(friend, friend.profilPicture)}`
													}
												></img>
											</Link>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="buttons-parent col-4">
							<div className="profile-buttons">
								{props.userAuth.id === props.user.id ? (
									<>
										<button className="btn btn-primary">Add to Story</button>
										<button className="btn btn-light">Edit Profile</button>
									</>
								) : (
									<>
										<button className="btn btn-primary">Message</button>
									</>
								)}
							</div>
						</div>
						<div className="menu-row">
							<div className="col-9">
								<ul className="profile-menu">
									<li>
										<Link
											to={`/user/${username}`}
											className={
												window.location.pathname === `/user/${username}`
													? 'active'
													: ''
											}
										>
											Posts
										</Link>
									</li>
									<li>
										<Link
											to={`/user/${username}/about`}
											className={
												window.location.pathname === `/user/${username}/about`
													? 'active'
													: ''
											}
										>
											About
										</Link>
									</li>
									<li>
										<Link
											to={`/user/${username}/friends`}
											className={
												window.location.pathname === `/user/${username}/friends`
													? 'active'
													: ''
											}
										>
											Friends
										</Link>
									</li>
									<li>
										<Link
											to={`/user/${username}/photos`}
											className={
												window.location.pathname === `/user/${username}/photos`
													? 'active'
													: ''
											}
										>
											Photos
										</Link>
									</li>
									<li>
										<Link
											to={`/user/${username}/groups`}
											className={
												window.location.pathname === `/user/${username}/groups`
													? 'active'
													: ''
											}
										>
											Groups
										</Link>
									</li>
								</ul>
							</div>
							<div className="col-3">
								<ul className="profile-menu justify-content-end">
									<li>
										<Link to="/menu">
											<i className="fa-solid fa-ellipsis"></i>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row sidebar-row">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.userReducer,
		userFriend: state.friendReducer,
		userAuth: state.userNavbarReducer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		userMethod: (username) => {
			dispatch(getUser(username));
		},
		userFriendMethod: (username) => {
			dispatch(getUserFriend(username));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
