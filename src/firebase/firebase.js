import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default };

// database.ref('notes').push({
//   title: 'course topics',
//   body: 'react native, angular'
// });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
      
//       expenses.push({
//         id: childSnapshot.key, 
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').on('child_removed',(snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot)=> {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   }); 
//   console.log(expenses);  
// });


// database.ref('notes/-LE3Gq5lY3aHoTaDZMAd').update({
//   body: 'Buy food'
// });

// database.ref('expenses').push({
//   description: 'gum',
//   note: '',
//   amount: '.99',
//   createdAt: '125'
// });
// database.ref('expenses').push({
//   description: 'rent',
//   note: '',
//   amount: '2000',
//   createdAt: '450'
// });
// database.ref('expenses').push({
//   description: 'coffee',
//   note: '',
//   amount: '3',
//   createdAt: '0'
// });


// const firebaseNotes = {
//   notes: {
//     apoiaste: {
//       body: 'This is my note', 
//       title: 'First note'
//     },
//     addffaloiaste: {
//       body: 'This is my note', 
//       title: 'First note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   body: 'This is my note', 
//   title: 'First note'
// },{
//   id: '12',
//   body: 'This is my note', 
//   title: 'First note'
// }];

// database.ref().set(notes);


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });



// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// });

// setTimeout(()=> {
//   database.ref('age').set(28);
// }, 3500);
// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data ', e);
//   });
// database.ref().set({
// name: 'Jesse Peterman',
// age: 32,
// stressLevel: 6,
// job: {
// title: 'Software developer',
// company: 'Google'
// },
// location: {
// city: "San Francisco",
// country: "United States"
// }
// }).then(() => {
// console.log('Data is saved');
// }).catch((e)=> {
// console.log('error: ', e);
// })
// 
// database.ref('attributes').set({height: "6'4\'", weight: '180lbs'}).then(() =>{
// console.log('changed attributes');
// }).catch((e) => {
// console.log('error ', e);
// })
// 
// database.ref().update({
// stressLevel: 9,
// 'job/company': 'Amazon',
// 'location/city': 'Seattle'
// });
// database.ref()
//   .remove()
//   .then(() => {
//      console.log('data deleted');
//   }).catch((e) => {
//       console.log('Error: Problem deleting data. ', e);
//     });


// console.log('I made a request to change the data.');