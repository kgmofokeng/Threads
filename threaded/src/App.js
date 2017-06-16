import React, { Component } from 'react';
import './App.css';

var Carousel = require('./Carousel').default;
var Post = require('./Post').default;
var TopNav = require('./TopNav').default;

const   styles = ({ 
  spacer: {
    height: 100
  },
  spacerSmall: {
    height: 20
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <TopNav/>
          <img src={require('./images/thread.jpeg')} alt=""/>
          <h2>THREADED</h2>
          <div style={styles.spacer}></div>
        </div>
        <div style={styles.spacer}></div>
        <div>
        <Carousel/>
        <Post/>
        </div>
      </div>
    );
  }
}


export default App;
