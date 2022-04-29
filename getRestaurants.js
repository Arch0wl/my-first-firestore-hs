import { restaurantsCol } from './connectDb.js'

// restaurantsCol.get() // Get all restaurants 
//  .then(snapshot => {
//      // loop through all results
//      snapshot.docs.forEach(doc => console.log(doc.data()))
//  })
//  .catch(console.error) 

 restaurantsCol
.where('name', '==', 'Bolay').get()

 .then(snapshot => {
    // loop through all results
    snapshot.docs.forEach(doc => console.log(doc.data()))
})
.catch(console.error) 











