const admin = require('firebase-admin');

// Replace with the path to your service account JSON file
const serviceAccount = require('./nus-chat-app-397c80246499.json');

try{
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  console.log('Firebase Admin SDK initialized successfully');
  
}catch(error){
console.error('Firebase Admin SDK initialization error:', error);
}

module.exports = admin;
