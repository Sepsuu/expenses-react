import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD8b2tmmOWcFtTTyo9ZW-Scw6kJcz2iRmM",
    authDomain: "expenses-b8846.firebaseapp.com",
    databaseURL: "https://expenses-b8846.firebaseio.com",
    projectId: "expenses-b8846",
    storageBucket: "expenses-b8846.appspot.com",
    messagingSenderId: "651446503598"
  };

firebase.initializeApp(config);


firebase.database().ref().set({
    name: 'Severi Peltonen',
    age: 15,
    yes: true,
    location: {
        city: 'New York',
        country: 'usa'
    }
});