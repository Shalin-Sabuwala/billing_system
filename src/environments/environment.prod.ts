import * as firebase from 'firebase';

export const firebaseConfig = {
  production: true,
  apiKey: "AIzaSyCstD8X2VwqX0lKz5EXwouK9Q9Nskcg5jk",
    authDomain: "billing-system-6e144.firebaseapp.com",
    databaseURL: "https://billing-system-6e144.firebaseio.com",
    projectId: "billing-system-6e144",
    storageBucket: "billing-system-6e144.appspot.com",
    messagingSenderId: "408572533347",
    appId: "1:408572533347:web:2cd8fb810345010c16b656"
};


firebase.initializeApp(firebaseConfig);
