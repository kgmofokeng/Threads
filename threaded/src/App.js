import React, { Component } from 'react';
import './App.css';

var Carousel = require('nuka-carousel');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={require('./images/thread.jpeg')} alt=""/>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>THREADED</h2>
        </div>
        <Carousel 
              slidesToShow={3} slidesToScroll={1} slideWidth="300px" cellSpacing={20}
              wrapAround = {true} decorators={Carousel.getDefaultProps().decorators.slice(0, 2)} >
          <img src={require('./images/politics.png')} alt=""/>
          <img src={require('./images/sports.png')} alt=""/>
          <img src={require('./images/social.jpeg')} alt=""/>
          <img src={require('./images/environment.jpg')} alt=""/>
          <img src={require('./images/entertainment.jpeg')} alt=""/>
          <img src={require('./images/world.png')} alt=""/>
          <img src={require('./images/science.png')} alt=""/>
        </Carousel>
      </div>
    );
  }
}

export default App;
