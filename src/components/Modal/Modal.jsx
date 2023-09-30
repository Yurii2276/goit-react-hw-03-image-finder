import React, { Component } from 'react';

import css from './Modal.module.css';

export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onRequestClose();
    }
  };

  handleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onRequestClose();
    }
  };


  render() {
    const { image } = this.props;

    return (

      <div className={css.Overlay} onClick={this.handleClick}>
        <div className={css.Modal}>
          <img className={css.modalImage} src={image} alt={image} />
        </div>
      </div>
    );
  }
}
