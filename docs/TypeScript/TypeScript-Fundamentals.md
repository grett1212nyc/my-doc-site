---
id: TypeScript-Fundamentals
title: Getting started with TypeScript
description: Getting started with TypeScript
---

- Alternative to JavaScript
- Allows us to use strict types
- Supports modern features (arrow functions, let, const etc)
- Extra features (generics, interfaces, tuples etc)
- TypeScript are compiled to JavaScript ( the browser does not understand TypeScript )

## Installing TypeScript

```ps
npm i -g typescript
```

## Compiling TypeScript

```ps
tsc app.ts
```

On Windows you might have to add %APPDATA%\npm to you path environment variable if you get a tsc not found error.

To continuously watch the ts file for changes you can add the -w flag.

```ps
tsc app.ts -w
```

## Create Typescript config file

```ps
tsc --init
```

## Type Basics

```javascript
// TypeScript infers the type automatically
let var1 = "I love TypeScript";
// Trying to reassign a variable to a different type will result in an error
var1 = 23; // Type '23' is not assignable to type 'string'

// For functions we need to explicitly define the input type
const result = (num1: number) => {
  return num1 * 2;
};

console.log(result(23));
```

## Objects and Arrays

```javascript
// arrays
let names = ["luigi", "mario", "yoshi"];
// this works as expected
names.push("toad");
// this doesn't work, because the array was declared with string only
names.push(45); // Argument of type '45' is not assignable to parameter of type 'string'.

let mixedarray = ["jean", 36, true];
// all of the below works because we declared a mixed array
mixedarray.push("melanie");
mixedarray.push(10);

// objects
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

// Properties of the same type can be reassigned
ninja.name = "jean";
ninja.belt = "white";
// but you can reassign a different type
ninja.age = "36"; // Type '"36"' is not assignable to type 'number'
// You also can't add properties
ninja.skills = "kicking"; // Property 'skills' does not exist on type '{ name: string; belt: string; age: number; }'
// You also can reassign ninja to a different type
ninja = []; // Type 'undefined[]' is missing the following properties from type '{ name: string; belt: string; age: number; }': name, belt, age
```

## Explicit Types

```javascript
// explicit types

// Declare varialbe for future use
let character: string;
let age: number;
let isLoggedin: boolean;

// We can only assign a value of the explicity declared type.
age = "36"; // Will not work, wrong type
age = 36;

isLoggedin = 34; // Will not work, wrong type
isLoggedin = true;

// arrays

let ninja: string[] = [];
// We can only push strings
ninja.push("jean", "john");

// If we want to push different types on to the array we need to use union types

// union types

let mixed: (string | number)[] = [];
mixed.push("jean", 36); // Works fine
// can do this
mixed.push("jean", 36, true); // booleans not allowed

// unions on normail variables
let uid: string | number;
uid = "12234";
uid = 567;
uid = true; // won't work

// object
let ninjaOne: object;
ninjaOne = {
  name: "jean",
  age: 36,
};

let ninjaTwo: {
  name: string,
  age: number,
  belt: string,
};

ninjaTwo = {
  name: "jean",
  age: 36,
  belt: "black",
};
```

## Dynamic (any)

```javascript
// the any type basically remove all the type checking
let age: any;

// variable can be reassign to any type
// these are all valid
age = true;
age = "36";
age = 36;

// arrays
let mixed: any[] = [];
// valid for any type
mixed.push(20, "45", true);

// objects
let ninja: { name: any, age: any };
// valid assignments
ninja = { name: "jean", age: "25" };
ninja = { name: 36, age: "25" };
```

## Functions

```javascript
// void functions that don't return anything
const add = (a: number, b: number, c: number = 10) => {
  console.log(a + b + c); // 18
};
add(3, 5);

// You can optionally specify the return type, void
const add2 = (a: number, b: number, c: number = 10): void => {
  console.log(a * b * c);
};

// return type function
const minus = (a: number, b: number) => {
  return a * b;
};
minus(10, 3); // 7

// You can optionally specify the return type, number
const minus2 = (a: number, b: number): number => {
  return a * b;
};
```

## Type Aliases

```javascript
const greet = (user: { name: string, age: number }) => {
  console.log(`Hello ${user.name}, I see you are ${user.age} years old`);
};
// we can recreate the above function to use a type alias
type user = { name: string, age: number };

const greet2 = (user: user) => {
  console.log(`Hello ${user.name}, I see you are ${user.age} years old`);
};
// And it can be reused in multiple functions
const greetAgain = (user: user) => {
  console.log(`Hello ${user.name}, happy birthday!`);
};
```

## Function Signature

```javascript
// Example1

//signature
let greet: (a: string, b: string) => void;

// Function
greet = (name: string, greeting: string) => {
  console.log(`${name} sasy ${greeting}`);
};

// Example 2

//signature
let calc: (a: number, b: number, c: string) => number;

// Function
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "Add") return numOne + numTwo;

  return numOne - numTwo;
};

// Example 3
type person = { name: string, age: number };

//signature
let logDetails: (obj: person) => void;

// Function
logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
```

## The DOM and Type Casting

```javascript
// Selecting the form element via the class
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// Eventlistener
form.addEventListener("submit", (ev: Event) => {
  ev.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
```

## Classes

```javascript
//classes

class Invoice {
  constructor(
    readonly client: string, // can not be modified internally or externally
    private details: string, // can not be modified outside of class
    public amount: number // can be modified outside of class
  ) {}

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

// create instance of the class
const invOne = new Invoice("Mario", "work on new site", 300);
const invTwo = new Invoice("Jean", "work on new site", 400);

// Creating an array of invoices
let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});
```

## Interfaces

Allows us to enforce a certain structures for classes and objects.

Basic example

```typescript
// interface
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

// This me variable must implement the IsPerson structure
const me: IsPerson = {
  name: "Jean",
  age: 36,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    return 30;
  },
};

// create a function that expects a value of type IsPerson
const greetingPerson = (person: IsPerson) => {
  console.log(person);
};

greetingPerson(me);
```

with classes

```typescript
// Create interface
export interface IInvoice {
  format(): string;
}

// Then implement the class with the interface
import { IInvoice } from "../interfaces/IInvoice.js";

export class Invoice implements IInvoice {
  constructor(
    readonly client: string, // can not be modified internally or externally
    private details: string, // can not be modified outside of class
    public amount: number // can be modified outside of class
  ) {}

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
```

## Generics

Reusable blocks of code that can be used with different types

```typescript
const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 40 });
let docTwo = addUID("shaun");

console.log(docOne.name);

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "shaun" },
};

const docFour: Resource<string[]> = {
  uid: 1,
  resourceName: "shoppingList",
  data: ["bread", "milk"],
};
```

## Enums

Allows us to create a constant set of items and associate them with a numeric value

```typescript
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: "name of the wind" },
};
const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.DIRECTOR,
  data: { title: "name of the wind" },
};
```

## Tuples

Like arrays, but the types of data in each position is fixed once initialized.

```typescript
let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "yoshi";
arr = [30, false, "yoshi"];

let tup: [string, number, boolean] = ["ryu", 25, true];
tup[0] = false; // no allowed
tup[0] = "ken"; // allowed

let student: [string, number];
student = [23564, "chun-li"]; // no allowed
student = ["chun-li", 23564]; // allowed
```
