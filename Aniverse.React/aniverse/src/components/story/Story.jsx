import React, { useEffect, useState } from 'react';
import StoryAdd from './StoryAdd';
import Stories from './Stories';
import { connect } from 'react-redux';
import { getFriendStory } from '../../redux/actions/storyAction';

function Story(props) {
 const { storiesRequest } = props;
 useEffect(() => {
  storiesRequest(1, 10);
 }, [storiesRequest]);
 return (
  <div className="story-row d-flex">
   <StoryAdd />
   <Stories stories={props.stories} />
  </div>
 );
}
const mapStateToProps = (state) => {
 return {
  stories: state.storiesReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  storiesRequest: (page, size) => {
   dispatch(getFriendStory(page, size));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Story);
