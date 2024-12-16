// Type aliases in  provide a way to create custom, reusable types.
// They are a powerful feature that allows you to name complex types and make
// your code more readable and maintainable. Let's dive into the details of type aliases in .

//  Basic Syntax
// A type alias is created using the `type` keyword followed by the name of the alias and the type definition.

type MyString = string;

let str: MyString = "Hello, !";

// In this example, `MyString` is a type alias for the `string` type.
// You can use `MyString` just like you would use `string`.

//  Object Types
// Type aliases are especially useful for defining complex object types.

type Person3 = {
  name: string;
  age: number;
  address?: string; // Optional property
};

let p6: Person3 = {
  name: "Alice",
  age: 30,
};

//  Union and Intersection Types
// Type aliases can also be used with union and intersection types.

// Union Types
// A union type allows a variable to be one of several types.

type ID = string | number;

let userID: ID = "abc123";
userID = 123;

// In this example, `ID` can be either a `string` or a `number`.

// # Intersection Types
// An intersection type combines multiple types into one.

type HasNameOne = {
  name: string;
};

type HasAgeOne = {
  age: number;
};

type Person4 = HasName & HasAge;

let p7: Person4 = {
  name: "Bob",
  age: 25,
};

//  Arrays and Generics
// You can create type aliases for arrays and use generics to make them more flexible.

type StringArray = string[];
type NumberArray = Array<number>;

type GenericArray<T> = T[];

let stringArray_: StringArray = ["a", "b", "c"];
let numberArray_: NumberArray = [1, 2, 3];
let genericArray: GenericArray<boolean> = [true, false, true];

//  Function Types
// Type aliases can also be used to define function types.

type Greet = (name: string) => string;

const greetNew: Greet = (name) => `Hello, ${name}!`;

console.log(greet("World")); // Output: Hello, World!

//  Combining Types
// Type aliases allow you to combine multiple types into one, creating complex and reusable types.

type AddressNew = {
  street: string;
  city: string;
  country: string;
};

type ContactInfo = {
  email: string;
  phone: string;
};

type Employee = {
  id: number;
  name: string;
  address: AddressNew;
  contact: ContactInfo;
};

let employee: Employee = {
  id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
  contact: {
    email: "john.doe@example.com",
    phone: "555-1234",
  },
};

//  Recursive Types
// Type aliases can also be recursive, which is useful for defining tree-like structures.

type TreeNode = {
  value: string;
  children?: TreeNode[];
};

let tree: TreeNode = {
  value: "root",
  children: [
    { value: "child1" },
    {
      value: "child2",
      children: [{ value: "grandchild1" }, { value: "grandchild2" }],
    },
  ],
};

// Type aliases in  are a versatile feature that allows you to create custom
// types for objects, unions, intersections, arrays, functions, and more.
// They improve code readability and maintainability by providing meaningful
// names for complex types. By leveraging type aliases, you can create robust and
// reusable type definitions in your  projects.
