import React, { Component } from 'react';
import FirebaseAuth from 'react-firebase-auth'

export default class FBAuth extends Component{
    render(){
        return(
            <div>
                <FirebaseAuth
                    twitter
                    github
                    email
                    google={{ scopes: ['https://www.googleapis.com/auth/plus.login'] }}
                    facebook={{ scopes: [ 'public_profile', 'email', 'user_likes', 'user_friends' ] }}
                    // 
                    tosUrl='https://www.google.com'
                    apiKey='AIzaSyC_P6AcxmFQgkkP3SpBoVFH7hpD1zlsNCE'
                    authDomain='threaded-ab54f.firebaseapp.com'
                    databaseURL='https://threaded-ab54f.firebaseio.com'
                    storageBucket='threaded-ab54f.appspot.com'
                    // 
                    onAuthStateChanged={user => {
                        console.log(user)
                    }}
                />
            </div>
        );
    }
}

