import React from 'react';
import StoryAdd from './StoryAdd';
import Stories from './Stories';

function Story() {
 return (
  <div className="story-row d-flex">
   <StoryAdd />
   <Stories />
  </div>
 );
}
export default Story;
