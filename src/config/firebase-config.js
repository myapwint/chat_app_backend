const admin = require('firebase-admin');

// Replace with the pat{}
const serviceAccount = rocess.env.Service_Account;

try{
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  console.log('Firebase Admin SDK initialized successfully');
  
}catch(error){
console.error('Firebase Admin SDK initialization error:', error);
}

module.exports = admin;
