const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";
// strings
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// numbers
const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
// last element in an array
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// create an array with info about someone
const firstName = "Gina";
const gina = [firstName, "Beki", 2037 - 1996, "teacher", friends];
console.log(gina);
console.log(gina.length);

// exercise
const calcAge = function (birthyear) {
  return 2037 - birthyear;
};

const years1 = [1990, 1967, 2022, 2010, 2018];
const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);

console.log(age1, age2, age3);

// expression
const ages = [
  calcAge(years1[0]),
  calcAge(years1[1]),
  calcAge(years1[years1.length - 1]),
];
console.log(ages);
