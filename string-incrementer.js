Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

Attention: If the number has leading zeros the amount of digits should be considered.



Your Solution:
function incrementString (input) {
  // return incrementedString



function incrementString (input) {
  // return incrementedString
  if (input.length > 0 && /\d/.test(input[input.length - 1])) {
    // ends with number, increment it
    var numericPart = input.match(/\d+$/)[0],
        textPart = input.substr(0, input.length - numericPart.length);
    var oldNumberLength = numericPart.length;
    var newNumber = parseInt(numericPart, 10) + 1,
        newNumberLength = (newNumber + '').length;
    if (newNumberLength >= oldNumberLength) {
      // no need to add leading zeros
      return textPart + newNumber;
    } else {
      var leadingZeroes = oldNumberLength - newNumberLength;
      return textPart + (new Array(leadingZeroes + 1)).join('0') + newNumber;
    }
  } else {
    return input + '1';
  }
}




Your Test Cases:
Test.assertEquals(incrementString("foobar000"), "foobar001");
Test.assertEquals(incrementString("foo"), "foo1");
Test.assertEquals(incrementString("foobar001"), "foobar002");
Test.assertEquals(incrementString("foobar1"), "foobar2");
