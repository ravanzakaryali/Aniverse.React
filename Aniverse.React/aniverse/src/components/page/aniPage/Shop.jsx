import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
 createProduct,
 getProductCategory,
} from '../../../redux/actions/productAction';
import Select from 'react-select';
import { MdAddPhotoAlternate } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShopList from './ShopList';

function Shop(props) {
 const { productCategory, category, productCreate } = props;
 const [shopState, setShopState] = useState();

 const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();
  for (let i = 0; i < shopState.postFile.length; i++) {
   formData.append('imageFile', shopState.postFile[i]);
  }
  formData.append('name', shopState.name);
  formData.append('pageId', props.page.data.id);
  formData.append('Url', shopState.url);
  formData.append('price', shopState.price);
  formData.append('categoryId', shopState.categoryId);
  productCreate(formData);
 };

 const handleChange = (e) => {
  const { name, value } = e.target;
  setShopState({ ...shopState, ...{ [name]: value } });
 };
 useEffect(() => {
  productCategory();
 }, []);

 const customStyles = {
  option: (provided, state) => ({
   ...provided,
   color: state.isSelected ? 'white' : 'black',
   backgroundColor: state.isSelected ? '#2f26c8' : 'white',
  }),
 };

 return (
  <>
   <div className="shop">
    <div className="shop-parent col-12">
     <div className="shop-header intro">
      <div className="shop-title intro-title">Shop</div>
      <div className="shop-btn">
       <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#shopAdd">
        Add Product
       </button>
      </div>
     </div>
     <ShopList />
    </div>
    <div
     className="modal fade"
     id="shopAdd"
     tabIndex="-1"
     aria-labelledby="shopAddLabel"
     aria-hidden="true">
     <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
       <div className="modal-header">
        <h5 className="modal-title" id="shopAddLabel">
         Shop Add
        </h5>
        <button
         type="button"
         className="btn-close"
         data-bs-dismiss="modal"
         aria-label="Close"></button>
       </div>
       <div className="modal-body">
        <form onSubmit={handleSubmit} className="form-create">
         <div className="form-item">
          <label className="create-label">Product name</label>
          <input
           name="name"
           onChange={handleChange}
           placeholder="Product name"
          />
         </div>
         <div className="form-item">
          <label className="create-label">Category</label>
          <Select
           styles={customStyles}
           placeholder="Category"
           onChange={(e) => {
            setShopState({
             ...shopState,
             ...{ categoryId: e.id },
            });
           }}
           options={category.data}
           getOptionLabel={(options) => options['name']}
           getOptionValue={(options) => options['id']}
          />
         </div>
         <div className="form-item">
          <label className="create-label">Price</label>
          <input
           type={'number'}
           name="price"
           onChange={handleChange}
           placeholder="Price"></input>
         </div>
         <div className="form-item">
          <label className="create-label">Link</label>
          <input
           type={'url'}
           name="url"
           onChange={handleChange}
           placeholder="Product link"></input>
         </div>
         <div className="row form-item-row">
          <div
           className="image col-2"
           onClick={(e) => {
            document.querySelector('.fileUpload').click();
           }}>
           <MdAddPhotoAlternate />
          </div>
          <div className="image-select d-none col-9">
           <FontAwesomeIcon icon="fa-solid fa-images" />
           <span className="fileSaveIndex image-select-text"></span>
          </div>
          <div className="image-content d-none">
           <input
            multiple
            className="fileUpload"
            onChange={(e) => {
             if (e.currentTarget.files) {
              let uploadFile = e.target.files;
              let fileValue;
              [...uploadFile].forEach((file) => {
               if (file.type.includes('image')) {
                const reader = new FileReader();
                reader.onload = (f) => {
                 setShopState({
                  ...shopState,
                  postFile: uploadFile,
                 });
                };
                reader.readAsDataURL(file);
                fileValue = fileValue + e.currentTarget.value;
                if (e.currentTarget.files.length) {
                 document
                  .querySelector('.image-select')
                  .classList.remove('d-none');
                 document.querySelector(
                  '.fileSaveIndex',
                 ).innerText = `${e.currentTarget.files.length} Photos`;
                }
               }
              });
             }
            }}
            hidden
            type="file"
           />
          </div>
         </div>
         <div className="buttons">
          <button
           data-bs-dismiss="modal"
           type="submit"
           className="btn btn-primary">
           Add Product
          </button>
         </div>
        </form>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}

const mapStateToProps = (state) => {
 return {
  category: state.productCategoryReducer,
  page: state.pageReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  productCategory: () => {
   dispatch(getProductCategory());
  },
  productCreate: (productState) => {
   dispatch(createProduct(productState));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
