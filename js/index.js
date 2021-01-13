// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.
//1.2 Print `"The driver's name is XXXX"`.
//1.3 Create a variable `hacker2` with the navigator's name.
//1.4 Print `"The navigator's name is YYYY"`.

let hacker1 = `Heather`
console.log(`The driver's name is ${hacker1}`);

let hacker2 = `Henrietta`
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

console.log("I'm ready!");

// Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name.
//1.2 Print `"The driver's name is XXXX"`.
//1.3 Create a variable `hacker2` with the navigator's name.
//1.4 Print `"The navigator's name is YYYY"`.

let hacker1 = `Heather`
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = `Henrietta`
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
//2.1. Depending on which name is longer, print:
  //- The driver has the longest name, it has XX characters. or
  //- It seems that the navigator has the longest name, it has XX characters. or
  //- Wow, you both have equally long names, XX characters!.

let driverName = hacker1.length;
let navigatorName = hacker2.length;

if (driverName > navigatorName){
  console.log(`The driver has the longest name, it has ${driverName} characters.`);
} else if (driverName < navigatorName) {
  console.log(`It seems that the navigator has the longest name, it has ${navigatorName} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${driverName} characters!.`);
}

// Iteration 3: Loops