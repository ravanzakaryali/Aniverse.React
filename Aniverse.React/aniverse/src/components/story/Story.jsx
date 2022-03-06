import React from 'react'
import StoryAdd from './StoryAdd';
import StoryFriend from './StoryFriend';

function Story() {
    return (
        <div className='story-row d-flex'>
            <StoryAdd />
            <StoryFriend />
        </div>
    )
}
export default Story;
