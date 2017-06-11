import React, { Component } from 'react';
import * as firebase from 'firebase';

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

firebaseRef.child("USERS").child("Kgomo").set("Sinclair");

export default class   Firebase extends Component{
    render(){

        return(
            <div></div>
        );
    }
}