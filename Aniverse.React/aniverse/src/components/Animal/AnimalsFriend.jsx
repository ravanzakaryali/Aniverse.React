import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as animalAction from '../../redux/actions/animalAction';

function Animals(props) {
	return (
		<div className="users-section">
			<h3 className="section-title">Animals</h3>
			{props.animals.map((animal) => (
				<div className="sidebar-user col-12" key={animal.id}>
					<Link to={`animal/${animal.animalname}`} className="account-profile">
						<img
							className="users-profile"
							src={
								animal.profilPicture == null
									? `../../img/animal.jpg`
									: `${animal.profilPicture}`
							}
							alt=""
						/>
						<p className="users-name">{animal.name}</p>
					</Link>
				</div>
			))}

			<button className="btn btn-loadmore">More animals</button>
		</div>
	);
}

export default Animals;
