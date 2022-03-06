import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getFriendStory, getStory } from '../../redux/actions/storyAction'
import jwtDecode from 'jwt-decode'
import LightGallery from 'lightgallery/react';
import OwlCarousel from "react-owl-carousel";

function StoryFriend(props) {
    const { storyFriends } = props;

    const [friendState, setFriendState] = useState({})
    const user = jwtDecode(localStorage.getItem("token")).username;
    useEffect(() => {
        setFriendState(user);
        storyFriends(user);
    }, [friendState]);

    return (
        <>
            <OwlCarousel className="owl-theme" dots={false} items={5}>
                {props.storyFriend.map((story) => (
                    <div className='item' key={story.id}>
                        <LightGallery
                            speed={500}
                        >
                            <a href={story.imageSrc} className="col-2">
                                <div className='story-col'>
                                    <img className='story-img' src={story.imageSrc} />
                                    <div className='profile'>
                                        <img className='profile-story-img' src={story.user.profilePicture} />
                                    </div>
                                </div>
                            </a>
                        </LightGallery>
                    </div>

                ))}
            </OwlCarousel>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        storyFriend: state.storyFriendReducer,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        storyFriends: (username) => {
            dispatch(getFriendStory(username))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryFriend);
