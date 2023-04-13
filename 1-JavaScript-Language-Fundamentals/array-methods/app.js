// create some array
// array of number

const number  = [45,78,43,10,84,58,45,55];
const number2 = new Array(44,12,1,0,14,56,45);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;
val = mixed;

//get array length
val = number.length;
//check if is array
val = Array.isArray(number);
//Get single number
val = number[3];
val = number [0];
//Insert into Array
//number[2] = 893;
// val = number.indexOf(893);

//MUTATING ARRAYS
// number.push(480); // add to the end
// number.unshift(1);// add the the beginning
// number.pop(); //remove from the end
// number.shift(); //remove from the beginning
// number.splice(1,1); // to remove from any where in the array
// number.reverse();// to reverse

//concatenate array
// val = number.concat(number2);
// //sorting array
// val = fruit.sort();
// val = number.sort();

// //Use the compare function
// val = number.sort(function(x, y){
//     return x - y;
// });

// //reverse sort
// val = number.sort(function(x, y){
//     return y - x;
// });

//find
function over50(num){
    return num > 50;
}

val = number.find(over50);

console.log(number);
console.log(val);