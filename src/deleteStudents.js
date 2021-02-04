exports.deleteStudents = async (db) => {
  const FieldValue = db.FieldValue;
  await db.collection('users').doc('students').update({
    gender: FieldValue.delete()
  });
}