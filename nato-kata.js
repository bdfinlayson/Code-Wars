// In this kata, we're going to create the function nato that takes a word and returns a string spells the word using the NATO phonetic alphabet.
//
// There should be a space between each word in the returned string, and the first letter of each word should be capitalized.
//
// For those of you that don't want your fingers to bleed, this kata already has a dictionary typed out for you.

// nato('hi') // --> 'Hotel India'
// nato('abc') // --> 'Alpha Bravo Charlie'

var nato = (function() {
      var letters = {
        "A": "Alpha",
        "B": "Bravo",
        "C": "Charlie",
        "D": "Delta",
        "E": "Echo",
        "F": "Foxtrot",
        "G": "Golf",
        "H": "Hotel",
        "I": "India",
        "J": "Juliett",
        "K": "Kilo",
        "L": "Lima",
        "M": "Mike",
        "N": "November",
        "O": "Oscar",
        "P": "Papa",
        "Q": "Quebec",
        "R": "Romeo",
        "S": "Sierra",
        "T": "Tango",
        "U": "Uniform",
        "V": "Victor",
        "W": "Whiskey",
        "X": "X-ray",
        "Y": "Yankee",
        "Z": "Zulu"
      };

      return function(word) {

        //split the word into an array
        word.split('')

        //then use map to find the corresponding keys in the letters object

        .map(function(wordArr) {
          //to make the map work, convert the letters in wordArr to caps
          return letters[wordArr.toUpperCase()]

        })

        //then join the returned values each separated by a space

        .join(' ');

      };



      // Create your own tests here. These are some of the methods available:
      //  Test.expect(boolean, [optional] message)
      //  Test.assertEquals(actual, expected, [optional] message)
      //  Test.assertSimilar(actual, expected, [optional] message)
      //  Test.assertNotEquals(actual, expected, [optional] message)

var n=function(){var a={A:"Alpha",B:"Bravo",C:"Charlie",D:"Delta",E:"Echo",F:"Foxtrot",G:"Golf",H:"Hotel",I:"India",J:"Juliett",K:"Kilo",L:"Lima",M:"Mike",N:"November",O:"Oscar",P:"Papa",Q:"Quebec",R:"Romeo",S:"Sierra",T:"Tango",U:"Uniform",V:"Victor",W:"Whiskey",X:"X-ray",Y:"Yankee",Z:"Zulu"};return function(b){return b.split("").map(function(b){return a[b.toUpperCase()]}).join(" ")}}();
function randomString(){for(var a="",b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",c=0;5>c;c++)a+=b.charAt(Math.floor(Math.random()*b.length));return a}

var staticTests = [
  'babble',
  'dabble',
  'caring',
  'herring',
  'park',
  'dark',
  'bark',
  'nancy',
  'mancy',
  'supercalifragilisticexpialidocious'
];

for (var i = 0, rand; i < staticTests.length; i++) {
  Test.assertSimilar(nato(staticTests[i]), n(staticTests[i]));

  rand = randomString();
  Test.assertSimilar(nato(rand), n(rand));
}
