// Given a list of the following major Houses of Westeros and their respective mottos:
//
// var houses = [
//   {name: "Targaryen", motto: "Fire and Blood"},
//   {name: "Stark",     motto: "Winter is Coming"},
//   {name: "Bolton",    motto: "Our Blades Are Sharp"},
//   {name: "Greyjoy",   motto: "We Do Not Sow"},
//   {name: "Tully",     motto: "Family, Duty, Honor"},
//   {name: "Arryn",     motto: "As High as Honor"},
//   {name: "Lannister", motto: "Hear Me Roar!"},
//   {name: "Tyrell",    motto: "Growing Strong"},
//   {name: "Baratheon", motto: "Ours is the Fury"},
//   {name: "Martell",   motto: "Unbowed, Unbent, Unbroken"}
// ];
// Write a function that, when passed the name of a House, returns its motto. For instance:
//
// motto("Tyrell")
// should return
//
// "growing strong"
// If passed an invalid House name, the script should return an empty string.

// Your Solution:

// Add the Houses to the array
var houses = [];
var targaryen = {name: "Targaryen", motto: "Fire and Blood"};

// Implement the function
function motto(name) {
  // Search the Houses array for a house whose name
  houses.forEach(function(e, i){
    var houseName = houses[i].name;
    if (houseName === name) {
      // equals the name passed to motto() and return it
      return houses[i].motto;
    } else {
      // If none are found, return an empty string.
      return "";
    }
  });
}



// Your Test Cases:

// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message)
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message)
Test.expect(houses.length < 11, "Too many houses.");
Test.expect(houses.length == 10, "Too few houses.");
Test.expect(houses[0].name, "Houses must have a name.");
Test.expect(houses[0].motto, "Houses must have a motto.");

Test.expect(motto("derp") == "", "When passed an invalid House name, motto should return an empty string");
Test.expect(motto("Targaryen") == "Fire and Blood", "The motto for House Targaryen is incorrect.");
Test.expect(motto("Stark") == "Winter is Coming", "The motto for House Stark is incorrect.");
Test.expect(motto("Bolton") == "Our Blades Are Sharp", "The motto for House Bolton is incorrect.");
Test.expect(motto("Greyjoy") == "We Do Not Sow", "The motto for House Greyjoy is incorrect.");
Test.expect(motto("Tully") == "Family, Duty, Honor", "The motto for House Tully is incorrect.");
Test.expect(motto("Arryn") == "As High as Honor", "The motto for House Arryn is incorrect.");
Test.expect(motto("Lannister") == "Hear Me Roar!", "The motto for House Lannister is incorrect.");
Test.expect(motto("Tyrell") == "Growing Strong", "The motto for House Tyrell is incorrect.");
Test.expect(motto("Baratheon") == "Ours is the Fury", "The motto for House Baratheon is incorrect.");
Test.expect(motto("Martell") == "Unbowed, Unbent, Unbroken", "The motto for House Martell is incorrect.");
