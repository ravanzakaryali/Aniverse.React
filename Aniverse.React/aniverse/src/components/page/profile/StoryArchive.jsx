import React from 'react';
import { connect } from 'react-redux';

function StoryArhcive(props) {
 const { storyArhiveRequest } = props;
 console.log(props);
 return <></>;
}
const mapStateToProps = (state) => {
 return {
  posts: state.postArhiveReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  storyArhiveRequest: () => {
   dispatch();
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryArhcive);
