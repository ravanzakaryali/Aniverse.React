import React, { useEffect, useState } from 'react';
import StoryAdd from './StoryAdd';
import Stories from './Stories';
import { connect } from 'react-redux';
import { getFriendStory } from '../../redux/actions/storyAction';

function Story(props) {
 const { storiesRequest } = props;

 const [addStory, setStory] = useState({});
 useEffect(() => {
  storiesRequest();
  setStory(addStory);
 }, addStory);
 return (
  <div className="story-row d-flex">
   <StoryAdd addStory={addStory} setStory={setStory} />
   <Stories stories={props.stories} />
  </div>
 );
}
const mapStateToProps = (state) => {
 return {
  stories: state.storyFriendReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  storiesRequest: () => {
   dispatch(getFriendStory());
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Story);
