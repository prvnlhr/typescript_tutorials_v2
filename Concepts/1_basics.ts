// Primitives------------------------------------------------------

let isActive: boolean = true; // Boolean
let userName: string = "John Doe"; // String
let userAge: number = 30; // Number
let unknownValue: undefined = undefined; // Undefined
let emptyValue: null = null; // Null

// Any (use sparingly as it bypasses type checking)----------------

let flexible: any = "Can be anything";
flexible = 42;
flexible = "hellow";
flexible = [1, 2, 3];

// Arrays----------------------------------------------------------

let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["one", "two", "three"];
let mixedArray: (number | string)[] = [1, "two", 3];

// Tuples----------------------------------------------------------

let userInfo: [string, number] = ["Alice", 25];

// Enums-----------------------------------------------------------

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
let favoriteColor: Color = Color.Green;

// Objects---------------------------------------------------------

let person: { name: string; age: number; isActive: boolean } = {
  name: "Alice",
  age: 25,
  isActive: true,
};

// Union Types-----------------------------------------------------

let id: string | number;
id = "abc123"; // Valid
id = 123; // Also valid

// Type Aliases
type Role = "admin" | "editor" | "viewer";
let userRole: Role = "admin";

// Function with Typed Parameters and Return Type-------------------

function addNumbers(a: number, b: number): number {
  return a + b;
}

// Void Function (no return value)
function logMessage(message: string): void {
  console.log(message);
}

// Optional Parameters
function greet(name: string, age?: number): string {
  return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}.`;
}

// Interfaces-----------------------------------------------------

interface Product {
  id: number;
  name: string;
  price: number;
  category?: string; // Optional property
}

let product: Product = {
  id: 1,
  name: "Laptop",
  price: 1500,
};

// Generics-------------------------------------------------------

function getArray<T>(items: T[]): T[] {
  return [...items];
}
let numberArray = getArray<number>([1, 2, 3]);
let stringArray = getArray<string>(["one", "two", "three"]);

// Type Assertions
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;

// Never (used for functions that never return)-------------------
function throwError(errorMessage: string): never {
  throw new Error(errorMessage);
}

// Null and Undefined with Union Types----------------------------
let optionalValue: string | undefined;
optionalValue = "Hello";
optionalValue = undefined;
