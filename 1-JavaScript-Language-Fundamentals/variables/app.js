// // var, let, const

// var name = 'john dev';
// console.log(name);
// name = 'james job'; 
// console.log(name);

// //init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// /* variable convention in javaScript 
// a variable can include number, letter, _ , money sign
// they also can not start with a number
// you can start money sign but its not really advisable you do so.
// you can also start with _ alo not advisable , this is mostly used in a private variable
// */

// //multi word variables
// var firstName = 'Amadi'; //camel case
// var first_name = 'Emmanuel'; // Underscore
// var FirstName = 'james'; // pascal case
// var firstname;

// let name = 'john dev';
// console.log(name);
// name = 'james job';
// console.log(name);

const name = 'john dev';
console.log(name);
//can not reassign
// name = 'james job';
// console.log(name);
//have to assign a value while you are using const
//  const greeting;

// const can be used for variables you don't have to reassign 
const person = {
    name: 'john',
    age: 30,
    sex: 'male'
}
person.name = 'Emmanuel'; // the items in the object can be reassigned but not the object.
person.time = 10; //items can be added to also
person.class = 'javaScript';

console.log(person);
console.log(person.time);

const numbers = [[1,2,3,6],[4,5,6,7]];
numbers.push([9,3,6,2]);
console.table(numbers);





