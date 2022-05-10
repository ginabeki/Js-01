// OBJECTS
// arrays
const ginaArray = [
  "gina",
  "Beki",
  2037 - 1991,
  "Engineer"[("Michael", "Peter", "Steven")],
];

// curly braces in objects to define a code block
// this object has 5 proerties with values
// object literal syntax
const gina = {
  firstName: "Gina",
  lastName: "Beki",
  age: 2037 - 1991,
  job: "Engineer",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(gina);

console.log(gina.lastName);
console.log(gina["lastName"]);

const nameKey = "Name";
console.log(gina["first" + nameKey]);
console.log(gina["last" + nameKey]);

// dot notation is a lot more cleaner and readable
// prompt function
const interestedIn = prompt(
  "What do you wanna know about Gina, Choose between firstName, lastName, age, job, and friends"
);
console.log(interestedIn);
console.log(gina[interestedIn]);

// we get undefined when trying to access a property that does not exist

if (gina[interestedIn]) {
  console.log(gina[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

// use both dot and bracket to add new properties in an object

gina.location = "Portugal";
gina["twitter"] = "@ginabeki";
console.log(gina);

// Challenge
// Jonas has three friends, and his best friend is called Michael
// hint: multiple dots to get number of friends
console.log(
  `${gina.firstName} has ${gina.friends.length} friends, and his best friend is called ${gina.friends[0]}`
);
