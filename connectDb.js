import admin from "firebase-admin"; // import the firebase library of tools 

import serviceAccount from './credentials.js'; // import our credentials to connect to firebase

admin.initializeApp({ // connect to our our firebase project 
  credential: admin.credential.cert(serviceAccount) // creating a certificate from our credentials
});
const db = admin.firestore(); // created a shortcut to access the Firestore database

export const restaurantsCol = db.collection('restaurants'); // shortcut to point to our collection

