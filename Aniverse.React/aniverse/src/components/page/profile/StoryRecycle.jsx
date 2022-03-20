import LightGallery from 'lightgallery/react';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecycleStory } from '../../../redux/actions/storyAction';
function StoryRecycle(props) {
 const { storyRecycleRequest, stories } = props;
 useEffect(() => {
  storyRecycleRequest(1, 100);
 }, [storyRecycleRequest]);
 console.log(props);
 return (
  <>
   {props.stories.length > 0 ? (
    <LightGallery speed={500} elementClassNames="story-gallery-row row">
     {stories.map((story) => (
      <a key={story.id} href={story.imageSrc} className="story-gallery col-4">
       <img
        alt={story.content === undefined ? `${story.content}` : 'Story'}
        src={story.imageSrc}
       />
      </a>
     ))}
    </LightGallery>
   ) : (
    ''
   )}
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  stories: state.storyRecycleReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  storyRecycleRequest: (page, size) => {
   dispatch(getRecycleStory(page, size));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryRecycle);
