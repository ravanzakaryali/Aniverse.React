import React, { useState } from 'react';
import PhotosIntro from '../photos/PhotosIntro';
import Posts from '../post/Posts';
import PageAbout from './PageAbout';
import PhotoIntroPage from './PhotoIntroPage';

function HomePage(props) {
 const [comRender, setComRender] = useState();
 return (
  <>
   <div className="col-5 col">
    <PageAbout />
    <PhotoIntroPage />
   </div>
   <div className="col-7 col"></div>
  </>
 );
}
export default HomePage;
