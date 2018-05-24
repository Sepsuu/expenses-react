const person = {
    name: 'Severi',
    age: 23,
    location: {
        city: 'Tampere',
        tempereture: 25
    }
};

const {name, age} = person;

console.log(`${name} is ${age}`);





//
// Array destructuring
//

const address = [, , 'pennsylvania'];
const [street, city, state = 'New York', zip] = address
console.log(`You are in ${state}`);


const item = ['Coffee (hot)', '2.00€', '2.50€', '2.75€'];

const [product, small, medium, large] = item;

console.log(`A medium ${product} costs ${medium}`);
