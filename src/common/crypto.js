/**
 * 通过crypto-js实现加解密
 * 对称加密使用AES，HASH采用SHA256
 * @author fengj
 */

import CryptoJS from 'crypto-js'
import sha256 from 'crypto-js/sha256'

const KP = {
  key: '1234567812345678', // 秘钥16*n
  iv: '1234567812345678' // 偏移量
}

/**
 * 使用AES进行对称加密
 * @param data
 * @param key
 * @param iv
 * @returns {string}
 */
function getAesString (data, key, iv) { // 加密
  key = CryptoJS.enc.Utf8.parse(key)
  // alert(key)
  iv = CryptoJS.enc.Utf8.parse(iv)
  let encrypted = CryptoJS.AES.encrypt(data, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.toString()
}

/**
 * 解密
 * @param encryted
 * @param key
 * @param iv
 * @return {string}
 */
function getDAesString (encryted, key, iv) {
  key = CryptoJS.enc.Utf8.parse(key)
  iv = CryptoJS.enc.Utf8.parse(iv)
  encryted = encryted.replace(/\r\n/g, '').replace(/\n/g, '')
  let decrypted = CryptoJS.AES.decrypt(encryted, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return decrypted.toString(CryptoJS.enc.Utf8).toString()
}

// AES对称秘钥加密
const aes = {
  en: (data) => getAesString(data, KP.key, KP.iv),
  de: (data) => getDAesString(data, KP.key, KP.iv)
}

// BASE64
const base64 = {
  en: (data) => CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data)),
  de: (data) => CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8)
}

// SHA256
const SHA256 = (data) => {
  return sha256(data).toString()
}

/**
 * 对参数进行签名
 * @param nonce
 * @param timestamp
 * @param data
 */
const sign = (nonce, timestamp, data) => {
  // 签名：timestamp + token + data
  let ret = []
  for (let it in data) {
    let val = data[it]
    if (typeof val === 'object' && //
      (!(val instanceof Array) || (val.length > 0 && (typeof val[0] === 'object')))) {
      val = JSON.stringify(val)
    }
    ret.push(it + val)
  }
  // 字典升序
  ret.sort()
  let signsrc = data + nonce + timestamp
  // console.log('123', SHA256('Lohgfa+Cjjh1z1sDtY/atw==' + '4ea5c508a6566e76240543f8feb06fd457777be39549c4016436afda65d2330e' + '1560853653775'))
  console.log('signsrc123', signsrc)
  return SHA256(signsrc)
}

export {
  aes,
  SHA256,
  sign,
  getDAesString,
  base64
}
