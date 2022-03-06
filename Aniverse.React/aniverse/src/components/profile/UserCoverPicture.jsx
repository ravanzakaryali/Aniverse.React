import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {chageCover} from '../../redux/actions/userActions'

function UserCoverPicture(props) {
	const {changeProfilePicture} = props;
	const [imageSrc, setImageUrl] = useState('');
	const [profileState, setProfileState] = useState();
	const [activeMenu, setActiveMenu] = useState(false);
	const formData = new FormData();

	return (
		<>
			<div className="cover-img-parent">
				{props.coverPicture ? (
					<img alt="Cover" className="cover-img" src={props.coverPicture} />
				) : (
					<div className='cover-style'></div>
				)}
			</div>

			<button
				onClick={(e) => {
					e.currentTarget.nextElementSibling.click();
				}}
				className="btn cover-img-btn"
			>
				<i className="fa-solid fa-camera"></i> Edit Cover Pictue
			</button>
			<input
				onChange={(e) => {
					setActiveMenu(!activeMenu);
					setImageUrl(URL.createObjectURL(e.target.files[0]));
					if (e.currentTarget.files) {
						let uploadFile = e.target.files;
							if (uploadFile[0].type.includes('image')) {
								const reader = new FileReader();
								reader.onload = (f) => {
									setProfileState({
										postFile: uploadFile,
									});
								};
								reader.readAsDataURL(uploadFile[0]);
								let fileValue = e.currentTarget.value;
								setProfileState(fileValue);
							}
					}
				}}
				className="d-none"
				type="file"
			/>
			{activeMenu ? (
				<div
					className="modal fade show"
					id="exampleModal"
					tabIndex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
					style={{ display: 'block' }}
				>
					<div class="modal-dialog modal-xl">
						<div className="modal-content">
							<div className="modal-body">
								<img src={`${imageSrc}`}></img>
							</div>
							<form className="modal-footer" onSubmit={(e)=>{
								e.preventDefault();
								formData.append('imageFile', profileState.postFile[0]);
								changeProfilePicture(formData);
							}}>
								<button
									onClick={() => {
										setActiveMenu(!activeMenu);
									}}
									type="button"
									className="btn btn-light"
									data-bs-dismiss="modal"
								>
									Close
								</button>
								<button onClick={()=> {window.location.reload()}} type="submit" className="btn btn-primary">
									Save changes
								</button>
							</form>
						</div>
					</div>
				</div>
			) : (
				''
			)}
		</>
	);
}
function mapDispatchToProps(dispatch){
	return {
		changeProfilePicture: (profilePicture) => {
			dispatch(chageCover(profilePicture));
		},
	};
};

export default connect(null, mapDispatchToProps)(UserCoverPicture);
