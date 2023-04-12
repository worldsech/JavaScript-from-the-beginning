const num1 = 159;
const num2= 23;
let val;

//simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 / num2;
val = num1 * num2;
val = num1 % num2;

//Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.6);
val = Math.ceil(2.4); //the round up
val = Math.floor(4.8); // to round down
val = Math.sqrt(43);
val = Math.abs(-2);
val = Math.pow(5,2);
val = Math.min(3,65,34,53,23,64,5);
val = Math.max(3,65,34,53,23,64,5);
val = Math.random(); // this is give a decimal and less than 1

val = Math.ceil(Math.random() * 15 +1) // this will also give you decimals until you round it up or down


console.log(val);