import React, { Component } from 'react';

import css from './ImageGallery.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    const { pictures, onImageClick } = this.props;

    const arrayPictures = pictures?.hits || [];
    const showPic = Array.isArray(arrayPictures) && arrayPictures.length;

    return (
      <div>
        <ul className={css.ImageGallery}>
          {showPic ?
            arrayPictures.map((picture, index) => (
              <li key={`${picture.id}-${index}`}>
                <ImageGalleryItem URL={picture.webformatURL} 
                urlLarge={picture.largeImageURL}
                onItemClick={onImageClick}/>
              </li>
            )) : ''}
        </ul>
      </div>
    );
  }
}
