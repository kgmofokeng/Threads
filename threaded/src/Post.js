import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

var Modal = ReactBootstrap.Modal;

const   styles = ({
  circularButton:{
    borderRadius: 25,
    position: "fixed",
    bottom: 10,
    right: 35
  }
});

export default class PostModal extends Component {
  constructor(props, context) {
  super(props, context);

  this.state = {
    showModal: false
  };

  this.open = this.open.bind(this);
  this.close = this.close.bind(this);
  }


  open() {
    this.setState({showModal: true});
  }

  close() {
    this.setState({showModal: false});
  }

  render() {
    return(
      <div>
        <ReactBootstrap.Button onClick={this.open} bsStyle="success" bsSize="small" style={styles.circularButton}>
          <ReactBootstrap.Glyphicon glyph="edit"/>
        </ReactBootstrap.Button>
        {/*<ReactBootstrap.Button onClick={this.open}>Show Modal</ReactBootstrap.Button>*/}
        <div>
          <Modal className="modal-container" 
            show={this.state.showModal} 
            onHide={this.close}
            animation={true} 
            bsSize="small">

            <Modal.Header closeButton>
              <Modal.Title>POST THREAD</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              Body.........
            </Modal.Body>

            <Modal.Footer>
              <ReactBootstrap.Button onClick={this.close}>Close</ReactBootstrap.Button>
              <ReactBootstrap.Button bsStyle="primary">POST</ReactBootstrap.Button>
            </Modal.Footer>         
          </Modal> 
        </div>
      </div>
    );
  }
}