const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(msg, key) {
    if (!msg || !key) {
      throw new Error("Incorrect arguments!")
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const upper_msg = msg.toUpperCase();
    const upper_key = key.toUpperCase();
    let vig_key =  upper_key.repeat(Math.ceil(upper_msg.length / upper_key.length));
    vig_key = vig_key.slice(0, upper_msg.length);
    let key_index = 0;
    let res = '';

    for (let i = 0; i < upper_msg.length; i++) {
      const char = upper_msg[i];
      if (alphabet.includes(char)) {
        const msg_index = alphabet.indexOf(char);
        const key_char = vig_key[key_index];
        const key_char_index = alphabet.indexOf(key_char);
        const encrypted_char = alphabet[(msg_index + key_char_index) % 26];
        res += encrypted_char;
        key_index++;
      }
      else {
        res += char;
      }
    }
    return this.isDirect ? res : res.split('').reverse().join('')
  }
  decrypt(msg, key) {
    if (!msg || !key) {
      throw new Error("Incorrect arguments!")
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const upper_msg = msg.toUpperCase();
    const upper_key = key.toUpperCase();
    let vig_key =  upper_key.repeat(Math.ceil(upper_msg.length / upper_key.length));
    vig_key = vig_key.slice(0, upper_msg.length);
    let key_index = 0;
    let res = '';

    for (let i = 0; i < upper_msg.length; i++) {
      const char = upper_msg[i];
      if (alphabet.includes(char)) {
        const msg_index = alphabet.indexOf(char);
        const key_char = vig_key[key_index];
        const key_char_index = alphabet.indexOf(key_char);
        const encrypted_char = alphabet[(msg_index - key_char_index + 26) % 26];
        res += encrypted_char;
        key_index++;
      }
      else {
        res += char;
      }
    }
    return this.isDirect ? res : res.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
