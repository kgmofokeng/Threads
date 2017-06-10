import React from 'react';

var Carousel = require('nuka-carousel');

const   styles = ({
  image: {
    width: 100,
    height: 100
  }
});

export default class Topics extends React.Component {
   render() {
      return (
         <div>
            <Carousel 
              slidesToShow={4} slidesToScroll={1} slideWidth="300px" cellSpacing={1}
              wrapAround = {true} decorators={Carousel.getDefaultProps().decorators.slice(0, 2)} >
              <img style={styles.image} src={require('./images/politics.png')} alt=""/>
              <img style={styles.image} src={require('./images/sports.png')} alt=""/>
              <img style={styles.image} src={require('./images/social.jpeg')} alt=""/>
              <img style={styles.image} src={require('./images/environment.jpg')} alt=""/>
              <img style={styles.image} src={require('./images/entertainment.jpeg')} alt=""/>
              <img style={styles.image} src={require('./images/world.png')} alt=""/>
              <img style={styles.image} src={require('./images/science.png')} alt=""/>
            </Carousel>
         </div>
      );
   }
}