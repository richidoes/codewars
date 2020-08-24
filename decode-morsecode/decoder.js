/*
Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

//code for codewars:

var decodeMorse = function(morseCode){
  var decodeString = '';
  var morseCodeWords = morseCode.split('   ');
  for (var i in morseCodeWords) {
    var morseCodeArray = morseCodeWords[i].split(' ');
    for (var j in morseCodeArray) {
      if (MORSE_CODE[morseCodeArray[j]] !== undefined) {
        decodeString += MORSE_CODE[morseCodeArray[j]];
      }
    }
    decodeString += ' ';
  }
  decodeString = decodeString.trim();  
  return decodeString;
}

*/

//Code for me, with alphabet and  client request
function decodeMorse(morseCode) {
  //store the alphabet in ref
    var ref = { 
      '.-':     'a',
      '-...':   'b',
      '-.-.':   'c',
      '-..':    'd',
      '.':      'e',
      '..-.':   'f',
      '--.':    'g',
      '....':   'h',
      '..':     'i',
      '.---':   'j',
      '-.-':    'k',
      '.-..':   'l',
      '--':     'm',
      '-.':     'n',
      '---':    'o',
      '.--.':   'p',
      '--.-':   'q',
      '.-.':    'r',
      '...':    's',
      '-':      't',
      '..-':    'u',
      '...-':   'v',
      '.--':    'w',
      '-..-':   'x',
      '-.--':   'y',
      '--..':   'z',
      '.----':  '1',
      '..---':  '2',
      '...--':  '3',
      '....-':  '4',
      '.....':  '5',
      '-....':  '6',
      '--...':  '7',
      '---..':  '8',
      '----.':  '9',
      '-----':  '0',
    };
    
    //receive data and translate from morse to common human text
    return morseCode
      .split('   ')
      .map(a => a
          .split(' ')
          .map(b => ref[b])
          .join('')
      ).join(' ');
  }
  
  //provide the the text we want to translate and print
  var decoded = decodeMorse(prompt("Que quieres decir?"));
  console.log(decoded);

/* example 

".-- --- .-. -..   .-- --- .-. -.."

*/