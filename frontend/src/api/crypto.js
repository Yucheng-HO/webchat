const CryptoJs = require('crypto-js')

const key  = CryptoJs.enc.Utf8.parse("1234123412ABCDEF")
const iv = CryptoJs.enc.Utf8.parse('ABCDEF1234123412')

const decodeHex = (data) => {
    let encryptedStr = CryptoJs.enc.Hex.parse(data)
    let srcs = CryptoJs.enc.Base64.stringify(encryptedStr)
    let decrypt = CryptoJs.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJs.mode.CBC, padding: CryptoJs.pad.Pkcs7 });
    let decryptedStr = decrypt.toString(CryptoJs.enc.Utf8);
    return decryptedStr.toString();
}

const encodeHex = (word) => {
    let srcs = CryptoJs.enc.Utf8.parse(word);
    let encrypted = CryptoJs.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJs.mode.CBC, padding: CryptoJs.pad.Pkcs7 });
    return encrypted.ciphertext.toString().toUpperCase();
}

export {decodeHex,encodeHex}