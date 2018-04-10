// TASK 1

const a = "Hello";
const b = "World";
const c = (`${a} ${b}`);

console.log(c);


//TASK 2
const multiply = (x=1, y=1) => x * y

console.log(multiply(3,4));


//TASK 3
const average = (...args) => args.reduce((sum, item) => sum + item, 0)/args.length;

console.log(average(2,7,8));


//TASK 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//TASK 5
const array1 = [1, 4, 'Iwona', false, 'Nowak'];
const[, , firstName, , lastName] = array1;

console.log(`The first name is: ${firstName}`);
console.log(`The last name is: ${lastName}`);