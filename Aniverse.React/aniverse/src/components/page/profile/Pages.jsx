import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserPages } from '../../../redux/actions/userActions';
import ProfilePPStyle from '../aniPage/ProfilePPStyle';

function Pages(props) {
 const { getPages } = props;
 const { id } = props.user.data;
 useEffect(() => {
  if (id) {
   getPages(id);
  }
 }, []);
 return (
  <div>
   <div className="user-pages intro">
    <div className="intro-title">Pages</div>
    <div className="pages-row row">
     {props.pages.data.map((page) => (
      <Link
       to={`/page/${page.pagename}`}
       key={page.id}
       className="page-item col-3">
       <div className="page-header">
        <ProfilePPStyle alt={page.name} profilPicture={page.profilPicture} />
       </div>
       <div className="page-footer">
        <h3>
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
        </h3>
        <p>{page.pageFollow.length} followers</p>
       </div>
      </Link>
     ))}
    </div>
   </div>
  </div>
 );
}
const mapStateToProps = (state) => {
 return {
  user: state.userReducer,
  pages: state.userPagesReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  getPages: (id) => {
   dispatch(getUserPages(id));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
