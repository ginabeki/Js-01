const friends = ["Michael", "Steven", "Peter"];

// add values at the end of an array
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// add elements to the beggining of an array
friends.unshift("John");
console.log(friends);

// remove elements from array
friends.pop();
friends.pop();
console.log(friends);

// shift removes first element from an array
friends.shift();
console.log(friends);

// indexOf gives index of an element, for an element that is not present we get n-1
console.log(friends.indexOf("Steven"));

// includes returns true if the element is in the array and false if not

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

// conditional case for includes method
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
