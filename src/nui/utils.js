export function randomChar(l) {
  let x = "123456789poiuytrewqasdfghjklmnbvcxzQWERTYUIPLKJHGFDSAZXCVBNM"
  let tmp = ""
  for (let i = 0; i < l; i++) {
    tmp += x.charAt(Math.ceil(Math.random() * 10000000000) % x.length)
  }
  return tmp
}
