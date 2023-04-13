const person = {
    firstName: 'Emmanuel',
    lastName: 'Amadi',
    age: 28,
    email: 'emmanuelamadi111@gmail.com',
    hobbies: ['coding', 'music', 'reading the bible'],
    address: {
        city: 'Maryland',
        state: 'Lagos',
        county: 'Nigeria'
    },
    getBirthYear: function (){
        return 2023 - this.age;
    }
}

let val;
val= person;
//get specif(property) firstName: string
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val  = person.address.state;
val = person.getBirthYear();


console.log(val);

const people = [
    {name: 'James', age: 39},
    {name: 'Mike', age: 43},
    {name: 'Amadi', age: 28}
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name, people[i].age);
}