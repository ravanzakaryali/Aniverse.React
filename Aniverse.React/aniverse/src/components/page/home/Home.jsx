import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../sidebar/Sidebar';
import Story from '../../story/Story';
import PostAdd from '../../post/PostAdd';
import SiderbarRight from '../../sidebar/SiderbarRight';
import { useWindowSize } from '@react-hook/window-size';
import PostSetting from '../../post/PostSetting';
import Footer from '../../navbar/Footer';
import SponsoredAdd from '../../Sponsored/SponsoredAdd';

function Home(props) {
 const navigate = useNavigate();
 const [width] = useWindowSize();
 const token = localStorage.getItem('token');

 useEffect(() => {
  document.title = 'Aniverse';
 }, [token]);
 if (token === null) return <>{navigate('/authenticate/login')}</>;
 return (
  <>
   <div className="main row">
    <React.Fragment>
     {width > 768 ? (
      <div className="fixed-sidebar col-3">
       <Sidebar />
       <Footer />
      </div>
     ) : (
      ''
     )}
     <div className="static-page col-12 col-md-6">
      <Story />
      <PostAdd />
      <PostSetting />
     </div>
     {width > 768 ? (
      <div className="fixed-sidebar-right col-3">
       <SiderbarRight />
      </div>
     ) : (
      ''
     )}
    </React.Fragment>
   </div>
  </>
 );
}

export default Home;
