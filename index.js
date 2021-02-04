const { credential } = require('firebase-admin');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();


// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDERID,
//   appId: process.env.APP_ID
// }

const studentsRef = db.collection('users').doc('students');
// => set
// await studentsRef.set({
//   first: 'Ding1',
//   last: 'Nick1',
//   gender: 'male'
// }).then(docRef => {
//   console.log('Document written with ID: ', docRef.id);
// }).catch(e => {
//   console.log('Document got error: ', e);
// });

// => update
studentsRef.update({
  first: 'Ding2',
  last: 'Nick2',
  gender: 'female'
}).then(updateRef => {
  console.log('Document update ref success => ', updateRef.writeTime);
}).catch(e => {
  console.log('Document update not work => ', e);
})
