import React from 'react'
import { connect } from 'react-redux';


function StoryAdd(props) {
    return (
        <div className='col-2'>
            <div className='story' data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img className='story-img' src={props.user.profilPicture == null ? `../../img/user.png` : `${props.user.profilPicture}`} />
                <div className='story-add-plus'>
                    <p className='story-text'>
                        The story of the day
                    </p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
    }
}

export default connect(mapStateToProps)(StoryAdd);
