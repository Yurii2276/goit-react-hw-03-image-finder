import React, { Component } from 'react';

import { ThreeDots } from 'react-loader-spinner';

import css from './Loader.module.css'

export default class Loader extends Component {
  

  render() {
    const { visible } = this.props;

    return (
      <div className={css.LoaderContainer}>
        <ThreeDots
          height="70"
          width="70"
          radius="9"
          color=" #3f51b5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={visible}
        />
      </div>
    );
  }
}
