import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }
  
  updatedText (text) {
    this.setState({text}) 
  }
  
  searchPost() {
    this.props.searchPostFn(encodeURIComponent(this.state.text))
    this.setState({text: ''})
  }
  
  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input
            value={this.state.text}
            placeholder="Search by name"
            type="text"
            onChange={e => this.updatedText(e.target.value)}
          />

          <SearchIcon id="Search__icon" onClick={() => this.searchPost(this.state.text)}/>
        </div>
        
      </section>
    )
  }
}