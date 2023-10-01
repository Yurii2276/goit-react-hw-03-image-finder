import React, { Component } from 'react';

import css from './App.module.css';

import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import { findPictures } from '../servises/Api';

export class App extends Component {
  state = {
    pictures: null,
    isLoading: false,
    error: null,
    picThemSearch: null,
    loadMore: false,
    page: 1,
    maxPage: null,
    showModal: false,
    selectedImage: null,
  };

  LoadThemOfPictures = async () => {
    try {
      this.setState({ isLoading: true });
      const pictures = await findPictures(this.state.picThemSearch);
      this.setState({
        pictures: pictures,
        maxPage: Math.ceil(pictures.totalHits / 12),
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(_, prevState) {
    if (prevState.picThemSearch !== this.state.picThemSearch || 
      prevState.page !== this.state.page) {
      this.LoadThemOfPictures();
    }
  }

  handleSubmitInput = inputData => {
    this.setState({
      picThemSearch: inputData,
      page: 1,
      // maxPage: null,
      // pictures: null,
    });

    // if (this.state.picThemSearch) {
    //   this.setState({
    //     // isLoading: false,
    //     // picThemSearch: null,
    //     // page: 1,
    //     // maxPage: null,
    //     // pictures: null,
    //   })};

      // if (inputData === "") {
      //   this.setState({
      //     picThemSearch: null,
      //     page: 1,
      //     maxPage: null,
      //     pictures: null,
      //   })};

  };

  handleLoadMore = async () => {
    try {
      const nextPage = this.state.page + 1;
      this.setState({ isLoading: true });

      const newPictures = await findPictures(
        this.state.picThemSearch,
        nextPage
      );
      console.log('new get array', newPictures);
      
      const addPictures = [...this.state.pictures.hits, ...newPictures.hits];
      console.log('symmarni array', addPictures);

      this.setState({ pictures: { hits: addPictures }, page: nextPage });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleImageClick = imageURL => {
    this.setState({ selectedImage: imageURL, showModal: true });
    document.body.style.overflow = 'hidden';
  };

  handleModalClose = () => {
    this.setState({ selectedImage: null, showModal: false });
    document.body.style.overflow = 'auto';
  };

  render() {
    return (
      <div>
        <Searchbar onData={this.handleSubmitInput} />

        {this.state.error && <p className={css.error}>{this.state.error}</p>}

        {this.state.picThemSearch && (
          <ImageGallery
            pictures={this.state.pictures}
            onImageClick={this.handleImageClick}
          />
        )}

        <Loader
          visible={this.state.isLoading}
          className={css.galleryContainer}
        />

        {this.state.page < this.state.maxPage && !this.state.loadMore && (
          <Button
            disabled={this.state.loadMore}
            handleClick={this.handleLoadMore}
          />
        )}

        {this.state.showModal && (
          <Modal
            image={this.state.selectedImage}
            onRequestClose={this.handleModalClose}
          />
        )}
      </div>
    );
  }
}
