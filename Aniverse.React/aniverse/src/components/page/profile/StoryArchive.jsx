import LightGallery from 'lightgallery/react';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getArchiveStory } from '../../../redux/actions/storyAction';
function StoryArhcive(props) {
 const { storyArhiveRequest, stories } = props;
 useEffect(() => {
  storyArhiveRequest(1, 100);
 }, [storyArhiveRequest]);
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
  stories: state.storyArchiveReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  storyArhiveRequest: (page, size) => {
   dispatch(getArchiveStory(page, size));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryArhcive);
