exports.updateStudents = async (db, FieldValue) => {
  const studentRef = db.collection('users').doc('students');
  await studentRef.update({
    first: 'student1',
    last: 'name1',
    gender: 'male'
  });

  const res = await studentRef.update({
    timestamp: FieldValue.serverTimestamp()
  })
  const arrayForUnion = ['union1', 'union2']
  // const unionRes = await studentRef.update({
  //   regions: FieldValue.arrayUnion(...arrayForUnion)
  // })
}