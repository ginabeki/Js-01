// object methods
const gina = {
  firstName: "Gina",
  lastName: "Beki",
  birthYear: 1991, // number
  job: "Engineer", // string
  friends: ["Michael", "Peter", "Steven"], // array
  hasDriverLicense: true, //boolean

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },
  //   calcAge: function () {
  //     // console.log(this);
  //     return 2037 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} - year old ${
      gina.job
    }, and she has ${this.hasDriverLicense ? "a" : "no"} driver's license.`;
  },
};
console.log(gina.calcAge());

console.log(gina.age);
console.log(gina.age);
console.log(gina.age);

// challenge
// "Jonas is a 46 year old teacher, and has a driver's license"
console.log(gina.getSummary());
