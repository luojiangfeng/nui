// 手机号验证
export function validatePhone(rule, value, callback) {
  // const phoneReg = /^(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/
  let reg = /^1\d{10}$/
  if (!value) {
    return callback(new Error('请输入手机号码'))
  }
  if (!reg.test(value)) {
    callback(new Error('手机号码格式有误'))
  } else {
    callback()
  }
}

//  邮箱验证
export function validateEmail(rule, value, callback) {
  // const phoneReg = /^(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/
  let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  if (!value) {
    return callback(new Error('请输入邮箱'))
  }
  if (!reg.test(value)) {
    callback(new Error('邮箱的格式有误'))
  } else {
    callback()
  }
}
