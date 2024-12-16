// Syntax-------------------------------------------------------
//1. Using the array literal notation []
let numArr: number[] = [1, 2, 3, 4, 5];

//2. Using the Array generic type
let numArr1: Array<number> = [1, 2, 3, 4, 5];

// Type Annotations---------------------------------------------
// TypeScript allows you to specify the type of elements in an array, ensuring type safety.
// This means you can only store values of the specified type in the array.

let mixedArr: (number | string)[] = [1, 2, "Three"];

// Multi-dimensional Arrays-------------------------------------

let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Tuples--------------------------------------------------------
// Tuples are a special type of array in TypeScript. They allow you to specify the exact
// type and number of elements in an array.
// NOTE: JS does not have support for tuple, TS has

let tuple: [string, number, boolean] = ["hello", 42, true];
let tuple2: [string, number, boolean, string] = ["hello", 42, true, "world"];

// using type Aliase---------------------------------------------
type ArrayElementType = {
  name: string;
  age: number;
};

let arr: ArrayElementType[] = [];
arr.push({ name: "Praveen", age: 24 });

// readonly array
let readonlyArr: readonly number[] = [1, 2, 3, 4, 5];
// readonlyArr.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'.


