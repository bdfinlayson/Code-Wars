// Sometimes we need to use multiDIMensional arrays (array of arrays).
//
// The goal of this kata is to code a dim function witch will create an xD-array and to fill it with a default value.
//
// So..
//
// dim( d1 [,d2 [,d3 [... ]]], value )
// ..will create an array of d1 subarrays of d2 sub-subarrays of d3 sub-sub-subarrays ( and so on ), each final item being equal to value.
//
// You may assume :
//
// at least 2 arguments (d1and value) are provided
// each d argument will be a positive integer
// value argument may be a number, a string, a boolean, ...
// If value is a function then the result of this function will be attribued to the item.
//
// Examples
//
// dim( 3,3,"x" ) // => [['x','x','x'],['x','x','x'],['x','x','x']]
//
// dim( 2,2,2,0 ) // => [[[0,0],[0,0]],[[0,0],[0,0]]]
//
// dim( 3, true ) // => [true,true,true]
//
// var xxx=function(){ return "xX" }
// dim( 2,5,xxx ) // => [['xX','xX','xX','xX','xX'],['xX','xX','xX','xX','xX']]
//
// // if function provides different value on each iteration
// // then produced subarrays must should be different!
// var rnd=function(){ return (~~Math.random()*3) }
// dim( 3,2,rnd ) // => (depends on results of rnd)
//   // eg: [[0,1],[2,1],[0,0]]


// Your Solution:

function dim(){
  //-- return multi-dim array --
}


// Your Test Cases:


var d1 = dim(5,3,"x");
var d2 = dim(3,2,3,0);
d2[0][0][0]="A";

Test.expect(d1.toString()=="x,x,x,x,x,x,x,x,x,x,x,x,x,x,x");
Test.expect(d2.toString().length==(3*2*3*2-1));

Test.expect(d2[0].toString()!=d2[1].toString());
