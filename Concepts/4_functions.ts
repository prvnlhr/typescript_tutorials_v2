// Definition

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!

// Function Types-------------------------------------------------------------------
// You can specify the types of parameters and return values in TypeScript.
// This ensures that functions are used correctly throughout your code.

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3)); // Output: 5

// Optional and Default Parameters--------------------------------------------------

// 1.Optional Parameters: Use the ? syntax to make a parameter optional.
function buildName(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : firstName;
}
console.log(buildName("Alice")); // Output: Alice

// 2.Default Parameters: Assign a default value to a parameter.
function buildNameWithDefault(
  firstName: string,
  lastName: string = "Smith"
): string {
  return `${firstName} ${lastName}`;
}

console.log(buildNameWithDefault("Alice")); // Output: Alice Smith

// Rest operator--------------------------------------------------------------------
function multiply(multiplier: number, ...numbers: number[]): number[] {
  return numbers.map((num) => num * multiplier);
}

console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]

// Arrow function--------------------------------------------------------------------
let myage = (age: number): string => `My age is ${age}`;

// Function Types and Interfaces------------------------------------------------------
type GreetFunc = (name: string) => string;

let greetFun: GreetFunc = (name: string) => {
  return "Hello";
};
