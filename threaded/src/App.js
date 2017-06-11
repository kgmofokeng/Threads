import React, { Component } from 'react';
import './App.css';

var Carousel = require('./Carousel').default;
var Post = require('./Post').default;
var TopNav = require('./TopNav').default;
//var Firebase = require('./FirebaseModule').default;

// var config = {
//           apiKey: "AIzaSyC_P6AcxmFQgkkP3SpBoVFH7hpD1zlsNCE",
//           authDomain: "threaded-ab54f.firebaseapp.com",
//           databaseURL: "https://threaded-ab54f.firebaseio.com",
//           projectId: "threaded-ab54f",
//           storageBucket: "threaded-ab54f.appspot.com",
//           messagingSenderId: "909346088826"
//         };
//         firebase.initializeApp(config);

//         var firebaseRef = firebase.database().ref();

//         firebaseRef.child("Sas").set("Some Value");


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
