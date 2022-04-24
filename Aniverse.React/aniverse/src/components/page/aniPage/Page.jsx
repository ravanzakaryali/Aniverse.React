import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet, useParams } from 'react-router';
import { getPage } from '../../../redux/actions/pageAction';
import { getLoginUser } from '../../../redux/actions/userActions';
import Loading from '../../common/Loading';
import EditPageModal from './EditPageModal';
import PageCoverPicture from './PageCoverPicture';
import PageMenuList from './PageMenuList';
import PageProfilePicture from './PageProfilePicture';

function Page(props) {
 const paramsPagename = useParams().pagename;
 const { getPageRequest, loginUser } = props;
 const {
  name,
  pagename,
  about,
  category,
  isOfficial,
  profilPicture,
  coverPicture,
 } = props.page.data;

 useEffect(() => {
  getPageRequest(paramsPagename);
  loginUser();
  if (name) document.title = `${name} | Aniverse`;
 }, [getPageRequest, paramsPagename, name]);
 if (props.page.loading)
  return (
   <div className="loading_user">
    <Loading />
   </div>
  );
 return (
  <div className="page container">
   <div className="cover_picture">
    <PageCoverPicture coverPicture={coverPicture} />
   </div>
   <div className="page-container">
    <div className="ani_page">
     <div className="page_profile">
      <div className="profile-title">
       <div className="page-profile-img">
        <PageProfilePicture profilPicture={profilPicture} />
       </div>
       <div className="page-profile-content">
        <p className="name">
         {name}
         {isOfficial ? (
          <>
           <span className="circle">
            <FontAwesomeIcon icon="fa-solid fa-circle-check" />
           </span>
          </>
         ) : (
          ''
         )}
        </p>
        <p className="follower"> {category}</p>
       </div>
      </div>
      <PageMenuList />
     </div>
    </div>
    <div className="row ani-page-home">
     <Outlet />
    </div>
   </div>
   <EditPageModal />
  </div>
 );
}

const mapStateToProps = (state) => {
 return {
  page: state.pageReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  getPageRequest: (pagename) => {
   dispatch(getPage(pagename));
  },
  loginUser: () => {
   dispatch(getLoginUser());
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
