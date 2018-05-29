import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABSE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STOERAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
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
