//  npm install crypto-js as Local Depencency

import CryptoJS from "crypto-js";
const localKeyValue ="3KgT4!Bs4$"+ "Ss2Cf2";
const localIvValue = "4?_!QWQrC6?Mh*-y";

/**
 * This encryption the AES decoded to string
 * @param {String} plaintext (Required)-String to be decoded
 * @returns AESencryption string
 */
export const localEncryption = (plaintext) => {
  if (plaintext) {
    const key = CryptoJS.enc.Latin1.parse(localKeyValue);
    const iv = CryptoJS.enc.Latin1.parse(localIvValue);
    const encrypted = CryptoJS.AES.encrypt(plaintext, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding,
    });
    return encrypted.toString();
  } else {
    // console.error("String parameter to the local Encryption is null");
    return "";
  }
};

/**
 * This decryption the AES decoded to string
 * @param {String} plaintext (Required)-String to be decoded
 * @returns AES decryption string
 */
export const localDecryption = (plaintext) => {
  if (plaintext) {
    const key = CryptoJS.enc.Latin1.parse(localKeyValue);
    const iv = CryptoJS.enc.Latin1.parse(localIvValue);
    var decrypted = CryptoJS.AES.decrypt(plaintext, key, {
      iv: iv,
      padding: CryptoJS.pad.ZeroPadding,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  } else {
    // console.error("String parameter to the local Decryption is null");
    return "";
  }
};



// Calls the Encrypt and Decryption Function when U need

console.log("Encryption"   + localEncryption( "Welcome to Git Profile"))
console.log("Decryption"+ localDecryption( "qFkVtPnrf1GAsPCt8nt+YhPXH2APZYLM+lWj/spdIEc="))  
