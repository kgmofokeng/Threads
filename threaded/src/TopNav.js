import React from 'react';

var Profile = require('./User').default;

export default class TopNav extends React.Component {
  render(){
    return (
      <div>
        <Profile/>
      </div>
    );
  }
}