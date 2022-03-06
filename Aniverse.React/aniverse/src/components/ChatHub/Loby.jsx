import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function Loby(props, joinRoom) {
	const [user, setUser] = useState();
	const [room, setRoom] = useState();

	useEffect(() => {
		setUser(props.userAuth.firstname);
        // Grop Name
		// setRoom(props.userAuth.username + props.user.username);
	},[props.user.username, props.userAuth.firstname, props.userAuth.username]);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				props.joinRoom(user, room);
			}}
			className="loby"
		>
			<div>
				{/* <input placeholder="name" onChange={(e) => setUser(e.target.value)} /> */}
				{/* <input placeholder="room" onChange={(e) => setRoom(e.target.value)} /> */}
			</div>
			<button type="submit" className="btn btn-primary">
				Join
			</button>
		</form>
	);
}
function mapStateToProps(state) {
	return {
		user: state.userReducer,
		userAuth: state.userNavbarReducer,
	};
}

export default connect(mapStateToProps)(Loby);
