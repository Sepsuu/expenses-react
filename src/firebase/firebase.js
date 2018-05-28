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
const database = firebase.database();



export { firebase, database as default };



// database.ref('expenses')
// .on('value')
// .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses')
// .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'oii',
//     note: '',
//     amount: 1090,
//     createdAt: 115522

// });

// database.ref('expenses').push({
//     description: 'rent',
//     note: '',
//     amount: 55220,
//     createdAt: 8855225588

// });

// database.ref('expenses').push({
//     description: 'phone bill',
//     note: '',
//     amount: 456456,
//     createdAt: 114477114477

// });
