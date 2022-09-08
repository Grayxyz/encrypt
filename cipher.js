class ShiftCipher {
  constructor(n) {
    this._n = n;
  }

  //Getter to access the number of characters the cipher shifts
  get n() {
    return this._n;
  }

  //Encryption method, takes a regular input string and shifts each alphabetic character.
  encrypt(inputString) {
    // sets empty output string to output. Character codes will be added to the output string.
    let outputString = '';
    const capString = inputString.toUpperCase();
    // loops through capitalized string 
    for (let i = 0; i < capString.length; i++) {
      // saves the character code for each character in the string temporarily as charCode
      let charCode = capString.charCodeAt(i);
      // checks each character in the string to see if it is a capital letter and shifts only alphabetic characters. It skips all other symbols
      if (charCode >= 65 && charCode <= 90) {
        charCode += this.n;
        if (charCode > 90) {
          charCode -= 26;
        }
      }
      outputString += String.fromCharCode(charCode)
    }
    return outputString
  }
  decrypt(inputString) {
    // sets empty output string that characters will be added to after being unshifted
    let outputString = '';
    // transforms input string to uniformly lowercase string;
    const lowerCaseString = inputString.toLowerCase();
    // loops through string, shifting only alphabetic characters;
    for (let i = 0; i < lowerCaseString.length; i++) {
      let charCode = lowerCaseString.charCodeAt(i);
      // checks each character to make sure that it is a lowercase letter.
      if (charCode >= 97 && charCode <= 122) {
        charCode -= this.n;
        if (charCode < 97) {
          charCode += 26;
        }
      }
      outputString += String.fromCharCode(charCode);
    }
    return outputString;
  }
}
// Test Case
const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('Goodbye World!')); // returns 'IQQFDAG YQTNF!'
console.log(cipher.decrypt('UCA EJGGUG :)!'));// returns 'say cheese :)!'
