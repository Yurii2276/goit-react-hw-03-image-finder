import React, { Component } from 'react';

import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    searchField: '', 
  };

  handleInputChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  
  handleSearchSubmit = (e) => {
    e.preventDefault();
    const { searchField } = this.state; 
    this.props.onData(searchField); 

    this.setState({ searchField: '' });
  };

  render() {
    const { onChange } = this.props;

    return (
        <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSearchSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
      
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchField}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
