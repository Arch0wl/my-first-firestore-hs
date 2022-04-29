import { restaurantsCol  } from "./connectDb.js"

const restaurant = {
    name: 'Mister 01',
    address: '555 N Federal Hwy, Boca Raton',
    ciusine: 'Italian',
    rating: 4.9,
    phone: '(786) 677-2903',
} // creating an object -- in this case specific restaurant wwe want to add

restaurantsCol.add(restaurant) // adding the restaurant to our restaurants collection 
.then(doc => console.log('Created restaurant', doc.id)) // handle resolve 
.catch(err => console.error(err)) // handle reject   

const restaurant2 = {
    name: 'Bolay',
    adress: '7060 W Palmetto Park Rd, Boca Raton',
    cuisine: 'American',
    rating: 4.6,
}

async function addRestaurant(data){
    try{
    const doc = await restaurantsCol.add(data) // add restaurant to collection
    console.log('Created restaurant', doc.id) // handle resorve 
    } catch(err) {
      console.error(err)   
    }
}

addRestaurant(restaurant2) 


