import React, { Component } from 'react';

import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  handleImageClick = () => {
    this.props.onItemClick(this.props.urlLarge);
  };

  render() {
    const { URL, urlLarge} = this.props;

    return (
      <div onClick={this.handleImageClick}>
        <img className={css.ImageGalleryItemImage} src={URL} alt={urlLarge}/>
      </div>
    );
  }
}
