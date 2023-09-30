import React, { Component } from 'react';

import css from './Button.module.css';

export default class Button extends Component {
  render() {
     const { handleClick, disabled } = this.props;
    return (
      <div className={css.ButtonContainer}>
        <button 
        className={css.Button} 
        onClick={handleClick} 
        disabled={disabled}
        >Load more</button>
      </div>
    );
  }
}
