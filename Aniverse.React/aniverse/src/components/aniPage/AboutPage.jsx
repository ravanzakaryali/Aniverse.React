import React from 'react';
import Photos from '../page/profile/Photos';
import PagePhotoIntro from '../PagePhotoIntro';
import Followers from './Followers';
import PageAbout from './PageAbout';

function AboutPage() {
 return (
  <div>
   <div className="row">
    <div className="col-5">
     <Followers />
    </div>
    <div className="col-7">
     <PageAbout />
    </div>
   </div>
  </div>
 );
}

export default AboutPage;
