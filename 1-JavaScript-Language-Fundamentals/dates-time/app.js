let val;

const today = new Date();
let birthday = new Date('11-06-1995 11:6:45');
birthday =new Date('9/16/2007');



val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val =today.getHours();
val = today.getSeconds();
val = today.getTime();

//date setting
birthday.setMonth(2);
birthday.setFullYear(2050);
birthday.setHours(4);
birthday.setDate(06);
birthday.setMinutes(30);
console.log(birthday);