/*
In TypeScript, interfaces are a powerful way to define the structure of objects. 
They allow you to define the shape of data, enforce consistency, and ensure that 
objects adhere to a specific contract. Let's dive into the details of interfaces in TypeScript

*/

interface Person5 {
  name: string;
  age: number;
}

let p5: Person5 = {
  name: "Alice",
  age: 25,
};

// Optional Properties--------------------------------------------------------------------
// You can define optional properties in an interface using the ? symbol.
// This means that the property may or may not be present in the object.

interface Person6 {
  name: string;
  age?: number; // age is optional
}

let person1: Person6 = { name: "Alice" };
let person2: Person6 = { name: "Bob", age: 30 };

//Readonly Properties---------------------------------------------------------------------

// The readonly modifier ensures that a property cannot be modified after the object is created.
interface Person7 {
  name: string;
  readonly age: number;
}

let person7: Person7 = { name: "Alice", age: 30 };
// person.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.

// Extending Interfaces------------------------------------------------------------------
// Interfaces can extend other interfaces, allowing you to build complex types from simpler ones.

interface Name {
  name: string;
}

interface Person8 extends Name {
  age: number;
}

let person8: Person8 = {
  name: "Alice",
  age: 30,
};

// Implementing Interfaces in Classes----------------------------------------------------
// Classes can implement interfaces, enforcing that the class adheres to the structure defined by the interface.

interface Person9 {
  name: string;
  age: number;
  greet(): string;
}

class Employee1 implements Person9 {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  greet() {
    return `Hello, my name is ${this.name} and I work as a ${this.position}.`;
  }
}

let emp = new Employee1("Alice", 30, "Developer");
console.log(emp.greet()); // Output: Hello, my name is Alice and I work as a Developer.

/*

! Interface vs Type Aliases
While interfaces and type aliases are similar, they have some differences:

Interfaces: Preferred for defining the shape of objects and can be extended.

Type Aliases: Can define any type, including unions, intersections, and primitives, 
but cannot be extended in the same way as interfaces.

*/
