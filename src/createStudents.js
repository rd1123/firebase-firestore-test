exports.createStudents = async (db) => {
  const docRef = db.collection('users').doc('teacher');
  return await docRef.set({
    first: "teacher1",
    last: "lastName1",
    gender: "female"
  })
}