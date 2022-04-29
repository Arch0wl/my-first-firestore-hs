
import admin from "firebase-admin"; // import the firebase library of tools 

import serviceAccount from './credentials.js'; // import our credentials to connect to firebase

admin.initializeApp({ // connect to our our firebase project 
  credential: admin.credential.cert(serviceAccount) // creating a certificate from our credentials
});

// now we are connecting to OUR Firebse projects & related services

const db = admin.firestore(); // created a shortcut to access the Firestore database

const restaurantsCol = db.collection('restaurants'); // shortcut to point to our collection

// delete KXjP2slbUms6vD0eq1i0 
restaurantsCol.doc('KXjP2slbUms6vD0eq1i0').delete()
.then(res => console.log('Success deleting KXjP2slbUms6vD0eq1i0!!'))
.catch(err => console.log('Error! KXjP2slbUms6vD0eq1i0:', err))
restaurantsCol.doc('E0ZBqGTlUh8beHWtbUBS').delete() 
.then(res => console.log('Success deleting E0ZBqGTlUh8beHWtbUBS!!'))
.catch(err => console.log('Error! E0ZBqGTlUh8beHWtbUBS:', err))  