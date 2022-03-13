import React, { useEffect, useState } from 'react';
import StoryAdd from './StoryAdd';
import Stories from './Stories';

function Story() {
 const [addStory, setStory] = useState({});
 useEffect(() => {
  setStory(addStory);
 }, addStory);
 return (
  <div className="story-row d-flex">
   <StoryAdd addStory={addStory} setStory={setStory} />
   <Stories addStory={addStory} setStory={setStory} />
  </div>
 );
}
export default Story;
