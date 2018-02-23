import React, { Component } from 'react';
import { connect } from 'react-redux';
import router from './router.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (!state) {
    return {};
  }
  return state;
}

export default connect(mapStateToProps, {})(App);
