
//Arithmetic Operators
let a = 1
let b = 2
let c = a + b
c = a - b
c = a * b
c = a / b
c = a % b //remainder
let d = a ** b //power
console.log(c)
console.log(++c) //incrementing +1
console.log(--c) //decrement -1
//Assignment Operators
let x = 1
x += 5; //same as x = x + 5
console.log(x);
let y = 2
y *= 3; //same as y = y * 3
console.log(y)
y /= 2; //same as y = y / 2
console.log(y)
y -= 2; //y = y - 2
console.log(y)
//Comparison Operators
console.log(y > 0); //T/F response
console.log(y >= 3);
console.log(y < 0);
console.log(y <= 2);
//Loose equality - only checking value
console.log(y == 1) //equal to
console.log(y != 1) //not equal to
//Strict Equality - checking value and type
console.log(y === 1) //checks for type and value
console.log(y !== 1) //also checks for type 
let f = 1
console.log('1' === f) //comes back false due to different type
console.log('1' == f) //come back true, same data, different type 
//Ternary Operators - new school
let total = 100;
let result = total > 100 ? 'gold' : 'silver'; //if total more than 100, give gold, otherwise silver. 
console.log(result)
//old school
// if (result > 100) {
//     console.log(result)
// }
// else {
//     console.log(result)
// }
//Logical Operators
let mumLikesMe = false;
let dadLikesMe = true;
let happyness = mumLikesMe && dadLikesMe; //both need to be true to achieve happyness 
let happyness2 = mumLikesMe || dadLikesMe; //one needs to be true to achieve happyness 
let sadness = !happyness //NOT operator !
console.log('Are you are sad panda', sadness)
console.log('Are you a happy panda', happyness);
console.log(happyness2);
//Operators follow BIMDAS.
//Add brackets if you want to do addition first. 
let col1 = 'red';
let col2 = 'blue';
let col3 = col1; //col3 go red
col1 = col2; //col1 will go blue
col2 = col3; //col2 will go red
//flipped the cooloors. 
console.log('col 1 is', col1);
console.log('col 2 is', col2);
[col1, col2] = [col2, col1]; //works - easier way to flip values
console.log('col1', col1, 'col2', col2)
