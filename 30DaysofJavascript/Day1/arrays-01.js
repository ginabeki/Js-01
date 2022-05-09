let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);

console.log(listOfNumbers[0]);

console.log(listOfNumbers[2 - 1]);

// PROPERTIES
// dots and square brackets are the main two ways to access properties in JS i.e value.x and value[x].
// any word after dot is the literal name of the property
// dot notation cannot be used with numbers, and this is where square brackets come into play i.e value[2]
// length property of an array tells us how many elements it has
// to find the length of an array you typically write array.length

// METHODS
// properties that contain functions are generally called methods of value they belong to, as in "toUpperCase is a methof of a string".
let doh = "Doh";
console.log(typeof doh.toUpperCase);

console.log(doh.toUpperCase());

// This example demonstrates two methods you can use to manipulate arrays:

let sequence = [1, 2, 3];
// push adds values to the end of an array
sequence.push(4);
sequence.push(5);
console.log(sequence);

// pop removes values at the end of an array
console.log(sequence.pop());
console.log(sequence);

// OBJECTS
// One way to create an object is by using braces as an expression

let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

// example
let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree",
};

let anObject = {
  left: 1,
  right: 2,
};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);

console.log("left" in anObject);
console.log("right" in anObject);

// Object.keys function can be used to find out what properties an object has. You give it an object, and it returns an array of strings - the object's property names.

console.log(Object.keys({ x: 0, y: 0, z: 2 }));

// There's an Object.assign function tha copies all properties from one object into another.

let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);

// example2
let journal = [
  {
    events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false,
  },
  {
    events: [
      "work",
      "ice cream",
      "cauliflower",
      "lasgna",
      "touched tree",
      "brushed teeth",
    ],
    squirrel: false,
  },
  {
    events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true,
  },
];

// Mutability

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);

console.log(object3.value);

const score = { visitors: 0, home: 0 };
// This is okay
score.visitors = 1;
// THis isn't allowed
score = { visitors: 1, home: 1 };

// The Lycanthrope's log

let journal = [];

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

// Array loops
for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // Do something with entry
}

for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}

// Strings and their properties

let kim = "Kim";
kim.age = 88;
console.log(kim.age);

// slice & indexOf
console.log("coconuts".slice(4, 7));
// nut
console.log("coconut".indexOf("u"));
// 5

// one difference is that a string's indexOf can search for a string containing more than one character, whereas the corresponding array method looks only for a single element.

console.log("one tow three".indexOf("ee"));

// Rest parameters
/* 
It can be useful for a function to acept any number of arguments. For example, Math.max computes the maximum of all arguments it is given. To write such a function, you put three dots before the function's last parameter, like this:
*/

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// 9

// JavaScript Object Notation (JSON)
// comments  are not allowed in JSON.
// A journal entry might look like this when represented as JSON data:

{
    "squirrel": false,
    "events": ["work", "touched tree", "pizza", "running"]
}

let string = JSON.stringify({squirrel: false,
    events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]
