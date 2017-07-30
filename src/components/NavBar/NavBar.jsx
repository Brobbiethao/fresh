import React, { Component } from 'react';
import { connect } from 'react-redux';

import './NavBar.css';


class NavBar extends Component {

  render() {
    return (
      <div className="navBar">
        <h2>This is my NavBar, there are many like it but this one is mine</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, null)(NavBar)
