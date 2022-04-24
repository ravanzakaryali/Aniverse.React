import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePPStyle from '../aniPage/ProfilePPStyle';

function PageIntro(props) {
 const { pages } = props;
 return (
  <>
   <div className="page-intro">
    <div className="page-title">
     <div className="title">
      <p>Page</p>
     </div>
    </div>
    <div className="pages-row">
     {pages.data.map((page, index) => (
      <Link to={`/page/${page.pagename}`} key={page.id} className="page-item">
       <div className="profile-img">
        <ProfilePPStyle alt={page.name} profilPicture={page.profilPicture} />
       </div>
       <div className="page-content">
        <p className="name">
         {page.name}
         {page.isOfficial ? (
          <>
           <span className="circle">
            <FontAwesomeIcon icon="fa-solid fa-circle-check" />
           </span>
          </>
         ) : (
          ''
         )}
        </p>
        <p className="follower-count">
         {page.pageFollow ? page.pageFollow.length : 0} followers
        </p>
       </div>
      </Link>
     ))}
    </div>
   </div>
  </>
 );
}

export default PageIntro;
