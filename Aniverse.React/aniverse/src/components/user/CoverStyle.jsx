import React from 'react';

const CoverStyle = (props) => {
 const { coverPicture } = props;
 return (
  <>
   <div className="cover-img-parent">
    {coverPicture ? (
     <img alt="Cover" className="cover-img" src={props.coverPicture} />
    ) : (
     <div className="cover-style"></div>
    )}
   </div>
  </>
 );
};

export default CoverStyle;
