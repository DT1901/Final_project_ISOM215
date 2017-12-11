

import React, { Component } from 'react'
import '../styles/header.css'

export default class Header extends Component {
  render() {
    const { onClick } = this.props;
    return (
        <nav className="header navbar navbar-default navbar-static-top">
          <div>
            <h1 className="book">
              Book Searcher
            </h1>
          </div>

          <div className="container-fluid">
            <div>
              <img className="image" src={'http://ia802701.us.archive.org/zipview.php?zip=/29/items/olcovers615/olcovers615-L.zip&file=6155644-L.jpg'}/>
            </div>
            <div>
              <button className="btn btn-default" onClick={onClick}> Load Shakespeare's Books </button>
            </div>
          </div>
        </nav>
    )
  }
}


