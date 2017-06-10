import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

var Modal = ReactBootstrap.Modal;

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
        showModal: false,
        showLogin: false,
        showRegister: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.showLogin = this.showLogin.bind(this);
    this.closeLogin = this.closeLogin.bind(this);

    this.showRegister = this.showRegister.bind(this);
    this.closeRegister = this.closeRegister.bind(this);
  }


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
        <ReactBootstrap.Button onClick={this.open} bsStyle="normal" bsSize="small" style={styles.user}>
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
                                <ReactBootstrap.ControlLabel>USERNAME</ReactBootstrap.ControlLabel>
                                <ReactBootstrap.FormControl type="text" placeholder="USERNAME" />
                            </ReactBootstrap.FormGroup>

                            <ReactBootstrap.FormGroup controlId="password">
                                <ReactBootstrap.ControlLabel>PASSWORD</ReactBootstrap.ControlLabel>
                                <ReactBootstrap.FormControl type="text" placeholder="PASSWORD" />
                            </ReactBootstrap.FormGroup>

                            <ReactBootstrap.Button type="submit">
                                Submit
                            </ReactBootstrap.Button>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                    <ReactBootstrap.Button onClick={this.closeLogin}>Close</ReactBootstrap.Button>
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
                        <form>
                            <ReactBootstrap.FormGroup controlId="Name">
                                <ReactBootstrap.ControlLabel>NAME</ReactBootstrap.ControlLabel>
                                <ReactBootstrap.FormControl type="text" placeholder="NAME" />
                            </ReactBootstrap.FormGroup>

                            <ReactBootstrap.FormGroup controlId="lastName">
                                <ReactBootstrap.ControlLabel>LAST NAME</ReactBootstrap.ControlLabel>
                                <ReactBootstrap.FormControl type="text" placeholder="LAST NAME" />
                            </ReactBootstrap.FormGroup>

                            <ReactBootstrap.FormGroup controlId="userName">
                                <ReactBootstrap.ControlLabel>USERNAME</ReactBootstrap.ControlLabel>
                                <ReactBootstrap.FormControl type="text" placeholder="USERNAME" />
                            </ReactBootstrap.FormGroup>

                            <ReactBootstrap.FormGroup controlId="password">
                                <ReactBootstrap.ControlLabel>PASSWORD</ReactBootstrap.ControlLabel>
                                <ReactBootstrap.FormControl type="text" placeholder="PASSWORD" />
                            </ReactBootstrap.FormGroup>

                            <ReactBootstrap.FormGroup controlId="password">
                                <ReactBootstrap.ControlLabel>RE-ENTER PASSWORD</ReactBootstrap.ControlLabel>
                                <ReactBootstrap.FormControl type="text" placeholder="RE-ENTER PASSWORD" />
                            </ReactBootstrap.FormGroup>

                            <ReactBootstrap.Button type="submit">
                                Submit
                            </ReactBootstrap.Button>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                    <ReactBootstrap.Button onClick={this.closeRegister}>Close</ReactBootstrap.Button>
                    </Modal.Footer>         
                </Modal> 
            </Modal.Body>

            <Modal.Footer>
              <ReactBootstrap.Button onClick={this.close}>Close</ReactBootstrap.Button>
            </Modal.Footer>         
          </Modal> 
        </div>
      </div>
    );
  }
}
