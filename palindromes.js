// A palindrome is a string which reads the same forward and backward. It can be a word or a sentence. Examples are:
//
// abba
// Mom!
// Dad?
// If I had a hi-fi...
// Create a function which determines for a given string if it's a palidrome or not. For this task the following properties must be fulfilled:
//
// return a boolean value
// consider an empty string as a legal word
// ignore case
// ignore whitespace and punctuation

// Answer:

function isPalindrome(str) {
  //take word and remove all punctuation and whitespace
  str = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()\'\s]/g, "");
  //then split it into an array, reverse it, make it lower case, and compare it
  if (str.split('').reverse().join('').toLowerCase() === str.split('').join('').toLowerCase()) {
    console.log('is true');
    return true;
  } else {
    console.log('is false');
    return false;
  }
}


// Test Cases:

Test.assertEquals(isPalindrome(""), true);
Test.assertEquals(isPalindrome("maoam"), true);
Test.assertEquals(isPalindrome("abc"), false);
Test.assertEquals(isPalindrome("If I had a hi-fi..."), true);