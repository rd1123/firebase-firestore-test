const { createStudents } = require("./src/createStudents");
const { updateStudents } = require("./src/updateStudents");
const { getStudents } = require('./src/getStudents');
const { deleteStudents } = require("./src/deleteStudents");

const { credential } = require('firebase-admin');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;

// ==> authentication



// => set
// createStudents(db);

// => update
// updateStudents(db, FieldValue);

// => get
// getStudents(db)
//   .then(students => {
//     console.log(students.data());
//   }).catch(e => {
//     console.log(e);
//   })

// => delete
// deleteStudents(db);

// get
// const students = db.collection('users').doc('students');
// const observer = students.onSnapshot(snapshot => {
//   console.log(`change: ${snapshot}`);
// }, err => {
//   console.log(`Error ${err}`);
// });

// studentsRef.update({
//   first: 'Ding3',
//   last: 'Nick3',
//   gender: 'female'
// }).then(updateRef => {
//   console.log('Document update ref success => ', updateRef.writeTime);
// }).catch(e => {
//   console.log('Document update not work => ', e);
// })
