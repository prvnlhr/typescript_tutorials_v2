// Syntax-----------------------------------------------------

let obj: { name: string; age: number } = { name: "", age: 0 };
obj.name = "John";
obj.age = 24;

// Type Annotations-------------------------------------------
type Person = {
  name: string;
  age: number;
  address?: {
    street: string;
    city: string;
    country: string;
  };
  greet: () => string;
};

let p1: Person = {
  name: "John",
  age: 25,
  address: { street: "Napean sea road", city: "Mumbai", country: "India" },
  greet: function () {
    return "Hello";
  },
};

let p2: Person = {
  name: "Jane",
  age: 23,
  greet: function () {
    return "Hey there!!";
  },
};

p2.address = { street: "5th Avenue", city: "New York", country: "USA" };

// readonly---------------------------------------------------------------

type Car = {
  name: string;
  eom: number;
  readonly manu: string;
};

let c1: Car = { name: "Mazda Z4 500", eom: 2011, manu: "Mazda" };
// c1.manu = "BMW"; // Error: Cannot assign to 'manu' because it is a read-only property.

// Nested Objects---------------------------------------------------------

type Address = {
  street: string;
  city: string;
  country: string;
};

type PersonTwo = {
  name: string;
  age: number;
  address: Address; // Nested object
};

let p3: PersonTwo = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

// Intersection Types----------------------------------------------------
// Intersection types allow you to combine multiple object types into one.

type HasName = {
  name: string;
};

type HasAge = {
  age: number;
};

type PersonThree = HasName & HasAge;

let p4: PersonThree = {
  name: "Alice",
  age: 30,
};

// Type guards---------------------------------------------------------------------------------
// Type guards help you narrow down types at runtime, making it easier to work with objects
// that have multiple possible types.

type CarTwo = {
  type: "car";
  numberOfDoors: number;
};

type Bike = {
  type: "bike";
  hasPedals: boolean;
};

type Vehicle = CarTwo | Bike;

function getVehicleInfo(vehicle: Vehicle) {
  if (vehicle.type === "car") {
    console.log(`This car has ${vehicle.numberOfDoors} doors.`);
  } else {
    console.log(`This bike has pedals: ${vehicle.hasPedals}`);
  }
}

let myCar: CarTwo = { type: "car", numberOfDoors: 4 };
let myBike: Bike = { type: "bike", hasPedals: true };

getVehicleInfo(myCar); // Output: This car has 4 doors.
getVehicleInfo(myBike); // Output: This bike has pedals: true
