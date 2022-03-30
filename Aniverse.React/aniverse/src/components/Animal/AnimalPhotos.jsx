import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { getAnimalPhotos } from '../../redux/actions/animalAction';
import LightGallery from 'lightgallery/react';
import Nothing from '../common/Nothing';

function AnimalPhotos(props) {
 const animalname = useParams().animalname;
 const { getPhotos, photos } = props;
 useEffect(() => {
  getPhotos(animalname, 1, 10);
 }, [animalname]);
 if (photos.length === 0) return <Nothing />;
 return (
  <>
   {photos.length > 0 ? (
    <LightGallery speed={500}>
     {photos.map((photo) => (
      <a
       key={photo.id}
       href={photo.imageName}
       className="img-animal-photo col-4">
       <img src={photo.imageName} />
      </a>
     ))}
    </LightGallery>
   ) : (
    ''
   )}
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  photos: state.getAnimalPhototsReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  getPhotos: (animalname, page, size) => {
   dispatch(getAnimalPhotos(animalname, page, size));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimalPhotos);
