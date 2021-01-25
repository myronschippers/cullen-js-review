/*
JARGON
. - dot
() - parenthesis, parens
[] - brackets, square brackets, square bracks, square braces
{} - curly bracks, braces, curlies, curly brackets
< - less than, bird,  angle brackets
> - greater than, gator, angle brackets
/ - whack, slash, forward slash
\ - back slash
! - not, bang
# - pound, hash, number
* - splat, star
|| - pipes, double pipes, or
$ - bling, dollar sign, cash
NaN - not a number, bread
*/

/*
Data Types

numbers
0 1 2 3

// native functions
parseInt()
parseFloat()

strings
'120' 'cat' '*'

booleans (flag)
true
false
*/

// VARIABLES
// const - cannot reset value
// let - reset value
// var - DO NOT WANT YOU TO USE THIS

const product = 'orange';
let firstName = 'Myron';
firstName = 'Chad';

// let - keyword
// name - name anything it's kittyKat
// = - assignment operator
// 'myron' - value

const foo = 'string';
const bar = 29;

let myNumber = 3;

myNumber = myNumber + 1; // 4

myNumber += 1; // 5
myNumber -= 1; // 4

myNumber++; // auto add 1
myNumber--; // auto minus 1

// + is adding
// - is subtracting
// * is multiply
// / is divide

// Concatenation

const myNewNumber = 1 + '2'; // 3 instead '12'
console.log(myNewNumber);
const myMinus = '2' - 1;
console.log(myMinus);
const myDivide = '36' / 6;
console.log(myDivide);
const myMultiply = 'ten' * 3;
console.log(myMultiply);

// NaN - not a number
// null - string false
let lastName = 'Myron';
// undefined

// no defined

// FALSY
// ''
// 0
// null
// undefined
// NaN

// CONDITIONALS
if (lastName !== 'Myron') {
  // executed code
  console.log('Yippy');
} else {
  // if expression is false run code
  console.log('IT WAS FALSY');
}

// == - only matches value
// === - matches value and type
// != - only not value
// !== - both not value and type

const numComp1 = '8';
const numComp2 = '10';

if (numComp1 > numComp2) {
  console.log('Comp 1 WINS!!!!');
} else if (numComp1 < numComp2) {
  console.log('Comp 2 WINS!!!!');
} else {
  console.log('Nothing WINS?!?!?!');
}

// >
// <
// >=
// <=

// LOOPS

let whileValue = 8;

// while
while (/* expression - evaluates to truthy */ whileValue >= 0) {
  // code block - runs every iteration
  console.log('WHILE', whileValue);
  whileValue--;
}

console.log('AFTER WHILE:', whileValue);

// let masterNumber = 2;
let hatList = ['stocking cap', 'baseball cap', 'fedora', 'bowler cap'];
// for i
for (let i = 0; i < hatList.length; i++) {
  // perform code
  console.log(hatList[i]);
}

// for in
for (let itemIndex in hatList) {
  console.log('itemIndex:', itemIndex);
}

// for of
for (let itemValue of hatList) {
  console.log('itemValue:', itemValue);
}

// FUNCTIONS

// function declaration
function doubleIt(magicNumber) {
  // code block
  // what happens when called

  // optional
  return magicNumber * 2;
}
const valueBack = doubleIt(3);

console.log('valueBack:', valueBack);

// function expression
const halveIt = function (aNumber) {
  return aNumber / 2;
};

console.log('valueBack:', halveIt(22));
