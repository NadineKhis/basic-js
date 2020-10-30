const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value = true) {
    this.direct = value;
  }
  encrypt(message, key) {
    if ( !message || !key ) {
      throw new Error("error");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    const offset = "A".charCodeAt(0);
    const alphabetSize = 26;
    let res = "";
    let keyIndex = 0;
    for ( let i = 0; i < message.length; i++) {
      if ( message.charCodeAt(i) < offset || message.charCodeAt(i) > offset + alphabetSize ) {
        res += message[i];
        continue;
      } else {
        let index = ((message.charCodeAt(i) - offset + key.charCodeAt(keyIndex) - offset) % alphabetSize) + offset;
        res += String.fromCharCode(index);
      }

      keyIndex++;
      if(keyIndex === key.length){
        keyIndex = 0;
      }

    }
    return this.direct ? res : res.split('').reverse().join('');
  }

  decrypt(message, key) {
    if ( !message || !key ) {
      throw new Error("error");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    const offset = "A".charCodeAt(0);
    const alphabetSize = 26;
    let res = "";
    let keyIndex = 0;
    for ( let i = 0; i < message.length; i++) {
      if ( message.charCodeAt(i) < offset || message.charCodeAt(i) > offset + alphabetSize ) {
        res += message[i];
        continue;
      } else {
        let index = (((message.charCodeAt(i) - offset) + alphabetSize - (key.charCodeAt(keyIndex) - offset)) % alphabetSize) + offset
        res += String.fromCharCode(index);
      }
      keyIndex++;
      if(keyIndex == key.length){
        keyIndex = 0;
      }
    }
    return this.direct ? res : res.split('').reverse().join('');
}
}

module.exports = VigenereCipheringMachine;
