// primitive

//string
const name = 'Emmanuel Amadi';
console.log(name);
console.log(typeof name);

//Number
const age = 30;
console.log(age);
console.log(typeof age);

//Boolean
const hasKids = false;
console.log(hasKids);
console.log(typeof hasKids);

//null
const car = null;
console.log(typeof car);
// undefine
let test;
console.log(typeof test);

//Symbol
const syn = Symbol();
console.log(typeof syn);

//REFERENCE TYPE
//array
const hobbies = ['movies', 'musics', 'food'];
console.log(typeof hobbies);

//Object literal
const address = {
    city: 'lagos',
    country: 'Nigeria',
    name: 'Emmanuel Amadi',
    age: 28
}
console.table(address);
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);
