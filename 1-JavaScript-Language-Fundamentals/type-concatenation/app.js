let val;

//number to string
val = String(53456);
val = String(4+4);
// Bool to string
val = String(true);
// Date to a string
val = String(new Date());
val = String([1,2,3,4]);

//toString()
val = (5).toString();
val = (false).toString();

//string to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3,4]);

val = parseInt('100.43'); //output is 100.00
val = parseFloat('100.43');



 //output
 console.log(val);
 console.log(typeof val);
 //console.log(val.length);
 console.log(val.toFixed(2))

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);