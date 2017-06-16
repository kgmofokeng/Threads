import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import * as firebase from 'firebase';

var Modal = ReactBootstrap.Modal;
var FirebaseAuth = require('./FirebaseAuth').default;

var config = {
    apiKey: "AIzaSyC_P6AcxmFQgkkP3SpBoVFH7hpD1zlsNCE",
    authDomain: "threaded-ab54f.firebaseapp.com",
    databaseURL: "https://threaded-ab54f.firebaseio.com",
    projectId: "threaded-ab54f",
    storageBucket: "threaded-ab54f.appspot.com",
    messagingSenderId: "909346088826"
};
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();


firebaseRef.on('value', snap => console.log(snap.val()));

const   styles = ({
  spacerSmall: {
    height: 20
  },
  user:{
    position: "absolute",
    right: 30,
    top: 10
  }
});

export default class UserModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      //Modal
        showModal: false,
        showLogin: false,
        showRegister: false
    };

    //Form Handlers
    this.handleSubmit = this.handleSubmit.bind(this);

    //Modal functions
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.showLogin = this.showLogin.bind(this);
    this.closeLogin = this.closeLogin.bind(this);

    this.showRegister = this.showRegister.bind(this);
    this.closeRegister = this.closeRegister.bind(this);
  }

  //FORM

  handleSubmit() {
    firebaseRef.child("USERS").child(document.getElementById('UserName').value).child("Name").set(document.getElementById('Name').value);  
    firebaseRef.child("USERS").child(document.getElementById('UserName').value).child("LastName").set(document.getElementById('LastName').value);
    firebaseRef.child("USERS").child(document.getElementById('UserName').value).child("Email").set(document.getElementById('Email').value);
    firebaseRef.child("USERS").child(document.getElementById('UserName').value).child("password").set(document.getElementById('Password').value);
    Event.preventDefault();
  }

  //MODAL
  open() {
    this.setState({showModal: true});
  }

  close() {
    this.setState({showModal: false});
  }

  showLogin() {
    this.setState({showLogin: true});
  }

  closeLogin() {
    this.setState({showLogin: false});
  }

  showRegister() {
    this.setState({showRegister: true});
  }

  closeRegister() {
    this.setState({showRegister: false});
  }

  render() {
    return(
      <div>
        <ReactBootstrap.Button onClick={this.open} bsStyle="default" bsSize="small" style={styles.user}>
          <ReactBootstrap.Glyphicon glyph="user"/>
        </ReactBootstrap.Button>
        <div>
          <Modal className="modal-container"  style={styles.user} 
            show={this.state.showModal} 
            onHide={this.close}
            animation={true} 
            bsSize="small">

            <Modal.Header closeButton>
              <Modal.Title>PROFILE</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <ReactBootstrap.Button onClick={this.showLogin} bsStyle="primary">LOGIN</ReactBootstrap.Button><br/>
                <div style={styles.spacerSmall}></div>
                <ReactBootstrap.Button onClick={this.showRegister} bsStyle="primary">REGISTER</ReactBootstrap.Button>

                <Modal 
                    style={styles.user} 
                    show={this.state.showLogin} 
                    onHide={this.closeLogin}
                    animation={true} 
                    bsSize="small">

                    <Modal.Header closeButton>
                    <Modal.Title>LOGIN</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <form>
                          <ReactBootstrap.FormGroup controlId="userName">
                              <ReactBootstrap.ControlLabel>EMAIL</ReactBootstrap.ControlLabel>
                              <ReactBootstrap.FormControl type="text" placeholder="EMAIL" />
                          </ReactBootstrap.FormGroup>

                          <ReactBootstrap.FormGroup controlId="password">
                              <ReactBootstrap.ControlLabel>PASSWORD</ReactBootstrap.ControlLabel>
                              <ReactBootstrap.FormControl type="text" placeholder="PASSWORD" />
                          </ReactBootstrap.FormGroup>

                          <ReactBootstrap.Button type="submit"  bsStyle={"success"}>
                              Submit
                          </ReactBootstrap.Button>
                      </form>
                      <FirebaseAuth/>
                    </Modal.Body>

                    <Modal.Footer>
                    <ReactBootstrap.Button onClick={this.closeLogin} bsStyle={"danger"}>Close</ReactBootstrap.Button>
                    </Modal.Footer>         
                </Modal>

                <Modal 
                    style={styles.user} 
                    show={this.state.showRegister} 
                    onHide={this.closeRegister}
                    animation={true} 
                    bsSize="small">

                    <Modal.Header closeButton>
                    <Modal.Title>REGISTER</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form onSubmit={this.handleSubmit}>
                            <ReactBootstrap.FormGroup controlId="Name">
                                <ReactBootstrap.ControlLabel>NAME</ReactBootstrap.ControlLabel>
                                <ReactBootstrap.FormControl
                                  id="Name"
                                  type="text" 
                                  placeholder="NAME" />
                            </ReactBootstrap.FormGroup>

                            <ReactBootstrap.FormGroup controlId="lastName">
                                <ReactBootstrap.ControlLabel>LAST NAME</ReactBootstrap.ControlLabel>
                                <ReactBootstrap.FormControl 
                                  id="LastName"
                                  type="text" 
                                  placeholder="LAST NAME" />
                            </ReactBootstrap.FormGroup>

                            <ReactBootstrap.FormGroup controlId="userName">
                                <ReactBootstrap.ControlLabel>USERNAME</ReactBootstrap.ControlLabel>
                                <ReactBootstrap.FormControl 
                                  id="UserName"
                                  type="text"
                                  placeholder="USERNAME" />
                            </ReactBootstrap.FormGroup>

                            <ReactBootstrap.FormGroup controlId="userName">
                                <ReactBootstrap.ControlLabel>EMAIL</ReactBootstrap.ControlLabel>
                                <ReactBootstrap.FormControl 
                                  id="Email"
                                  type="text" 
                                  placeholder="EMAIL" />
                            </ReactBootstrap.FormGroup>

                            <ReactBootstrap.FormGroup controlId="password">
                                <ReactBootstrap.ControlLabel>PASSWORD</ReactBootstrap.ControlLabel>
                                <ReactBootstrap.FormControl 
                                  type="text" 
                                  placeholder="PASSWORD" />
                            </ReactBootstrap.FormGroup>

                            <ReactBootstrap.FormGroup controlId="password">
                                <ReactBootstrap.ControlLabel>RE-ENTER PASSWORD</ReactBootstrap.ControlLabel>
                                <ReactBootstrap.FormControl
                                  id="Password" 
                                  type="text" 
                                  placeholder="RE-ENTER PASSWORD" />
                            </ReactBootstrap.FormGroup>

                            <ReactBootstrap.Button type="submit" bsStyle={"success"}>
                                Submit
                            </ReactBootstrap.Button>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                    <ReactBootstrap.Button onClick={this.closeRegister} bsStyle={"danger"}>Close</ReactBootstrap.Button>
                    </Modal.Footer>         
                </Modal> 
            </Modal.Body>

            <Modal.Footer>
              <ReactBootstrap.Button onClick={this.close} bsStyle={"danger"}>Close</ReactBootstrap.Button>
            </Modal.Footer>         
          </Modal> 
        </div>
      </div>
    );
  }
}