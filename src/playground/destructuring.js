// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// }

// const  { name, age } = person;
// console.log(`${name} is ${age}.`);

// const {city, temp} = person.location;

// if(city && temp){
//   console.log(`It's ${temp} in ${city}`)
// }


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//   }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher; 

// console.log(publisherName);)

// array destructuring

const address = ['1299 S Juniper Street', null, 'Pennsylvania', '19147'];

const [street, city = 'Mission Viejo', state, zipcode] = address;

console.log(`You are in ${city} ${street}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '2.75'];

const [coffee, , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);