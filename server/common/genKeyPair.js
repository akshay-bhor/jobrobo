const crypto = require("crypto");
const fs = require("fs");

exports.genKeyPair = (save = true) => {
  // Generate RSA public/private key-pair
  const keyPair = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "spki", // Simple public key infrastricture
      format: "pem", // common formatting for rsa
    },
    privateKeyEncoding: {
      type: "pkcs8", // public key cryptography standard 8
      format: "pem",
      cipher: "aes-256-cbc",
      passphrase: process.env.AES_KEY,
      /**
       * Advanced encryption standard with 256 bit key size 128 bit block size in cipher block chaining mode
       * add passphrase also if want to encrypt key
       * */
    },
  });

  return {
    publicKey: keyPair.publicKey,
    privateKey: keyPair.privateKey,
  };
};
