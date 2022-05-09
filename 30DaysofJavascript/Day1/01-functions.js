"use strict";
/*
// basic booking function
const bookings = [];

const createBooking = function (flightnum, numPassengers = 1, price = 199) {
  // Es5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightnum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
createBooking("LH123", 2, 800);
*/
// How passing arguments works value vs. reference

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtman",
  passport: 3632472367235,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;
  if (passenger.passport === 3632472367235) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
// // Is the same as doing ...
// const flightNum = flight;
// const passenger = jonas;

// example
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(jonas);
checkIn(flight, jonas);
