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

// 身份证号验证
export function validateIDcard(rule, value, callback) {
  let reg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/
  if(!value) {
    return callback(new Error("请输入身份证号"))
  } 
  if(!reg.test(value)) {
    callback(new Error("身份证号格式有误"))
  } else {
    let len, re;
    len = value.length;
    // 身份证号为15位
    if (len == 15) {
      re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
      var arrSplit = num.match(re);
      //检查生日日期是否正确 
      var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
      var bCorrectDay;
      bCorrectDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) &&
                    (dtmBirth.getDate() == Number(arrSplit[4]));
      if (!bCorrectDay) {
        return false;
      } else {
      //将15位身份证转成18位 
      var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
      var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
      var nTemp = 0,i;
      num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
      for (i = 0; i < 17; i++) {
        nTemp += num.substr(i, 1) * arrInt[i];
      }
      num += arrCh[nTemp % 11];
      return true;
      }
    }
    // 身份证号为18位
    if (len == 18) {
      re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
      let arrSplit = value.match(re);
      // 检查生日日期是否正确 
      let dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
      let bCorrectDay;
      bCorrectDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) &&
                    (dtmBirth.getDate() == Number(arrSplit[4]));
      if (!bCorrectDay) {
        callback(new Error("身份证号格式有误"))
      } else {
        // 检验校验码是否正确。 
        let valnum;
        let arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
        let arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
        let nTemp = 0,i;
        for (i = 0; i < 17; i++) {
          nTemp += value.substr(i, 1) * arrInt[i];
        }
        valnum = arrCh[nTemp % 11];
        if (valnum != value.substr(17, 1)) {
          callback(new Error("身份证号格式有误"))
        }
        else {
          callback()
        }
      }
    }
  }
}

// 邮政编码验证
export function validatePostalcode(rule, value, callback) {
  let reg = /^[1-9][0-9]{5}$/
  if (!value) {
    return callback(new Error('请输入邮政编码'))
  }
  if (!reg.test(value)) {
    callback(new Error('邮政编码的格式有误'))
  } else {
    callback()
  }
}
