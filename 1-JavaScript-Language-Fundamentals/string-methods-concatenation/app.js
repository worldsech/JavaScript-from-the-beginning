const firstName = 'Emmanuel';
const lastName = 'Amadi';
const age = 28;
const str = 'That\'s awesome, I can\'t wait';

let cal;

cal = firstName + lastName;

//concatenation;
cal = firstName + ' ' + lastName;

//Append
cal ='Emmanuel ';
cal += 'James'

cal = 'Hello, my name is '+ firstName + ' and i am '+ age;

//Escape
cal = 'That\'s awesome, I can\'t wait';
//length
cal = firstName.length;

//concat()
cal = firstName.concat(' ', lastName);

//change case
cal = firstName.toUpperCase();
cal = lastName.toLowerCase();

cal = firstName[3];

//indexOf()
cal =firstName.indexOf('m');
cal = firstName.lastIndexOf('e');

//charAt()
cal = firstName.charAt(3);
//get the last char

cal = firstName.charAt(firstName.length - 1);

//substring
cal = firstName.substring(0,4)
//slice
cal = firstName.slice(0,4)
cal = lastName.slice(-4);

//split()
cal = str.split(' ');

//replace();
cal = str.replace('I', 'Amadi');

//include
cal = str.includes('awesome');



console.log(cal);