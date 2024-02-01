/*
Comments
*/

/* Declaring variable */
var a;

/* Assigning variable */
var b = 2;

var myNumber = 11;

myNumber--;
myNumber++;

var z = 3;
a += 12;

var myStr = "I am a \"double quoted\" string inside \"double quotes\" ";
console.log(myStr);
/***
 *      \' single quote
 *      \" double quote
 *      \\ backslash
 *      \n newline
 *      \r carriage return
 *      \t tab
 *      \b backspace
 *      \f form feed
 * 
 * 
 * 
 */

var myStr02 = "String" + "String";

// to get third last letter

var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length -3];

// Arrays

var ourArray = [["the universe", 42], ["everything", 10101]];

var myArray = [];

// Manipulate Arrays with push ()

ourArray.push(["happy", "joy"]);

// Remove  last item from array with pop function

ourArray.pop();

// Shift function it removes first element of array

ourArray.shift();