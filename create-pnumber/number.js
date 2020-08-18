/*
1.- Write a function that accepts an array of 10 integers (between 0 and 9) 

2.-that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

//solution for codewars:

function createPhoneNumber(numbers){
    
    if (numbers.length >= 11) {
        numbers.splice(10, 1);
    }
    return "(" + numbers[0] + numbers[1] + numbers[2] +") " +
            numbers[3] + numbers[4] + numbers[5] + "-" +
            numbers[6] + numbers[7] + numbers[8] + numbers[9];
        }

*/

//Solution for me
function createPhoneNumber(numbers) {
  //convert collected numbers to string
  numbers = numbers.toString();
  //converts the string into an array of 10 elements separated by ","
  numbers = numbers.split("", 10);

  //will print the numbers in order in which where typed and in format of phone number
  console.log(
    "(" +numbers[0] +numbers[1] +numbers[2] +") " +
      numbers[3] +numbers[4] +numbers[5] +"-" +
      numbers[6] +numbers[7] +numbers[8] +numbers[9]);
}

//We request the customer's phone number
createPhoneNumber(prompt("Escriba su numero telefonico porfavor"));




/* this is not necessary anymore because with split() we only use the first 10 elements, no matter how many numbers the client input

//allows us to limit the amount of numbers to receive
    if (numbers.length >= 11) { 
        numbers.splice(10, 1);
    }

//Another solution 
    function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
*/
