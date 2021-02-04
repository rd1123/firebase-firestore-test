exports.getStudents = async (db) => {
  const getCollection = await db.collection('users').get();
  const getDocument = await db.collection('users').doc('students').get();
  return getDocument;
}