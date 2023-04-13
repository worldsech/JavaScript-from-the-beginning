const name = 'James';
const age = 27;
const job = 'Web Developer';
const city = 'Lagos';
let html;

//Without template strings (es5)
html = '<ul><li>Name: ' +name+ '</li><li>Age: ' +age+ '</li><li>Job: ' +job+ '</li><li>City: ' +city+ '</li></ul>'

html = '<ul>'+
        '<li>Name: ' +name+ '</li>' +
        '<li>Age: ' +age+ '</li>' +
        '<li>Job: ' +job+ '</li>' +
        '<li>City: ' +city+ '</li>'+
        '<ul>';

        //simple function
        function hello(){
            return 'Hello ' + name;
        };
        //with template string (es6)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Sum: ${2+age}</li>
        <li>Greeting: ${hello()}</li>
    </ul>
    <strong>${age > 30 ? 'Over 30' : 'Under 30'}</strong>
`;

document.body.innerHTML = html;