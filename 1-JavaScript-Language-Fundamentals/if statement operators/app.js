// if(something is true){
//     do something
// }else{
//     do something else
// }

//const id = prompt();
const id = '100';

// //Equal to
// if(id == 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// //Not equal to
// if(id != 100){
//     console.log('INCORRECT');
// } else {
//     console.log('CORRECT');
// }

// //Equal to value and type
// if(id === 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// //Not Equal to value and type
// if(id !== 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else{
//     console.log('NO ID');
// }

//Greater of less then

// if (id <= 200){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// if else

const color = 'yellow';

// if(color === 'red'){
//     console.log('color is red')
// }else if(color === 'blue'){
//     console.log('color is blue');
// }else if(color === 'pink'){
//     console.log('color is pink')
// }else {
//     console.log('color is yellow')
// }

//Logical Operator

const name = 'Amadi';
const age = 28;


// AND &&
if(age > 0 && age < 12 ){
    console.log(name + ' is a child');
}else if(age > 13 && age <= 19){
    console.log(`${name} is a teenager`);
}else {
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

//TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

//WITHOUT BRACES
if(id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');