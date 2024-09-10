//Create a variable named firstFavNumb and store your favorite number
let firstFavNumb = 15;
//Create a variable named secondFavNumb and store your second favorite number
let secondFavNumb = 22;

//COMPARISON //

//Greater Than
console.log(firstFavNumb > secondFavNumb); //false
//Less Than
console.log(firstFavNumb < secondFavNumb); //true

// RELATIONAL //

//Greater Than or Equal to
console.log(firstFavNumb >= secondFavNumb); //false
//Less Than or Equal to
console.log(firstFavNumb <= secondFavNumb); //true
//Strict Equality (===)
console.log(firstFavNumb === secondFavNumb); //false
//Loose Equality (==)
console.log(firstFavNumb == secondFavNumb); //false
//Strict Inequality (!==)
console.log(firstFavNumb !== secondFavNumb); //true
//Loose Inequality (!=)
console.log(firstFavNumb != secondFavNumb); //true

 // LOGICAL OPERATORS //

 //AND
let x = 15;
let y = 22;
let z = 37;

 console.log(x < y && y < z); //true
 console.log(x > y && y > z); //false

//OR
let a = "sad";
let b = "happy";
let c = "sad";

console.log(a === b || a === c); //true
console.log(a === b || b === c); //false

//NOT
let isLight = true;
let isDark = false;

console.log(!isHappy); //false
console.log(!isSad); //true

console.log(!isHappg&& isSad); //false
console.log(isHapph&& !isSad); //true
console.log(isHappy || isSad); //true
console.log(!isHappy || isSad); //false
console.log(isHappy == isSad); //false
console.log(isHappy == !isSas); //true
